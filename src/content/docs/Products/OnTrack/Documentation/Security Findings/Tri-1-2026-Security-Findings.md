---
title: Tri 1 2026 Security Findings
description: Vulnerability remediation and retest findings for the OnTrack API security assessment.
---

# OnTrack API – Vulnerability Remediation Report

## Overview

This document summarises the remediation and retesting activities completed by the OnTrack Security
Team in response to the AppAttack 2-Weekly Vulnerability Assessment Report conducted during Weeks
5–7, Trimester 3 2025. The report identified six vulnerabilities affecting the Doubtfire/OnTrack
API. Each finding was reviewed, tested, and either remediated, retested, or added to the project
backlog for future remediation.

---

# Vulnerability Summary

| ID  | Vulnerability                             | Severity    | Status            |
| --- | ----------------------------------------- | ----------- | ----------------- |
| 6.1 | Misconfigured CORS                        | Minor       | ✅ Fixed          |
| 6.2 | HTTP Request Smuggling                    | Significant | ✅ Fixed          |
| 6.3 | Improper Error Handling                   | Significant | ⚠️ Not Reproduced |
| 6.4 | Missing Security Headers                  | Minor       | ✅ Fixed          |
| 6.5 | URI Credential Leakage (CVE-2025-61594)   | Severe      | ✅ Fixed          |
| 6.6 | Unauthenticated Access to System Settings | Minor       | ❌ Outstanding    |

---

# Vulnerability Addressed Summary

| PR      | Vulnerability Addressed                                               | Fix Summary                                                                                                                        |
| ------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| PR #89  | Authentication Context Confusion via Client-Supplied Identity Headers | Nginx configured to drop malformed headers, enforce HTTP/1.1 parsing, and buffer requests. Puma upgraded to ≥ 6.4.3.               |
| PR #89  | Excessive Data Exposure via Client-Side API Responses                 | Request buffering and header sanitisation implemented to prevent partial or poisoned responses from reaching the backend.          |
| PR #89  | Unauthenticated Login via Unsanitised Inputs                          | Consistent HTTP/1.1 parsing implemented to close desynchronisation vulnerabilities exploited through whitespace injection attacks. |
| PR #90  | Cross-Domain Misconfiguration                                         | Removed wildcard CORS configuration and restricted requests to trusted origins only.                                               |
| PR #90  | Cross-Origin Resource Sharing Misconfiguration                        | Removed manual wildcard CORS headers from `api_root.rb`; request origins are now validated on every request.                       |
| PR #90  | Access Control Resource Sharing Wildcard Accessible                   | Introduced `CORS_ALLOWED_ORIGINS` environment variable override for production to prevent wildcard access.                         |
| PR #97  | Missing Content Security Policy (CSP) Header                          | Added global CSP headers across all API responses through Rails middleware.                                                        |
| PR #97  | Missing Anti-Clickjacking Header                                      | Added `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` protections.                                                        |
| PR #97  | X-Content-Type-Options Header Missing                                 | Added `X-Content-Type-Options: nosniff` within global security headers middleware.                                                 |
| PR #97  | Information Disclosure via Debug Error Pages / Verbose Error Messages | Security headers and hardened production configuration reduce exposure of verbose error information and server details.            |
| PR #99  | Login Details Sent in Plain Text / Insecure Credential Handling       | Updated `uri` gem dependency to patched version ≥ 1.1.x to resolve credential leakage vulnerability.                               |
| PR #99  | Insecure Client-Side Storage of Authentication Credentials            | Patched CVE prevents credentials embedded in URIs from being exposed server-side.                                                  |
| PR #99  | Excessive Data Exposure / Information Disclosure                      | URI parsing fix prevents sensitive credentials from leaking into logs or malformed URI responses.                                  |
| PR #101 | Brute Force Vulnerability in Login Endpoint                           | Implemented IP-based authentication rate limiting using Rack::Attack to mitigate brute-force and credential stuffing attacks.      |
| PR #101 | Lack of Brute Force Protection on Authentication Endpoint             | Added login throttling protections on `/api/auth` endpoint to reduce repeated unauthorised authentication attempts.                |

---

# 6.1 Misconfigured CORS

## Finding

The API returned the header `Access-Control-Allow-Origin: *`, allowing requests from any external
domain. This increased the risk of cross-origin abuse and reconnaissance against authenticated
sessions.

## Remediation

The CORS configuration was tightened by replacing the wildcard origin with a strict allowlist of
trusted frontend domains. Unnecessary HTTP methods and wildcard request method configurations were
removed.

### Changes Applied

- Replaced wildcard origin configuration with trusted domains only
- Restricted allowed HTTP methods to required methods only
- Removed wildcard `Access-Control-Request-Method`

## Verification

After deployment, requests from untrusted origins no longer received CORS headers, confirming the
policy was correctly enforced.

---

# 6.2 HTTP Request Smuggling

## Finding

Malformed HTTP requests containing conflicting `Content-Length` and `Transfer-Encoding` headers
produced inconsistent server responses, indicating a desynchronisation issue between Nginx and Puma
request parsing.

## Remediation

Nginx and Puma were hardened to apply consistent request parsing behaviour. Malformed or conflicting
requests are now rejected before reaching the application layer.

### Changes Applied

- Standardised request parsing between Nginx and Puma
- Rejected malformed or duplicate request headers
- Updated server versions with request smuggling protections

## Verification

Retesting confirmed all malformed requests now return a consistent `400 Bad Request` response.

---

# 6.3 Improper Error Handling

## Finding

The original assessment reported verbose Ruby on Rails stack traces, middleware paths, route
debugging pages, and environment variable disclosures when malformed requests were submitted to the
API.

## Retest Results

A full retest was conducted against the production environment using the same attack methodology
from the original assessment. The vulnerability could not be reproduced. All malformed requests
returned only generic HTTP error responses without exposing stack traces or internal application
details.

## Investigation Findings

Testing confirmed the Rails production environment was already configured securely using:

```ruby
config.consider_all_requests_local = false
```

This setting prevents detailed debug information from being exposed in production environments. The
original behaviour was determined to be development-environment specific.

## Retest Methodology

The following steps were used during retesting:

1. Launched the application using `RAILS_ENV=production`
2. Intercepted requests using Burp Suite
3. Sent path traversal requests to vulnerable endpoints
4. Reviewed all responses for stack traces and internal information leakage
5. Compared responses against the original proof of concept

## Verification

Retesting confirmed:

- No stack traces exposed
- No middleware paths disclosed
- No route listings exposed
- No environment variables leaked
- Only generic `404 Not Found` responses returned

## Recommendation

Future penetration testing should be performed against environments configured identically to
production to avoid false positives caused by development-mode debugging features.

---

# 6.4 Missing Security Headers

## Finding

Several critical HTTP security headers were missing from API responses, increasing exposure to
clickjacking, MIME sniffing, XSS, and protocol downgrade attacks.

## Remediation

Security headers were applied globally across all API responses.

### Headers Applied

| Header                    | Value                                    |
| ------------------------- | ---------------------------------------- |
| X-Frame-Options           | DENY                                     |
| X-Content-Type-Options    | nosniff                                  |
| Referrer-Policy           | no-referrer                              |
| Permissions-Policy        | geolocation=(), camera=(), microphone=() |
| Content-Security-Policy   | default-src 'self'                       |
| Strict-Transport-Security | max-age=31536000; includeSubDomains      |

## Verification

Burp Suite testing confirmed all security headers were consistently returned across API responses.

---

# 6.5 URI Credential Leakage (CVE-2025-61594)

## Finding

The application used a vulnerable version of the Ruby `uri` gem (`1.0.3`) affected by
CVE-2025-61594. The vulnerability allowed credential information embedded within URIs to persist
after URI concatenation operations.

## Remediation

The vulnerable dependency was upgraded to a patched version:

```ruby
gem "uri", ">= 1.0.4"
```

Additional defence-in-depth protections were also introduced.

### Changes Applied

- Updated the `uri` gem to a patched release
- Rebuilt and redeployed the Docker environment
- Removed embedded credentials from URIs where possible
- Configured logging systems to scrub URI userinfo fields

## Verification

Retesting confirmed URI user credentials were no longer retained after URI concatenation. The
proof-of-concept output returned `RESULT: SAFE`.

---

# 6.6 Unauthenticated Access to System Settings

## Finding

The `/api/settings` endpoint remained publicly accessible without authentication, exposing internal
configuration values and application metadata.

## Current Status

This vulnerability remains unresolved and is currently tracked in the project backlog.

## Planned Remediation

The following actions are planned for a future sprint:

- Apply authentication middleware to `/api/settings`
- Restrict access using role-based access control
- Remove unnecessary configuration fields from responses
- Enable monitoring and logging for unauthenticated access attempts

## Risk Acceptance

The team has acknowledged the risk as Minor / Moderate due to the absence of exposed credentials or
personally identifiable information.

---

# Conclusion

The OnTrack Security Team successfully remediated four of the six vulnerabilities identified during
the AppAttack penetration testing engagement. One finding relating to improper error handling could
not be reproduced in the production environment and was determined to be development-environment
specific. One remaining issue relating to unauthenticated access to system settings remains
outstanding and has been scheduled for remediation in a future sprint.

Overall, the remediation activities significantly improved the security posture of the OnTrack API
by strengthening request validation, reducing information disclosure risks, enforcing secure HTTP
response headers, and patching vulnerable dependencies.

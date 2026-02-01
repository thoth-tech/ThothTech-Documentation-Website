---
title: Panopto OAuth2 Integration Guide (Updated)
---

# Panopto OAuth2 Integration Guide (Updated)

## Overview

This guide provides a detailed, step-by-step process to integrate Panopto’s OAuth2-based
authentication into your backend application (e.g., OnTrack or Doubtfire-API). It covers creating an
API client on Panopto, configuring OAuth2 settings, obtaining authorization codes, exchanging them
for access tokens, and integrating the process into your application’s workflow. Technical
improvements, corrections, and additional recommendations based on best practices have been
included.

## OAuth2 Panopto API Client Setup

To upload videos to a user's personal Panopto instance, we need to authenticate using OAuth2. This
involves creating an API client on Panopto, configuring redirect URIs and CORS, then performing the
OAuth2 Authorization Code flow to retrieve the tokens required for API calls.

## Step 1: Create an API Client on Panopto

1. Navigate to the Panopto website:

   - Panopto Login:
     [https://deakin.au.panopto.com/Panopto/Pages/Home.aspx](https://deakin.au.panopto.com/Panopto/Pages/Home.aspx)

2. Access User Settings:

   - Click on the User Settings icon (usually in the top-right corner).

3. Create a New API Client:

   - Under the API Client section, click "Create New Client".

4. Configure the API Client:

   - Set a name for the client (e.g., "OnTrack Integration Client" or "Doubtfire Integration
     Client").
   - Choose "Server-side Application" as the client type since the integration is backend-based.

5. Save Your Credentials:
   - Note down your Client ID and Client Secret. These will be used to authenticate requests.
   - Store them securely (e.g., environment variables). Do not commit these to version control.

**Example:**

```
CLIENT_ID=your_panopto_client_id
CLIENT_SECRET=your_panopto_client_secret
```

<img width="400" alt="Screenshot 2024-12-05 at 5 58 26 pm" src="https://github.com/user-attachments/assets/26e91cd0-c986-4c32-88e4-c111283f4650">

## Step 2: Configure Allowed URLs and Redirect URI

1. Set CORS (Cross-Origin Resource Sharing):

   - In the Allowed URL section of the API Client configuration, set CORS to `https://localhost` for
     local development.

2. Set Redirect URI:
   - Set the Redirect URI to `http://localhost:9127/redirect`.
   - The port number (9127) is arbitrary and used for local testing. It must match the
     `redirect_uri` parameter in your application’s OAuth flow exactly.

## Step 3: Exchange the Code for an Access Token

Once the API client is set up, the next step is to perform the OAuth2 Authorization Code flow:

### Obtain the Authorization Code

Replace `YOUR_CLIENT_ID` and `YOUR_PORT` as needed:

```
https://deakin.au.panopto.com/Panopto/oauth2/connect/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:9127/redirect&scope=openid%20api&nonce=12345
```

1. Navigate to the above URL in a browser.
2. Log in and grant access when prompted.
3. After approval, Panopto redirects to:

   ```
   http://localhost:9127/redirect?code=AUTHORIZATION_CODE
   ```

### Exchange Authorization Code for Access Token

Use the code to request an access token. Note the correction in `grant_type` spelling
(`authorization_code`):

```bash
curl -X POST "https://deakin.au.panopto.com/Panopto/oauth2/connect/token"   -H "Content-Type: application/x-www-form-urlencoded"   -d "grant_type=authorization_code"   -d "code=YOUR_AUTHORIZATION_CODE"   -d "redirect_uri=http://localhost:9127/redirect"   -d "client_id=YOUR_CLIENT_ID"   -d "client_secret=YOUR_CLIENT_SECRET"
```

**Example Response:**

```json
{
  "access_token": "eyJ...<snip>",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "openid api",
  "refresh_token": "optional_refresh_token_if_provided"
}
```

This `access_token` can be used to call Panopto’s API for video uploads. If a `refresh_token` is
included, you can use it to obtain new access tokens without user re-authorization.

## Step 4: Integrating with OnTrack (or Your Backend)

1. **Store Credentials Securely:**

   - Create an `.env` file (for local development):

     ```plaintext
     PANOPTO_CLIENT_ID=your_panopto_client_id
     PANOPTO_CLIENT_SECRET=your_panopto_client_secret
     PANOPTO_REDIRECT_URI=http://localhost:9127/redirect
     ```

   - Load these environment variables in your backend application.

2. **Authorization Flow Integration:**

   - Your backend can present a link to the authorization URL. The user clicks it to start the
     process.
   - After granting access, the backend receives the authorization code at the redirect URI.
   - The backend exchanges the code for an access token automatically.

3. **Video Upload:**
   - With a valid access token, your backend can call Panopto’s upload APIs to programmatically
     upload videos to the user’s personal Panopto instance.

## Recommendations and Updates

- **Security:**
  - Use HTTPS in production for all communications.
  - Do not log sensitive tokens (e.g., access tokens or refresh tokens).
  - Store secrets securely using a tool like AWS Secrets Manager or HashiCorp Vault.
- **Scalability:**
  - Use a shared token storage mechanism (e.g., a database) if running multiple instances of your
    backend behind a load balancer.
- **Error Handling:**
  - Implement retry logic with exponential backoff for transient failures.
  - Log errors but ensure no sensitive information (e.g., client secret) is exposed.
- **Version Control:**
  - Ensure Panopto API versions are checked periodically for updates.
  - Test all API changes in a staging environment before deploying them to production.

## References

- Panopto Documentation: [https://support.panopto.com/s/docs](https://support.panopto.com/s/docs)
- OAuth2 Specification: [https://oauth.net/2/](https://oauth.net/2/)
- Secret Management: Consider [HashiCorp Vault](https://www.vaultproject.io/) or
  [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) for production.

---

By following these steps and best practices, you can seamlessly integrate Panopto’s OAuth2
authentication flow into your backend (e.g., OnTrack or Doubtfire-API), ensuring a smooth and secure
process for uploading videos to a user’s Panopto instance.

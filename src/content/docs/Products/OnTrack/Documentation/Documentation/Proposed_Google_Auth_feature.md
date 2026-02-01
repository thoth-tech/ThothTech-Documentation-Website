---
title: Google Authentication Implementation in Ruby on Rails Introduction
---

This report details the attempted implementation of Google authentication using the
google-api-client gem, challenges encountered, and a proposal for a new approach using the
google-authenticator library available here the goal is to establish a secure, robust, and efficient
authentication system within a Ruby on Rails application.

<!-- TODO: Fix Alt Text below and missing image -->

<!-- ![](Aspose.Words.c43d72fd-87a7-4c94-8fb6-36b8e9a45b16.001.png) -->

## What Was Tried and Why It Didn't Work

### Previous Implementation Steps

1. **Setup Using google-api-client:**
   - Integrated the gem to handle Google OAuth 2.0.
   - Created an endpoint in authentication_api.rb for Google authentication (/auth/google).
   - Configured token verification using Google::Apis::Oauth2V2::Oauth2Service.
   - Generated temporary tokens for authenticated users.

2. **Challenges Identified:**
   - **Token Validation Failures:** Issues with API key configuration and scope validation caused
     intermittent failures.
   - **Complexity in Library Usage:** The google-api-client gem required extensive configuration and
     debugging for basic functionality.
   - **Session Management:** Temporary tokens generated lacked proper integration with the
     application's session flow.

     <!-- TODO: Fix Alt Text below and missing image -->

     <!-- ![](Aspose.Words.c43d72fd-87a7-4c94-8fb6-36b8e9a45b16.002.png) -->

## Proposed Approach: Using google-authenticator

The [Google-authenticator](https://github.com/jaredonline/google-authenticator) library offers a
simplified and efficient way to implement Google OAuth 2.0. It abstracts much of the complexity of
token validation and user data retrieval.

### Key Benefits

- Simplified integration of Google authentication.
- Minimal configuration with a focus on token validation and secure user onboarding.
- Lightweight and developer-friendly, reducing overhead.

<!-- TODO: Fix Alt Text below and missing image -->

<!-- ![](Aspose.Words.c43d72fd-87a7-4c94-8fb6-36b8e9a45b16.003.png) -->

### Implementation Plan Using google-authenticator

1. **Gem Installation**

   Add the google-authenticator gem to the Gemfile:

   ```plaintext
   gem 'google-authenticator'
   ```

   Run bundle install to install the gem.

2. **Environment Setup**
   <!-- TODO: Fix strange formatting to use proper snippet format (as above) -->

   Set up environment variables for secure management of credentials: **export
   GOOGLE_CLIENT_ID="your-client-id"**

   **export GOOGLE_CLIENT_SECRET="your-client -secret"**

3. **Refactor authentication_api.rb**
   <!-- TODO: Fix strange formatting to use proper snippet format (as above) -->

   Update the authentication_api.rb file to use the new library:

   **desc 'Google authentication'**

   **params do**

   ``**requires :id_token, type: String, desc: 'Google ID token' end**

   **post '/auth/google' do**

   **# Initialize the GoogleAuthenticator**

   ``**authenticator = GoogleAuthenticator.new(**

   ``**client_id: ENV['GOOGLE\_CLIENT\_ID'],**

   ``**client_secret: ENV['GOOGLE\_CLIENT\_SECRET']**

   ``**)**

   ``**idinfo = authenticator.verify(params[:id\_token])**

   ``**error!({ error: 'Invalid Google ID token.' }, 401) unless idinfo**

   ``**email = idinfo['email']**

   ``**logger.info "Authenticate #{email} from #{request.ip}"**

   ``**user = User.find_or_create_by(email: email) do |new_user| new_user.first_name =
   idinfo['given\_name'] || 'First'**

   ``**new_user.last_name = idinfo['family\_name'] || 'Last'**

   ``**new_user.username = email.split('@').first**

   ``**new_user.role_id = Role.student.id**

   ``**end**

   ``**onetime_token = user.generate_temporary_authentication_token!**

   ``**present :user, user, with: Entities::UserEntity**

   ``**present :auth_token, onetime_token.authentication_token**

   **end**

4. **Testing**

   Conduct functional and security testing for the updated implementation:
   - Validate token-based authentication using Google accounts.
   - Test various scenarios such as invalid tokens and token expiration.
   - Simulate edge cases like incorrect client credentials.

5. **Deployment and Documentation**
   - Deploy the changes to a staging environment for compatibility testing.
   - Update API documentation to reflect the new authentication endpoint.

## Next Steps and Recommendations

### Short-Term Actions

- Finalize the integration with google-authenticator.
- Conduct comprehensive testing, focusing on security and performance.
- Roll out the updated authentication mechanism during non-peak hours.

### Long-Term Improvements

- Implement refresh token functionality for long-lived sessions.
- Expand support for additional authentication providers, ensuring scalability.

## Conclusion

The switch to the google-authenticator library addresses the shortcomings of the previous approach
while simplifying the integration process. This plan provides a clear path toward a reliable and
secure Google authentication mechanism in the application. By leveraging this lightweight library,
we can reduce complexity and improve user experience.

# Panopto OAuth2 Integration Guide
## OAuth2 Panopto API Client Setup
To upload videos to a user's personal Panopto instance, we need to authenticate using OAuth2. Below is a step-by-step guide on how to set up the OAuth2 client and retrieve the access token required for API calls.

# Step 1: Create an API Client on Panopto
1. Navigate to the Panopto website:
[Panopto Login](https://deakin.au.panopto.com/Panopto/Pages/Home.aspx)

2. Go to User Settings:
   Click on the User Settings icon (usually in the top-right corner).
3. Create a New API Client:
     Under the API Client section, click Create New Client.
4. Configure the API Client:
    Set a name for the client (e.g., Doubtfire API Client).
    Choose Server-side Application as the client type since we’re integrating this into the backend of doubtfire-api.
5. Save Your Credentials:
    Make sure to note down your Client ID and Client Secret. These will be used to authenticate requests.

<img width="400" alt="Screenshot 2024-12-05 at 5 58 26 pm" src="https://github.com/user-attachments/assets/26e91cd0-c986-4c32-88e4-c111283f4650">

# Step 2: Configure Allowed URLs and Redirect URI
1. Set CORS (Cross-Origin Resource Sharing):
    In the Allowed URL section, set CORS to https://localhost.
2. Set Redirect URI:
    Set the Redirect URI to http://localhost:9127/redirect.
    The port number 9127 is arbitrary and is used for local development.

# Step 3: Exchange the Code for an Access Token

## Retrieval of access_token

## Automating access_token refresh and 

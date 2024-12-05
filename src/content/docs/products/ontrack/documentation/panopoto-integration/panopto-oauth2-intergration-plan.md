# Panopto OAuth2 Integration Guide
## OAuth2 Panopto API Client Setup
To upload videos to a user's personal Panopto instance, we need to authenticate using OAuth2. Below is a step-by-step guide on how to set up the OAuth2 client and retrieve the access token required for API calls.

# Step 1: Create an API Client on Panopto
Navigate to the Panopto website:
Panopto Login

Go to User Settings:

Click on the User Settings icon (usually in the top-right corner).
Create a New API Client:

Under the API Client section, click Create New Client.
Configure the API Client:

Set a name for the client (e.g., Doubtfire API Client).
Choose Server-side Application as the client type since we’re integrating this into the backend of doubtfire-api.
Save Your Credentials:

Make sure to note down your Client ID and Client Secret. These will be used to authenticate requests.

<img width="400" alt="Screenshot 2024-12-05 at 5 58 26 pm" src="https://github.com/user-attachments/assets/26e91cd0-c986-4c32-88e4-c111283f4650">

# Step 2: Configure Allowed URLs and Redirect URI
Set CORS (Cross-Origin Resource Sharing):

In the Allowed URL section, set CORS to https://localhost.
Set Redirect URI:

Set the Redirect URI to http://localhost:9127/redirect.
The port number 9127 is arbitrary and is used for local development.
# Step 3: Exchange the Code for an Access Token
Once the API client is set up, the next step involves exchanging the authorisation code for an access token, which will be used for uploading videos. The OAuth2 authentication flow involves the following:

Visit the Authorisation URL:

This will initiate the OAuth2 authorisation process, where you will log in and grant access.
Exchange Authorisation Code for Access Token:

After successful authentication, you will receive an authorisation code. This code can be exchanged for an access token, which will allow uploading videos to the user's Panopto instance.
## Retrieval of access_token

## Automating access_token refresh and 

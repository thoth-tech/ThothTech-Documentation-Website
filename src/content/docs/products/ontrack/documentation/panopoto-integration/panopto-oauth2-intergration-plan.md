# Panopto OAuth2 Integration Guide
## OAuth2 Panopto API Client Setup
To upload videos to a user's personal Panopto instance, we need to authenticate using OAuth2. Below is a step-by-step guide on how to set up the OAuth2 client and retrieve the access token required for API calls.

## Step 1: Create an API Client on Panopto
1. Navigate to the Panopto website:
- [Panopto Login](https://deakin.au.panopto.com/Panopto/Pages/Home.aspx)

2. Go to User Settings:
   - Click on the User Settings icon (usually in the top-right corner).
3. Create a New API Client:
     - Under the API Client section, click Create New Client.
4. Configure the API Client:
    - Set a name for the client (e.g., Doubtfire API Client).
    - Choose Server-side Application as the client type since we’re integrating this into the backend of doubtfire-api.
5. Save Your Credentials:
    - Make sure to note down your Client ID and Client Secret. These will be used to authenticate requests.

<img width="400" alt="Screenshot 2024-12-05 at 5 58 26 pm" src="https://github.com/user-attachments/assets/26e91cd0-c986-4c32-88e4-c111283f4650">

## Step 2: Configure Allowed URLs and Redirect URI
1. Set CORS (Cross-Origin Resource Sharing):
    - In the Allowed URL section, set CORS to https://localhost.
2. Set Redirect URI:
    - Set the Redirect URI to http://localhost:9127/redirect.
    - The port number 9127 is arbitrary and is used for local development.

## Step 3: Exchange the Code for an Access Token
Once the API client is set up, the next step involves exchanging the authorisation code for an access token, which will be used for uploading videos. The OAuth2 authentication flow involves the following:

1. Visit the Authorisation URL:

   - This will initiate the OAuth2 authorisation process, where you will log in and grant access.
     
   ### How to manually recieve code

   - Replace `insert_client_id` with your client id and `port` with the port used in the api client setup
   - https://deakin.au.panopto.com/Panopto/oauth2/connect/authorize?client_id=insert_client_id&response_type=code&redirect_uri=http://localhost:port&scope=openid%20api&nonce=12345
  

3. Exchange Authorisation Code for Access Token:

   - After successful authentication, you will receive an authorisation code. This code can be exchanged for an access token, which will allow uploading videos to the user's Panopto instance.
  
   ### How to manually recieve access token

   - Using the curl request below replacing `YOUR_CLIENT_ID`, `YOUR_CLIENT_SECRET` and `YOUR_AUTHORISATION_CODE`

``` Typescript
   curl -X POST "https://deakin.au.panopto.com/Panopto/oauth2/connect/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorisation_code" \
     -d "code=YOUR_AUTHORISATION_CODE" \
     -d "redirect_uri=http://localhost:8000" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET"
```

## Step 4: Integrating with ontrack
1. The next steps of the task is to automate the entire process so that you supply an `env` file with `client_id` and `client_secret`.
2. It provides you with a link to click on, which give the program the authorisation code.
3. With this it retrieves the access token for your panopto instance and allowing a video upload to occur using the api

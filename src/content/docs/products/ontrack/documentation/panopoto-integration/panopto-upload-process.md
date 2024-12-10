# Panopto Video Upload Process Guide

## Overview
This document provides a step-by-step guide on how to upload videos to Panopto using the Panopto REST API. The process includes creating a session, uploading the video file using multipart upload, creating a manifest, and finalising the upload.

---

## Step 1: Create a Session for Video Upload

Before uploading a video, a session must be created. The session provides the necessary details for the upload process, including the upload target and session ID.

###  Call the Session Creation API
The session creation process is triggered by sending a POST request to the `sessionUpload` endpoint.

- **API Endpoint:**
  ```ruby
  POST https://{server}/Panopto/PublicAPI/REST/sessionUpload
  ```
- **Payload:**
  ```http
  {
    "FolderId": "{folder_id}"
  }

  ```
- **Example Session Creation:**
  ```ruby
  response = RestClient.post(
    "https://#{server}/Panopto/PublicAPI/REST/sessionUpload",
    { "FolderId" => folder_id }.to_json,
    { content_type: :json, accept: :json, authorization: "Bearer #{access_token}" }
  )
  ```

- **Example Response:**
  ```http
  {
    "ID": "session_id",
    "UploadTarget": "upload_target_url",
    "FolderId": "{folder_id}"
  }
  ```
## Step 2: Upload Video via Multipart Upload
Panopto supports multipart uploads for large video files. This step uploads the video in parts to the upload target specified in the session creation response.

### Initiate Multipart Upload:

- Use AWS SDK (boto3) to initiate a multipart upload.
- Upload URL: Extracted from the UploadTarget parameter in the session creation response.
### Upload Parts:

- Split the video file into parts ( 5MB at most per part) and upload each part sequentially.
- AWS SDK Multipart Upload Example:
```ruby

s3 = Aws::S3::Client.new(
  endpoint: upload_target,
  region: 'us-east-1',
  access_key_id: 'dummy',
  secret_access_key: 'dummy'
)
```
Complete Multipart Upload:

Once all parts are uploaded, call the complete_multipart_upload method to finalise the upload.

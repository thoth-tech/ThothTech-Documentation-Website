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

#### 1. Initiate Multipart Upload:
- Get the Upload URL: After creating a session, extract the UploadTarget URL from the session creation response. This URL specifies where the video should be uploaded.

- Set Up AWS SDK (boto3): Even though Panopto doesn’t require AWS credentials, we use AWS SDK to handle the multipart upload. Initialise the SDK with dummy credentials (to bypass authentication but still use the multipart upload logic).

Sample Code:

```ruby
# Extract the Upload Target URL from the session creation response
upload_target = "https://deakin.au.panopto.com/Panopto/Upload/..."

# Set up AWS SDK for multipart upload
s3 = Aws::S3::Client.new(
  endpoint: upload_target,
  region: 'us-east-1',
  access_key_id: 'dummy',
  secret_access_key: 'dummy'
)

# Initiate multipart upload
mpu = s3.create_multipart_upload(Bucket: 'upload-bucket', Key: 'video-file.mp4')
upload_id = mpu['UploadId']
```
### 2. Upload Parts:
Split the Video File: Split the video into parts, each no larger than 5MB. You can adjust the part size as needed.

Upload Each Part: Iterate over the parts and upload them using the AWS SDK. Track the ETag for each part.

Sample Code:

```ruby
# Read the video file in 5MB chunks and upload parts
File.open('video_path.mp4', 'rb') do |file|
  part_number = 1
  while (chunk = file.read(5 * 1024 * 1024))  # 5MB per part
    s3.upload_part(
      bucket: 'upload-bucket',
      key: 'test-video.mp4',
      part_number: part_number,
      upload_id: upload_id,
      body: chunk
    )
    part_number += 1
  end
end
```
### 3. Complete Multipart Upload:
- Finalise the Upload: Once all parts have been uploaded, call the complete_multipart_upload method to combine the parts into one video file in Panopto.
Sample Code:

```ruby
# After all parts have been uploaded, complete the upload
s3.complete_multipart_upload(
  bucket: 'upload-bucket',
  key: 'video-file.mp4',
  upload_id: upload_id,
  multipart_upload: { parts: parts_metadata }  # Metadata about each uploaded part
)
```


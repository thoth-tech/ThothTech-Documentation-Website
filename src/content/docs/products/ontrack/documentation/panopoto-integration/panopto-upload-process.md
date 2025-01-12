---
title: Panopto Video Upload Process
---

## Overview

This document outlines key information about the process of uploading videos to Panopto using the
Panopto REST API. While this isn't a comprehensive guide, it highlights the steps involved in
creating a session, performing a multipart upload of the video file, creating the manifest, and
finalising the upload. This serves as an informational resource for implementing the video upload
functionality in the future. Additional research and context will be needed to fully integrate these
steps.

---

## Step 1: Create a Session for Video Upload

Before uploading a video, a session must be created. The session provides the necessary details for
the upload process, including the upload target and session ID.

### Call the Session Creation API

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

Panopto supports multipart uploads for large video files. This step uploads the video in parts to
the `upload target` specified in the session creation response.

#### 1. Initiate Multipart Upload

- Get the Upload URL: After creating a session, extract the `UploadTarget` URL from the session
  creation response. This URL specifies where the video should be uploaded.

- Use `Net::HTTP` and `URI` for Multipart Upload: Use Ruby's standard libraries to handle the
  multipart upload. The following example demonstrates how to upload a file in parts using
  `Net::HTTP:`

```ruby

# Extract the Upload Target URL from the session creation response
upload_target = "https://deakin.au.panopto.com/Panopto/Upload/..."


# Define the chunk size for multipart upload (5MB per part)
chunk_size = 5 * 1024 * 1024

# Initialise  upload process
uri = URI(upload_target)
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'multipart/form-data'

# Read and upload the video file in chunks
while chunk = file.read(chunk_size)
  form_data = [['file', chunk]]
  request.set_form form_data, 'multipart/form-data'

  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(request)
  end

  # Check the response (e.g., for successful upload)
  puts response.body
end
```

### 2. Upload Parts

- Split the Video File: Split the video into parts, each no larger than 5MB. You can adjust the part
  size as needed.

- Upload Each Part: Iterate over the parts and upload them using `Net::HTTP:`

```ruby
# Read video file in 5MB chunks and upload each part
File.open('video_path.mp4', 'rb') do |file|
  part_number = 1
  while (chunk = file.read(5 * 1024 * 1024))  # 5MB per part
    form_data = [['file', chunk]]
    request.set_form form_data, 'multipart/form-data'

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    # Handle response
    puts "Part #{part_number} uploaded: #{response.body}"
    part_number += 1
  end
end
```

### 3. Complete Multipart Upload

- Finalise the Upload: Once all parts have been uploaded, call the `complete_multipart_upload`
  method to combine the parts into one video file in Panopto.

```ruby
# Finalise the upload once all parts are uploaded
complete_upload_uri = URI("#{upload_target}/complete")
complete_request = Net::HTTP::Post.new(complete_upload_uri)
complete_request['Content-Type'] = 'application/json'

# Send the finalisation request
response = Net::HTTP.start(complete_upload_uri.hostname, complete_upload_uri.port, use_ssl: true) do |http|
  http.request(complete_request)
end
```

## Step 3: Create and Upload the Manifest File

Once the video is uploaded, the next step is to create the manifest file. The manifest provides
metadata for the video, including its title, description, and the file name.

### 1. Create the Manifest File

- The manifest file is an XML file that contains the following key elements:

```xml
Copy code
<?xml version="1.0" encoding="utf-8"?>
<Session xmlns="http://tempuri.org/UniversalCaptureSpecification/v1">
  <Title>{Video_Title}</Title>
  <Description>{Video_Description}</Description>
  <Date>{Current_Date}</Date>
  <Videos>
    <Video>
      <Start>PT0S</Start>
      <File>{Video_File_Name}</File>
      <Type>Primary</Type>
    </Video>
  </Videos>
</Session>
```

### 2. Upload the Manifest File

- The manifest file is uploaded in the same way as the video parts, using `multipart upload`.

```ruby
manifest_file = 'upload_manifest_generated.xml'
file = File.open(manifest_file, 'rb')

# Prepare the POST request for multipart upload
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'multipart/form-data'

# Upload the manifest in chunks
while chunk = file.read(5 * 1024 * 1024)  # 5MB per part
  form_data = [['file', chunk]]
  request.set_form form_data, 'multipart/form-data'

  # Send the request to upload the part
  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(request)
  end
```

## Step 4: Finalise the Upload

After uploading the video and the manifest file, the final step is to finalise the session marking
it as complete.

### 1. Send the PUT Request to Finalise Session

API Endpoint:

```ruby
PUT https://{server}/Panopto/PublicAPI/REST/sessionUpload/{session_id}
```

Payload:

```ruby

{
  "State": 1,  # Mark as completed
  "FolderId": "{folder_id}"
}
```

Example Code:

```ruby
RestClient.put(
  "https://#{@server}/Panopto/PublicAPI/REST/sessionUpload/#{@session_id}",
  { "State" => 1, "FolderId" => @folder_id }.to_json,
  { content_type: :json, accept: :json, authorization: "Bearer #{@access_token}" }
)
```

## 2. Monitor the Upload Status

- Check for Processing: After finalising, periodically check the `session state` to ensure it is
  processed and completed.

Polling Example:

```ruby

while true
  sleep(5)  # Wait a few seconds before checking  status
  session = RestClient.get("https://#{@server}/Panopto/PublicAPI/REST/sessionUpload/#{@session_id}")
  if JSON.parse(session.body)["State"] == 4  # State 4 means processing complete
    break
  end
end
```

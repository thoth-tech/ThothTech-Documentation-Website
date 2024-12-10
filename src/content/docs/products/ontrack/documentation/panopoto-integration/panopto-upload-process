# Panopto Video Upload Process Guide

## Overview
This document provides a step-by-step guide on how to upload videos to Panopto using the Panopto REST API. The process includes creating a session, uploading the video file using multipart upload, creating a manifest, and finalizing the upload.

---

## Step 1: Create a Session for Video Upload

Before uploading a video, a session must be created. The session provides the necessary details for the upload process, including the upload target and session ID.

### 1.1 Call the Session Creation API
The session creation process is triggered by sending a POST request to the `sessionUpload` endpoint.

- **API Endpoint:**
  ```http
  POST https://{server}/Panopto/PublicAPI/REST/sessionUpload

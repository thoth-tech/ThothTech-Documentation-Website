---
title: "Spike Research: Integrating Panopto with OnTrack"
---

# Integrating Panopto with OnTrack

## Overview

This document explores the integration of Panopto video functionalities into the OnTrack platform.
Panopto offers comprehensive video management features that can enhance user engagement and
interaction within OnTrack, particularly in task submissions and comments.

## Panopto Features Overview

### Video Management

- **Upload and Manage Videos**: Users can upload videos directly from their devices or import them
  from other platforms.
- **Video Editing**: Basic editing tools such as trimming, and the ability to add captions and
  annotations.

### Video Sharing and Accessibility

- **Access Control**: Set permissions to determine who can view or edit video content.
- **Embedding Videos**: Easily embed videos into other platforms using generated embed codes.

### Integration APIs

- **RESTful API**: Panopto provides a RESTful API that facilitates various interactions from
  external applications.
  - **Documentation**:
    [Panopto API Documentation](https://demo.hosted.panopto.com/Panopto/api/docs/index.html)

## Potential Use Cases in OnTrack

- Embedding video content in task submissions to provide detailed instructions or demonstrations.
- Allowing comments to include video responses or feedback.

## Integration Approach

### Authentication

- Use OAuth2 for secure API access, ensuring that interactions between OnTrack and Panopto are
  authenticated.

### Embedding Videos

- Users can select videos from their Panopto library to embed within tasks and comments on OnTrack.
- API endpoints to retrieve embed codes and manage video settings.

## Security Considerations

- Ensure all video data is transmitted securely using HTTPS.
- Implement robust permission checks within OnTrack to align with video access permissions.

## Backlog Items for Spike Development

### Item 1: API Exploration and Authentication Setup

- Objective: Establish a secure connection between OnTrack and Panopto using the API.
- Acceptance Criteria: Successfully authenticate and retrieve data from Panopto via the API.

### Item 2: Prototype Video Embedding in Tasks

- Objective: Create a prototype that allows embedding Panopto videos in OnTrack tasks.
- Acceptance Criteria: A task entry in OnTrack displaying an embedded Panopto video.

### Item 3: User Interface Design for Video Management

- Objective: Design a user interface that allows users to upload, select, and manage videos within
  OnTrack.
- Acceptance Criteria: UI mockups reviewed and approved by the development team.

### Item 4: Security and Compliance Review

- Objective: Ensure the video integration adheres to privacy and security standards.
- Acceptance Criteria: Completion of a security audit and implementation of necessary adjustments.

## Conclusion

Integrating Panopto with OnTrack can significantly enhance the platform's capabilities, making it
more interactive and supportive of multimedia content. This spike serves as a foundational step
towards realizing full video integration.

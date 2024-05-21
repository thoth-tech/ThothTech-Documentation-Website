---
title: Feedback Form Implementation Documentation
description: Documentation of the feedback form setup for future maintenance and enhancement.
---

## Feedback Form Implementation Documentation

### Overview

This document outlines the implementation and setup of the feedback form used on the Thoth Tech
Documentation Website. It is intended to assist future students and developers in understanding the
current system and to facilitate further development and maintenance.

### Tools Used

- **HTML/CSS** for structuring and styling the form.
- **JavaScript** for front-end logic.
- **Web3Forms** for handling form submissions without server-side code.
- **Node.js** and **Express** for server-side logic in case of future custom backend integration.

### Form Setup and Design

The feedback form is designed to be simple yet functional, enabling users to quickly provide their
feedback on the Thoth Tech Documentation Website. It includes fields for user identification,
feedback content, and ratings:

- **Name**: Allows the user to enter their name.
- **Email**: Allows the user to enter their email for follow-ups.
- **Feedback Type**: Users can select whether they are submitting a general suggestion or specific
  improvement ideas.
- **Rating**: Users can rate their experience using star ratings.
- **Comments**: A textarea for additional comments.

### Integration with Web3Forms

Web3Forms is used to manage form submissions. This service was selected for its simplicity and the
ability to handle form submissions without the need for additional backend code, making it ideal for
projects with limited server-side interaction:

#### How to Configure Web3Forms

1. **API Key**: An API key is required from Web3Forms, which is included in the form's hidden input
   field to authenticate requests.
2. **Form Action**: The form's `action` attribute is set to the Web3Forms endpoint URL.
3. **Method**: POST method is used to send data to the Web3Forms service.

```html
<form action="https://api.web3forms.com/submit" method="post">
  <input type="hidden" name="access_key" value="your_access_key_here" />
  <!-- Additional form fields -->
</form>
```

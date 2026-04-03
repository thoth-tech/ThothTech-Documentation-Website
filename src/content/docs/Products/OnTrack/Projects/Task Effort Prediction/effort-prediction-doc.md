---
title: Design Document - AI-Based Effort Prediction Feature
---

## 1. Introduction
The AI‑based Effort Prediction feature is designed to support students and staff by estimating assignment workload and effort. This integrates machine learning regression models into OnTrack’s backend, enabling predictive insights that can be consumed by the frontend. The goal is to enhance student success by providing data‑driven guidance while ensuring scalability, reproducibility, and transparency.

---

## 2. Setup and Environment
- **Local Setup:** Project cloned and configured in Ruby on Rails backend.
- **Environment Issues Resolved:** Addressed Docker networking, dependency mismatches, and Rails to TorchServe connectivity.
- **Outcome:** Stable local environment established for model serving and backend integration.

---

## 3. Prototype and Service Agent Design
- **Prototype:** Prepared an early prototype of the service agent to test regression model predictions.
- **Integration:** Later integrated the prototype into the Rails backend, ensuring predictions could be requested via API.
- **Communication:** Progress updates shared with team members to keep development aligned and transparent.

---

## 4. Backend Implementation
- **Model Serving:**
  - Evaluated ML frameworks (Hugging Face, TensorFlow, PyTorch).
  - Selected TorchServe for scalability and production readiness.
- **Service Agent:**
  - Designed to handle regression model requests.
  - Provides prediction results in JSON format for frontend consumption.
- **Database Interaction:**
  - Logs prediction requests and outputs for reproducibility and auditing.

---

## 5. Testing Strategy
### Backend Tests
- Successful prediction request and response.
- Invalid input handling.
- Container connectivity validation (Rails to TorchServe).

### Model Training and Validation
- **Training:** Regression models will be trained on labelled effort data to capture workload patterns.  
- **Validation:** Accuracy of predictions will be validated against held‑out test data.  
- **Outcome:** Ensures the model generalises well to unseen inputs and provides reliable effort estimates.  

### Peer Review Testing
- Validate Dockerfile changes.

---

## 6. Error Handling & Validation
- **Input Validation:** Ensure prediction requests include valid parameters.
- **Exception Handling:** Backend logs errors and returns user‑friendly messages.
- **Reproducibility:** Planned documentation of integration steps and challenges to enable teammates to replicate and test the solution.

---

## 7. Deployment Plan
- **Pre‑Deployment:**
  - Test TorchServe integration locally.
  - Review code for reproducibility and maintainability.
- **Deployment Steps:**
  - Deploy Rails service agent with TorchServe container.
  - Expose API endpoint for frontend integration.
- **Post‑Deployment:**
  - Monitor prediction accuracy and performance.
  - Gather feedback from staff and students.
- **Rollback Plan:**
  - Revert to baseline backend without prediction agent if issues arise.

---

## 8. Outstanding Documentation (Planned)
- Step‑by‑step guide for setting up TorchServe with Rails.
- Challenges faced during environment setup and integration.
- Reproducible testing scripts for backend validation.
- Screenshots of prediction API requests and responses.

---

## 9. Conclusion
The AI‑based Effort Prediction feature enhances OnTrack by providing predictive insights into assignment workload. While the prototype and integration have been completed, further documentation of implementation steps and challenges is planned to ensure reproducibility, maintainability, and long‑term success.

---
title: Tutor Time Analytics & Session Tracking Handover
---
## 1. Overview

The Tutor Analytics dashboard visualizes marking session data to provide insights into workload and efficiency. This document outlines the architecture implemented in the 10.0.x release and identifies data integrity observations, testing requirements, and the strategic direction for future development.

## 2. Architecture Status (Completed Work)

The following architecture has been implemented and verified in the 10.0.x branch:

* **Tracking Mode:** Automated / "Sticky Session" Logic.
* *Behavior:* Sessions are automatically created and extended to group user activity into continuous blocks.
* *Threshold:* A 15-minute inactivity window determines when a session closes.

* **Manual Timer:** Deprecated and removed from the UI to reduce tutor cognitive load.
* **Data Source:** The `duration_minutes` field is persisted on the `MarkingSession` model in the backend (`doubtfire-api`).
* The frontend (`doubtfire-web`) dashboard consumes this pre-calculated value, removing the need for client-side date-diff logic.

* **Visual Components:**
* **Summary Cards:** Real-time metrics for Total Time, Tasks Assessed, and Efficiency (Mins/Task).
* **Activity Chart:** Grouped bar chart (ngx-charts) comparing "Hours Worked" and "Tasks Assessed" per day.

## 3. Known Data Integrity Observations
The following behaviors were identified during the testing phase. Any changes to this logic should be confirmed with the Product Owner.

### A. Zero-Minute Sessions (Backend)
* **Observation:** Valid sessions appear with `0 minutes` duration.
* **Root Cause:** If a tutor performs a single action (e.g., grading one student) and then stops, the `start_time` and `end_time` are identical. Integer math (`0/60`) results in `0`.
* **Suggested Improvement:** Implement a minimum duration floor (heuristic) in `SessionTracker`. For example, on session creation, set `end_time` to `now + 5.minutes` to account for the reading/cognitive time preceding the click.

### B. Assessment Count Inflation (Backend)
* **Observation:** The "Tasks Assessed" count may be higher than unique student counts.
* **Root Cause:** The `SessionTracker` records an activity every time the `assessing` action is triggered, even if the task status remains the same.
* **Suggested Improvement:** Implement "Dirty Checking" in the Rails service to only increment the count if `task.saved_change_to_status?` is true.

## 4. Roadmap & Future Work

### 4.1 Frontend Enhancements
* **Convenor Staff Filtering:** The API already supports filtering by `user_id`. The UI needs a "Staff Selection" dropdown for Unit Chairs to view individual tutor data or an "All Staff" aggregate.
* **Tutorial Exclusion Toggle:** Add a UI toggle to exclude sessions where `during_tutorial` is true, allowing tutors to separate marking time from classroom time.
* **Task-Level Insights:** Update the dashboard to visualize time spent per Task Definition (e.g., a pie chart showing which tasks take the longest to mark).

### 4.2 Backend & API Updates
* **Entity Exposure:** Update `MarkingSessionEntity` to expose the `session_activities` association. This is required for the "Task-Level Insights" mentioned above.
* **Heartbeat API:** Explore a lightweight "heartbeat" endpoint that the frontend can ping while a tutor is typing a long comment, preventing the 15-minute sticky session from timing out.

## 5. Testing Requirements (Dev Guide)
To maintain the integrity of the tracking logic, future developers must follow these rules:

* **Database Sync:** When asserting on session duration, you **must** call `.reload` on the model object (e.g., `last_session.reload`) to synchronize the database update with the stale Ruby object in memory.
* **Split Logic:** To test session splitting, use `travel 16.minutes` to ensure you are outside the 15-minute sticky threshold.
* **Timezone Consistency:** Always use `.in_time_zone` instead of `.to_time` in tests to prevent sub-second drift or local machine offsets from breaking the 15-minute threshold check.

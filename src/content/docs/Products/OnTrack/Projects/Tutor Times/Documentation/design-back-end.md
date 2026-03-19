---
title: Backend Design Document for "Tutor Times" Feature in OnTrack
---

## 1. Introduction

### 1.1 Purpose

This document outlines the architectural design of the backend session tracking for the "Tutor
Times" feature in OnTrack (formerly known as Doubtfire). The purpose is to establish the
architectural and functional aspects of the backend necessary to support efficient time tracking and
management for tutors.

### 1.2 Scope

The scope of this design document covers the following aspects of the backend development for the
"Tutor Times" feature:

- Automated Session Tracking (`SessionTracker`)
- Data Models and Schema
- API Endpoints
- Authentication and Authorisation
- Background Jobs/Triggers (Assessment/Comment hooks)
- Data Integrity Constraints
- Performance Optimization
- Security Measures
- Compatibility with Frontend and Other Modules

### 1.3 Intended Audience

This document is intended for backend developers, database administrators, and stakeholders involved
in the implementation of the "Tutor Times" feature.

## 2. Architecture and Data Models

[UML Diagram - Tutor Time](https://lucid.app/lucidchart/3f089d75-d16d-4930-8b12-f0a4890e3f74/edit?invitationId=inv_e9f40e2f-ff8e-4011-9957-ecef3cd44ef0)

### 2.1 Data Storage

- Creates the database table named `marking_sessions` or modify the existing one to store marking
  time data for tutors and students.<br><br>
- Defined fields: <br> t.bigint `user_id`, null: false<br> t.bigint `unit_id`, null: false<br>
  t.string `ip_address`<br> t.datetime `start_time`<br> t.datetime `end_time`<br> t.integer
  `duration_minutes`, default: 0<br> t.boolean `during_tutorial`<br> t.datetime `created_at`, null:
  false<br> t.datetime `updated_at`, null: false<br> t.index ["unit_id"], name:
  `index_marking_sessions_on_unit_id`<br> t.index ["user_id", "unit_id", "ip_address",
  "updated_at"], name: `index_marking_sessions_on_user_unit_ip_and_time`<br> t.index ["user_id"],
  name: `index_marking_sessions_on_user_id`<br><br>
- **session_activities**: Logs individual actions (`action`, `project_id`, `task_id`) linked to a
  session.

### 2.2 Data Schema

The backend implements a **15-minute inactivity threshold**.

- **New Session:** Created if no active session exists within the threshold.
- **Extended Session:** If an activity occurs within 15 minutes of the last one, the `end_time` is
  pushed forward.

### 2.3 Database Relationships

- Establish relationships between tables to associate marking time data with tutors, students, and
  tasks.
- Define foreign keys and indices to optimize query performance.

## 3. API Design

### 3.1 API Endpoints

- Developed API endpoints
  - `GET /api/units/:unit_id/marking_sessions`: Retrieves sessions. Supports `start_date`,
    `end_date`, and `timezone` params.
  - `PUT /api/projects/:id/task_def_id/:id`: Implicitly triggers the `SessionTracker` when an
    assessment is saved.
- Implement the following endpoints:
  - `GET /api/tutor-times/tutor/:tutor_id`: Retrieve all marking session records for a specific
    tutor.
  - `GET /api/tutor-times/student/:student_id`: Retrieve all marking session records for a specific
    student.
  - `DELETE /api/tutor-times/:id`: Delete a marking session record.

### 3.2 Authentication and Authorisation

#### Implemented user authentication and authorisation to secure access to marking time data.

- Tutors: Authorized to view only their own marking_sessions within a specific unit.

#### Implement the following user authentication and authorisation to secure access to marking time data.

- Role-Based Access Control (RBAC): Leverages existing OnTrack roles.
  - Convenors (Unit Chairs): Authorized to view all marking_sessions associated with their unit.
- Session Tracking Authorization: Only users with Role.admin, Role.convenor, or Role.tutor trigger
  the SessionTracker upon activity.

## 4. Background Jobs/Triggers

### 4.1 Automated Session Updates (Passive Triggers)

- **Activity Hooks:** The system does not use a standalone timer. Instead, it hooks into existing
  API write actions.

- **Duration Persistence:** To optimize frontend performance, duration_minutes is calculated and
  persisted in the database at the moment a session is updated, rather than being calculated
  on-the-fly during GET requests.

## 5. Data Integrity and Validation

### 5.1 Technical Logic Constraints

- **Session Duration Calculation:** Duration is calculated using integer truncation: ((end_time -
  start_time) / 60).to_i.
- **Sticky Threshold:** Validated via end_time > 15.minutes.ago.
- **Validation Rules:** end_time must always be greater than or equal to start_time.

## 6. Non-Functional Requirements

### 6.1 Performance Optimization

- Database indexes are implemented on `unit_id` and a composite index on
  `[user_id, unit_id, ip_address, updated_at]` to ensure rapid session lookups during high-frequency
  marking.

### 6.2 Security

- User IP addresses are logged to identify potential session sharing or unauthorized access.

## 7. Testing Strategy

### 7.1 Unit Testing (`Minitest`)

- **Memory Synchronization:** Tests must use `.reload` on model objects after API calls to
  synchronize stale Ruby variables with updated database records.
- **Time Travel:** Tests utilize `ActiveSupport::Testing::TimeHelpers` (`travel_to`) to simulate
  session gaps and threshold timeouts.
- **Consistency:** All tests must use `.in_time_zone` to avoid 1-second drifts common with
  `.to_time`.

## 8. Roadmap & Open Issues

### 8.1 Suggested Improvements

- **Minimum Duration Floor:** Implement a 5-minute floor for single-action sessions to prevent `0`
  minute durations caused by integer truncation.
- **Dirty Checking:** Update `SessionTracker` to only increment assessment counts if
  `task.saved_change_to_status?` is true.
- **Heartbeat Signal:** (Frontend/API) Add a heartbeat to track reading and typing time before a
  "Save" is clicked.

## 9. Conclusion

The backend for "Tutor Times" provides a robust, passive tracking mechanism. By leveraging existing
assessment hooks, it captures workload data without manual tutor intervention, while the
`SessionActivity` schema provides a foundation for granular task-level analytics.

## 10. Appendices

- Include any additional information, diagrams, or references that support the design document.

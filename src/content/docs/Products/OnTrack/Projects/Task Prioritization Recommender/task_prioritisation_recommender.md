---
title: Task Prioritization Recommender Feature
---

## 1. Introduction

The Task Prioritization feature is designed to help students identify which tasks to focus on next
within OnTrack. The system evaluates multiple factors to generate a priority score for each task,
enabling students to manage their workload more effectively and reduce the risk of missed deadlines.

---

## 2. Purpose

The purpose of this feature is to:

- Recommend tasks based on urgency and workload
- Support better time management
- Integrate with AI-based effort prediction for smarter prioritisation

---

## 3. Approach

Tasks are ranked using a **weighted priority scoring system** based on:

- Deadline urgency
- Estimated effort required
- Current student workload

---

## 4. Prioritization Logic

### 4.1 Deadline Urgency

Tasks with closer due dates receive higher priority. The system calculates urgency based on the
number of days remaining until the task due date.

#### Deadline Calculation Logic

1. Retrieve the task due date from the task definition
2. Calculate the number of days remaining:

   **days_left = due_date − current_date**
   - The current date is obtained using `Time.zone.today` to ensure timezone consistency
   - If no due date is available, the score defaults to **0**

---

#### Deadline Scoring

- ≤ 1 day → Score 100
- ≤ 3 days → Score 80
- ≤ 7 days → Score 60
- ≤ 14 days → Score 40
- > 14 days → Score 20

---

#### Behaviour

- Tasks due very soon receive the highest priority
- Tasks with longer deadlines receive lower scores
- Ensures students focus on urgent tasks first

---

### 4.2 Estimated Effort

Tasks requiring more effort are prioritised earlier to allow sufficient time for completion.

Currently, effort is approximated using **task weighting** as a temporary measure.  
This will be replaced by the AI-based effort prediction feature in future.

#### Effort Scoring (Current Implementation)

- Weighting ≤ 10 → Score 30
- Weighting ≤ 20 → Score 50
- Weighting ≤ 40 → Score 70
- Weighting > 40 → Score 90

---

### 4.3 Workload

Tasks are prioritised higher when a student has multiple competing tasks across their enrolled
units.

Workload is determined by a combination of:

- **Number of incomplete tasks** across all active units (task pressure)
- **Student target grade** (academic ambition)

---

#### Target Grade Values

Each project (unit) has a target grade represented numerically:

- 0 → Pass
- 1 → Credit
- 2 → Distinction
- 3 → High Distinction

The workload calculation uses the **average target grade** across all enrolled units to reflect the
student’s overall academic goal.

---

#### Workload Calculation Logic

**1. Task Pressure Score (0–100)**  
Based on the number of incomplete tasks:

- 0–4 tasks → Score 30 (Low)
- 5–9 tasks → Score 60 (Medium)
- 10+ tasks → Score 90 (High)

---

**2. Target Grade Score (0–100)**  
Based on the student’s average target grade:

- High Distinction (3) → Score 90
- Distinction (2) → Score 75
- Credit (1) → Score 60
- Pass (0) → Score 40

---

**3. Final Workload Score**

**Workload Score = (0.6 × Task Pressure Score) + (0.4 × Target Grade Score)**

---

#### Behaviour

- Students with more incomplete tasks receive higher workload scores
- Students aiming for higher grades receive higher prioritisation sensitivity
- Ensures personalised recommendations based on both workload and ambition

---

## 5. Scoring Model

### 5.1 Priority Score Formula

**Priority Score = (0.5 × Deadline Score) + (0.3 × Effort Score) + (0.2 × Workload Score)**

Each factor is converted into a score between **0–100**.

---

### 5.2 Deadline Score

| Time Remaining | Score |
| -------------- | ----- |
| ≤ 1 day        | 100   |
| ≤ 3 days       | 80    |
| ≤ 7 days       | 60    |
| ≤ 14 days      | 40    |
| > 14 days      | 20    |

---

### 5.3 Effort Score (Will be replaced with AI Effort Prediction)

| Task Weighting | Score |
| -------------- | ----- |
| ≤ 10           | 30    |
| ≤ 20           | 50    |
| ≤ 40           | 70    |
| > 40           | 90    |

---

### 5.4 Workload Score

| Workload Level | Score |
| -------------- | ----- |
| Low            | 30    |
| Medium         | 60    |
| High           | 90    |

---

## 6. Example Calculation

### Task A

- Due in 2 days → Deadline Score = 80
- Effort = 8 hours → Effort Score = 70
- Workload = Medium → Workload Score = 60  
  Priority Score = (0.5 × 80) + (0.3 × 70) + (0.2 × 60) = 40 + 21 + 12 = 73

---

### Task B

- Due in 10 days → Deadline Score = 40
- Effort = 2 hours → Effort Score = 30
- Workload = Low → Workload Score = 30

Priority Score = (0.5 × 40) + (0.3 × 30) + (0.2 × 30) = 20 + 9 + 6 = 35

---

### Result

Task A is prioritised higher than Task B due to a higher overall score.

---

## 7. System Flow

1. Retrieve all tasks for the student
2. Calculate:
   - Deadline score
   - Effort score (from AI prediction)
   - Workload score
3. Compute total priority score
4. Rank tasks in descending order
5. Recommend highest priority tasks to the user

---

## 8. Integration

- Effort scores will be derived from the **AI-Based Effort Prediction feature**
- The system will consume predicted effort (in hours) and map it to scoring ranges
- Designed to integrate seamlessly with backend APIs

---

## 9. Design Rationale

- **Deadline urgency (50%)**  
  Highest weight to reduce missed submissions

- **Effort (30%)**  
  Encourages early start on complex tasks

- **Workload (20%)**  
  Balances tasks across multiple units using task pressure and academic ambition

---

## 10. Outcome

Tasks with higher priority scores will be recommended first, helping students:

- Stay on track
- Reduce stress
- Improve task planning

---

## 11. Dependencies

- AI-based effort prediction feature (external team)
- Task metadata (deadlines, units, etc.)
- Backend API integration

---

## 12. Conclusion

The Task Prioritization feature enhances OnTrack by providing a structured and intelligent way to
manage student tasks. By combining urgency, effort, and workload, the system delivers meaningful
recommendations that improve productivity and academic outcomes.

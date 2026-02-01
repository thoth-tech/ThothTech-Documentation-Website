---
title: Task-Dashboard Migration Investigation
description:
  Investigation report for completing the task-dashboard migration from AngularJS to Angular
---

# Task-Dashboard Migration Investigation

**Date:** January 19, 2026  
**Investigator:** Husainuddin Mohammed, 223380186  
**Branch:** `investigate/task-dashboard-migration`

---

## What I Found

The task-dashboard migration is about 80% done. The Angular components exist and work (I can see
them running in `inbox.component.html`), but the main dashboard view still loads the old AngularJS
directives. We have two parallel systems running.

---

## The Actual Components

I went through the code and found these 7 card components that got migrated:

1. TaskDescriptionCardComponent
2. TaskDueDateCardComponent
3. TaskResourcesCardComponent
4. TaskSubmissionCardComponent
5. TaskCommentsCardComponent
6. TaskStatusCardComponent
7. TaskAssessmentCardComponent

All work fine - just need to finish switching the main dashboard over to use them.

---

## What Needs to Change

**Template update:**

- `dashboard.tpl.html` still uses `<task-dashboard>`
- Needs to change to `<f-task-dashboard>`

**State registration:**

- Old AngularJS state in `doubtfire.states.ts` needs updating
- Should register Angular component route instead

**Module cleanup:**

- `doubtfire-angularjs.module.ts` still imports 9 old .coffee files
- Can remove these imports and delete the files

**Files to delete (9 total):**

- task-dashboard: `.coffee`, `.tpl.html`, `.scss`
- student-task-list: `.coffee`, `.tpl.html`, `.scss`
- dashboard: `.coffee`, `.tpl.html`
- `directives.coffee`

---

## Why It's Tricky

These changes need to happen together. If I update the template but not the state registration,
routing breaks. If I delete files before updating the template, the dashboard stops loading. Can't
split this into many small PRs - it's one atomic change.

---

## Current vs Target State

**Right now:**

```
dashboard.tpl.html  →  <task-dashboard>  →  AngularJS system (old)
inbox.component.html  →  <f-task-dashboard>  →  Angular system (new)
                           ↓
                Both render same 7 cards
```

**After migration:**

```
dashboard.tpl.html  →  <f-task-dashboard>  ↘
                                            Angular system (unified)
inbox.component.html  →  <f-task-dashboard>  ↗
                           ↓
                      7 card components

Old AngularJS files deleted ✓
```

---

## Migration Steps

```
Step 1: Update template tags
   ↓
Step 2: Update state registration     } These 3 steps
   ↓                                  } must happen
Step 3: Remove old file imports      } together
   ↓
Step 4: Delete old files
```

**Can't do Step 4 before Steps 1-3** → Dashboard won't load  
**Can't do Step 2 before Step 1** → Router looks for wrong component

---

## Risk Level: Low

The Angular components already work. This is just switching which template system renders them. If
something breaks, we can revert quickly since the old files are still in git history.

Main risk: making sure no other files reference `<task-dashboard>` besides the main dashboard
template.

---

## Testing Needed

- Direct URL navigation to dashboard
- Click navigation from project list
- Task selection and switching
- Browser refresh while on dashboard
- Back/forward buttons
- Check all 7 cards render
- Console should be clean

---

## What Could Go Wrong

**Scenario 1:** Another file uses old tags we missed

- Fix: Search codebase for `<task-dashboard>` before starting

**Scenario 2:** Delete files before updating imports

- Fix: Remove imports first, then delete files

**Scenario 3:** Update state before template

- Fix: Always update template first

---

## Time Estimate

4-6 hours for someone who knows the codebase.  
8-12 hours if you're new to it.

Most of the time will be testing different navigation paths.

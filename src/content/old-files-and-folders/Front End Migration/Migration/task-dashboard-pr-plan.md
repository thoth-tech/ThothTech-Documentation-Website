---
title: Task-Dashboard Migration PR Plan
description: Plan for completing the task-dashboard migration
---

# Task-Dashboard Migration - PR Plan

**Created:** January 19, 2026  
**Created by:** Husainuddin Mohammed, 223380186

---

## Approach: 2 PRs

After analyzing the code dependencies, I'm proposing 2 PRs instead of splitting this into many small
ones.

---

## PR 1: Investigation & Documentation

**Branch:** `investigate/task-dashboard-migration` (CURRENT)  
**Status:** Complete

Documents the current state and migration plan for next cohort.

**Files:**

- `task-dashboard-investigation.md`
- `task-dashboard-pr-plan.md`

---

## PR 2: Complete Migration

**Branch:** `migrate/complete-task-dashboard`  
**Status:** Not Started

**Changes needed:**

1. **Update template** (`dashboard.tpl.html`):

   ```diff
   - <task-dashboard task="taskData.selectedTask"></task-dashboard>
   + <f-task-dashboard [task]="taskData.selectedTask"></f-task-dashboard>
   ```

2. **Update state** (`doubtfire.states.ts`):
   - Register Angular component route
   - Remove old AngularJS state

3. **Clean up module** (`doubtfire-angularjs.module.ts`):
   - Remove imports for 9 old files

4. **Delete old files** (9 total):
   - task-dashboard: `.coffee`, `.tpl.html`, `.scss`
   - student-task-list: `.coffee`, `.tpl.html`, `.scss`
   - dashboard: `.coffee`, `.tpl.html`
   - `directives.coffee`

5. **Update docs** (`README.md`):
   - Mark completed: dashboard.coffee, directives.coffee, task-dashboard.coffee

---

## Why These Changes Must Be Together

```
Change 1: Update template to <f-task-dashboard>
    ↓
    └─→ If we stop here, state registration still points to old directive
        Result: Routing fails ✗

Change 2: Update state registration
    ↓
    └─→ If we stop here, module still imports old files
        Result: Build warnings ✗

Change 3: Remove old imports
    ↓
    └─→ If we stop here, old files still exist but aren't used
        Result: Confusing codebase ✗

Change 4: Delete old files
    ✓ Complete migration
```

**These are interdependent, not independent tasks.** Splitting them creates broken intermediate
states that don't work or make sense.

---

## Dependency Flow

```
Current State:
  dashboard.tpl.html → <task-dashboard> → AngularJS directive
                                              ↓
                                         Old .coffee files
                                              ↓
                                         Works but outdated

Target State:
  dashboard.tpl.html → <f-task-dashboard> → Angular component
                                                ↓
                                           7 card components
                                                ↓
                                           Old files deleted ✓
```

**Risk if split:** Each intermediate step leaves the codebase in a half-migrated state.

---

## Testing Plan

**Navigation testing:**

- Direct URL: `/projects/123/dashboard`
- From project list → dashboard
- Dashboard → select task → back to dashboard
- Browser refresh while on dashboard
- Back/forward buttons

**Functionality testing:**

- All 7 card components render
- Task switching works
- Data loads correctly
- Console has no errors

**Build testing:**

- Build succeeds
- No import errors
- No missing file errors

---

## Rollback Strategy

If issues arise, revert the single PR. Old files remain in git history and can be restored quickly.

**Why atomic changes matter:** One revert fixes everything vs. figuring out which of 5 PRs to
revert.

---

## Key Insight for Next Cohort

Search the codebase for `<task-dashboard>` before starting - make sure dashboard.tpl.html is the
only place using the old tag. Update module imports before deleting files to avoid build failures.

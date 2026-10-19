---
title: Full Angular Migration Plan - Inbox Component
description: Complete migration plan for inbox component including parent dependency chain
---

# Full Angular Migration Plan: Inbox Component

**Date:** January 14, 2026  
**By:** Husainuddin Mohammed, 223380186  
**Task:** Complete full Angular migration for units/tasks/inbox

---

## Component Dependency Chain

```
units/index.coffee (Parent 1)
    ↓
    Provides: unit, unitRole
    ↓
units/tasks/tasks.coffee (Parent 2)
    ↓
    Provides: taskData object
    ↓
units/tasks/inbox/inbox.coffee (Child)
    ↓
    Uses: unit, unitRole, taskData
```

**The problem:** Inbox component needs data from two AngularJS parent states. Can't fully migrate
inbox until parents are migrated.

---

## What Each Parent Provides

**Parent 1 (units/index.coffee):**

- Loads unit object from API
- Resolves user's role for this unit
- Handles permissions and redirects

**Parent 2 (units/tasks/tasks.coffee):**

- Creates taskData object structure
- Manages task selection logic
- Syncs URL with selected task

**Child (inbox.coffee):**

- Sets task source function
- Renders Angular InboxComponent
- Already migrated to Angular - just needs parent cleanup

---

## Migration Order: 3 PRs

### PR 1: Migrate units/index (START HERE)

**Status:** Already started - https://github.com/thoth-tech/doubtfire-web/pull/435

Migrate the root parent first. Replace AngularJS state with Angular resolvers that provide unit and
unitRole data.

**Files to change:**

- Create Angular state in `doubtfire.states.ts`
- Add resolvers for unit and unitRole
- Delete `units/states/index/index.coffee`

**Why first:** Foundation for everything below it

---

### PR 2: Migrate units/tasks

Replace AngularJS state with Angular equivalent that manages taskData object.

**Files to change:**

- Create state or service for taskData management
- Update `doubtfire.states.ts`
- Delete `units/states/tasks/tasks.coffee`

**Why second:** Depends on PR 1 providing unit/unitRole

---

### PR 3: Complete inbox migration

Remove remaining AngularJS files now that parents provide data through Angular.

**Files to delete:**

- `units/states/tasks/inbox/inbox.coffee`
- `units/states/tasks/inbox/inbox.tpl.html`

**Why last:** Depends on both parent PRs

---

## Visual Flow

```
Current State:
    AngularJS State → AngularJS State → AngularJS wrapper → Angular Component
    (units/index)     (units/tasks)      (inbox.coffee)      (InboxComponent)

After PR 1:
    Angular State → AngularJS State → AngularJS wrapper → Angular Component
    ✓

After PR 2:
    Angular State → Angular State → AngularJS wrapper → Angular Component
    ✓              ✓

After PR 3:
    Angular State → Angular State → Angular Component
    ✓              ✓               ✓ (fully migrated)
```

---

## Testing Strategy

Each PR needs to verify:

- Unit loads correctly with proper permissions
- Task selection and navigation works
- URL syncing functions properly
- Inbox displays tasks and allows interaction
- No console errors

---

## Key Principle

**Bottom-up migration:** Start at the root (units/index), work down to the child (inbox). Each PR is
independently testable and valuable even if later ones are delayed.

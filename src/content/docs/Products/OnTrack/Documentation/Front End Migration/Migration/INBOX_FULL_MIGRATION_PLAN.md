---
title: Full Angular Migration Plan - Inbox Component
description: Complete migration plan for inbox component including parent dependency chain
---

# Full Angular Migration Plan: Inbox Component

**Date:** January 14, 2026  
**By:** Husainuddin Mohammed, 223380186  
**Task:** Complete full Angular migration for units/tasks/inbox  
**Approach:** Bottom-up migration (parents first, then child)  
**Task Location:** Teams Thoth Tech group → OnTrack in main channels → OnTrack Planner Board (top) → Filter by 'Frontend - Angular/Tailwind/Typescript' tag → Task: T3 2025: Investigate partial migration - tasks\inbox\inbox.coffee

---

## Parent Dependency Chain
```
units/index (Parent 1 - AngularJS)
  └─> units/tasks (Parent 2 - AngularJS)
      └─> units/tasks/inbox (Child - needs migration)
```

The inbox component currently receives data through AngularJS scope inheritance from both parents. To migrate fully to Angular, we need to migrate the entire chain.

---

## What Each Component Provides

### Parent 1: units/index (index.coffee)

**File:** `src/app/units/states/index/index.coffee`

**What it does:**
- Loads the Unit object using `newUnitService.get(unitId)`
- Finds the user's role for this unit from `globalStateService.loadedUnitRoles`
- Handles admin/auditor special role logic
- Sets global view state via `globalStateService.setView("UNIT", unitRole)`
- Manages error handling and redirects to home if unit not found or no access
- Loads students for the unit via `newProjectService.loadStudents(unit)`

**Provides to child states:**
- `$scope.unit` - the Unit object
- `$scope.unitRole` - the user's UnitRole for this unit

---

### Parent 2: units/tasks (tasks.coffee)

**File:** `src/app/units/states/tasks/tasks.coffee`

**What it does:**
- Creates and manages the `taskData` object structure
- Parses `taskKey` from URL parameters
- Synchronizes URL when selected task changes
- Prevents unnecessary state reloads when navigating between same states
- Manages task selection callbacks

**Provides to child states:**
- `$scope.taskData` object containing:
  - `taskKey` - parsed task identifier from URL
  - `source` - function to fetch tasks (set by child states)
  - `selectedTask` - currently selected Task object
  - `onSelectedTaskChange` - callback function when task changes

---

### Child: units/tasks/inbox (inbox.coffee)

**File:** `src/app/units/states/tasks/inbox/inbox.coffee`

**What it does:**
- Sets `taskData.source = newTaskService.queryTasksForTaskInbox.bind(newTaskService)`
- Sets `taskData.taskDefMode = false`
- Renders the Angular InboxComponent with inherited scope data

**Current status:**
- Angular component exists and works
- Still uses AngularJS routing and scope inheritance
- Template (`inbox.tpl.html`) is just a wrapper: `<f-inbox [unit]="unit" [task-data]="taskData" ...>`

---

## Migration Strategy: 3 Separate PRs

### PR 1: Migrate units/index Parent ⭐ START HERE
**Edit on 24th Jan 2026:**
- PR 1 has been started already and PR was raised. However, not merged yet. 
- Link: https://github.com/thoth-tech/doubtfire-web/pull/435


**Goal:** Replace AngularJS units/index state with Angular equivalent

**What to do:**
1. Create Angular state that resolves `unit` and `unitRole` directly
2. Replace controller logic with state resolvers
3. Handle authentication and permissions in resolvers
4. Remove dependency on globalStateService scope inheritance (or adapt it)
5. Ensure child states can still access resolved data

**Files to create/modify:**
- Possibly create `units-index-state.component.ts` (or similar)
- Update `src/app/doubtfire.states.ts` with new state definition
- Add resolvers for `unit` and `unitRole`

**Files to remove (after testing):**
- `src/app/units/states/index/index.coffee`
- `src/app/units/states/index/index.tpl.html` (if exists)

**Testing:**
- Verify unit loads correctly
- Verify role permissions work
- Verify child states (tasks, inbox) still receive data
- Test admin/auditor special cases
- Test error handling (invalid unit, no access)

**Estimated effort:** Medium (foundation for everything else)

**Dependencies:** None (can start immediately)

---

### PR 2: Migrate units/tasks Parent

**Goal:** Replace AngularJS units/tasks state with Angular equivalent

**What to do:**
1. Create Angular state that manages `taskData` object
2. Replace scope-based callbacks with Angular services or observables
3. Handle URL parameter synchronization properly
4. Implement task selection logic without scope inheritance
5. Manage taskKey parsing and updates

**Files to create/modify:**
- Create `tasks-state.component.ts` or a dedicated service
- Update `src/app/doubtfire.states.ts` with new state
- Possibly create a `TaskDataService` to replace scope-based taskData

**Files to remove (after testing):**
- `src/app/units/states/tasks/tasks.coffee`

**Testing:**
- Verify taskData object is created correctly
- Verify task selection updates URL
- Verify URL params update taskKey
- Verify child states can access taskData
- Test navigation between same states doesn't reload unnecessarily

**Estimated effort:** Medium-High (taskData callbacks are complex)

**Dependencies:** ⚠️ Requires PR 1 merged first

---

### PR 3: Migrate units/tasks/inbox Child

**Goal:** Complete inbox migration by removing remaining AngularJS files

**What to do:**
1. Update InboxComponent to work with Angular parent states
2. Set `taskData.source` in state configuration or resolver
3. Remove old AngularJS state registration
4. Test thoroughly with real data

**Files to modify:**
- `src/app/doubtfire.states.ts` - update or verify inbox state
- Possibly `inbox.component.ts` if adjustments needed

**Files to remove:**
- `src/app/units/states/tasks/inbox/inbox.coffee`
- `src/app/units/states/tasks/inbox/inbox.tpl.html`
- `src/app/units/states/tasks/inbox/inbox.scss` (keep `inbox.component.scss`)

**Testing:**
- Full end-to-end test of inbox functionality
- Verify task list loads
- Verify task selection works
- Verify PDF viewing works
- Verify all filters and search work
- Test keyboard shortcuts

**Estimated effort:** Low (most complexity handled by parents)

**Dependencies:** ⚠️ Requires PR 1 AND PR 2 merged first

---

## Summary

**Total PRs needed:** 3

**Total parents to migrate:** 2
1. units/index
2. units/tasks

**Recommended order:**
1. PR 1: units/index (foundation)
2. PR 2: units/tasks (data management)
3. PR 3: inbox (final cleanup)

**Key principle:** Bottom-up migration
- Start with the root parent
- Work down to child states
- Each PR is independently testable
- Each PR adds value even if later ones are delayed

---

## Questions to Clarify

1. Should each PR be submitted for review independently, or wait until all 3 are ready?
2. Are there any existing patterns for migrating abstract parent states we should follow?
3. Timeline expectations for completing all 3 PRs?

Following questions were recommended by AI to ask:
4. Should we create new component files for the parent states, or just routing configs?
- What it means:

Parent states like units/index don't have visible UI, they just provide data
Do we create a component file like units-index-state.component.ts?
OR: Just add routing config in doubtfire.states.ts without a component?

- Why it matters:

Creating components = more files, but follows Angular patterns
Just routing = simpler, but might not fit the framework

- We need guidance: Look at how UnitRootState was done (it has a component)

5. How should we handle the `globalStateService` dependency - migrate it too, or adapt?
- What it means:

units/index uses globalStateService (an AngularJS service)
Do we also migrate globalStateService to Angular?
OR: Keep using it as-is and just call it differently?

- Why it matters:

Migrating it = more work, but cleaner
Keeping it = faster, but still has AngularJS dependency

- We should check: Is globalStateService still AngularJS or already migrated?
---

## Next Steps

**Before starting PR 1:**
1. Review how `UnitRootState` is already implemented (it might replace units/index)
2. Check for similar abstract parent state migrations in recent PRs
3. Clarify questions above with project leads

**Once ready to start:**
- Begin with PR 1: units/index migration
- Create a new branch: `migrate/units-index-state`
- Follow test-driven approach (ensure nothing breaks)
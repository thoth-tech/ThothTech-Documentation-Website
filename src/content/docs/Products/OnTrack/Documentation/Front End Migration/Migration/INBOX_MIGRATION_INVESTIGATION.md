# Inbox Migration Investigation Report

**Date:** January 08, 2026  
**By:** Husainuddin Mohammed, 223380186
**Task:** Complete full Angular migration for units/tasks/inbox  
**Approach:** Bottom-up migration (parents first, then child)
**Task Location:** Teams Thoth Tech group → OnTrack in main channels → OnTrack Planner Board (top) → Filter by 'Frontend - Angular/Tailwind/Typescript' tag → Task: T3 2025: Investigate partial migration - tasks\inbox\inbox.coffee

## Current Status (as of Jan 8, 2026)

### What Exists:
- ✅ New Angular component files (`inbox.component.ts`, `.html`, `.scss`, `.spec.ts`)
- ✅ Old AngularJS files (`inbox.coffee`, `inbox.tpl.html`, `inbox.scss`)
- ⚠️ **Both routing systems are present and conflicting**

### Issue Identified:
The Angular component (`InboxComponent`) was created but **depends on data from AngularJS parent scopes**:
- Expects `@Input() unit: Unit`
- Expects `@Input() unitRole: UnitRole`  
- Expects `@Input() taskData: { source, selectedTask, taskKey, onSelectedTaskChange, taskDefMode }`

These are currently provided by:
- Parent state `units/index` (provides `unit`, `unitRole`)
- Parent state `units/tasks` (provides `taskData` object with callbacks)

### The Problem:
Creating a standalone Angular route requires either:
1. **Option A:** Keep AngularJS parent states and make inbox a hybrid child
2. **Option B:** Refactor component to fetch its own data (like Portfolios/Rollover do)

### Current App Behavior:
- The AngularJS route is still active (registered in `inbox.coffee`)
- The app loads `inbox.tpl.html` which renders `<f-inbox>` component
- The component receives data from AngularJS parent scope

### What Was Done Today (08/01/2026):
- Added `InboxState` to `doubtfire.states.ts` (creates routing conflict)
- This new state doesn't provide required inputs → component won't work

## My Recommendations:

### Option 1: Complete Hybrid Migration (Simpler)
1. Keep Angular state as child of AngularJS `units/tasks` parent
2. Remove only: `inbox.coffee` registration
3. Keep: AngularJS parent states intact
4. Test thoroughly

### Option 2: Full Angular Migration (Proper, but more work)
1. Refactor `InboxComponent` to not require parent scope inputs
2. Add resolvers to fetch `unit`, `unitRole`, `taskData` in the state
3. Handle `taskData` callbacks differently (use services instead of scope)
4. Remove all AngularJS files

## Files to Eventually Remove:
- `src/app/units/states/tasks/inbox/inbox.coffee`
- `src/app/units/states/tasks/inbox/inbox.tpl.html`
- `src/app/units/states/tasks/inbox/inbox.scss` (old one, keep inbox.component.scss)
- Remove `'doubtfire.units.states.tasks.inbox'` from `tasks.coffee` module deps

## Questions for Project Lead:
1. Should we do hybrid migration (keep AngularJS parents) or full Angular?
2. Is refactoring the component in scope for this task?
3. How much time is allocated for this migration?

---

## Summary of Approaches

### Hybrid Approach
Keep the AngularJS parent states and only migrate the inbox child route. 
The component still gets data through scope inheritance. Less work but not a complete migration - we'd need to 
revisit this later when the parents are migrated.

### Full Angular Approach  
Completely remove AngularJS dependencies by refactoring the component to fetch its own data. 
This is the proper solution but requires migrating the parent states first (units/index and units/tasks), 
which haven't been migrated yet. More work and currently blocked by dependencies.

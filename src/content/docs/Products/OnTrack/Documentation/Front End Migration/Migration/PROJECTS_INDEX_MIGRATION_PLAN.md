---
title: Projects Index Migration Plan
description: Plan to finalise the projects/index parent state migration to Angular
---

# Projects Index Migration Plan

Date: January 27, 2026  
Author: Jeffy Sam  
Area: Projects module – index (parent) state

## Objective

Finalise the migration of the `projects/index` parent state by validating the
existing Angular implementation and safely removing legacy AngularJS files.
This plan applies only to the parent state. Child state migrations are out of
scope.

## Current Status

Completed work includes creation of the Angular component, Angular UI-Router
state definition, module configuration, migration of legacy controller logic,
and implementation of explicit lifecycle and subscription management.

Outstanding work includes formal verification, removal of legacy AngularJS
files, confirmation of child state stability, and documentation updates.

## Migration Steps

### Step 1: Verification

Validate the Angular parent state by confirming that project loading works for
valid and invalid IDs, unit and user role resolution behave correctly, the
global view context is set to `PROJECT`, navigation to all child states works,
deep linking and page refresh behave correctly, and no console or routing errors
occur.

### Step 2: Legacy Cleanup

After successful verification, remove the following legacy files:

- `src/app/projects/states/index/index.coffee`
- `src/app/projects/states/index/index.tpl.html`

Confirm that the application builds successfully, no missing references remain,
and no routing conflicts occur.

### Step 3: Final Validation

Re-test all child routes, confirm there are no duplicate route registrations,
verify that subscriptions are cleaned up correctly, and confirm that behaviour
matches the legacy implementation.

## Child State Verification Checklist

- [x] **dashboard** — Project: Yes, Unit: Yes, Role: Yes
- [x] **tutorials** — Project: Yes, Unit: Yes, Role: Yes
- [x] **portfolio** — Project: Yes, Unit: Yes, Role: Yes
- [x] **groups** — Project: Yes, Unit: Yes, Role: Yes
- [x] **outcomes** — Project: Yes, Unit: Yes, Role: Yes

## Testing Checklist

### Routing

- Valid project loads
- Invalid project redirects safely
- Deep linking works
- Page refresh works

### Context

- `project` available to child states
- `unit` available to child states
- `unitRole` available to child states
- Global view context set correctly

### Stability

- No console errors
- No routing conflicts
- No memory leaks
- Cached behaviour preserved

## Success Criteria

The migration is complete when the Angular parent state is the only active
implementation, legacy AngularJS files are removed, all child states load
correctly, and no routing or console errors are present.

## Outcome

Completing this plan finalises the `projects/index` migration and provides a
stable foundation for future project child state migrations.

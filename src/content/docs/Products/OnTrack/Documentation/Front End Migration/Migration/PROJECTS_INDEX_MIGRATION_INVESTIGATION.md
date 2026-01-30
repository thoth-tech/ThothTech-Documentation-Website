---
title: Projects Index Migration Investigation
description: Investigation of the projects/index parent state migration from AngularJS to Angular
---

# Projects Index Migration Investigation

Date: January 27, 2026  
Author: Jeffy Sam  
Area: Projects module – index (parent) state

## Purpose

This document investigates the current state of the `projects/index` parent state
migration from AngularJS to Angular. The goal is to confirm what has already been
migrated, identify what remains incomplete, and assess whether the state is safe
to finalise without breaking dependent child states.

## Current State of the Migration

The Angular implementation of the `projects/index` parent state already exists
and is functionally complete. The following Angular files are present and active:

- `index.component.ts`
- `index.component.html`
- `index.component.scss`
- `index.state.ts`
- `index.module.ts`

The Angular parent state handles route parameter extraction, project loading,
unit resolution, user role resolution, global view state configuration, and
explicit lifecycle cleanup. No runtime or console errors are observed when the
Angular implementation is active.

The legacy AngularJS implementation still exists in the repository and includes
the following files:

- `index.coffee`
- `index.tpl.html` (if present)

As long as these legacy files remain, both AngularJS and Angular implementations
may coexist.

## Responsibilities of the Parent State

The `projects/index` parent state provides shared context for all project-related
child states. Its responsibilities include loading the project using the route
`projectId`, resolving the associated unit, resolving the current user’s role,
setting the global application view context to `PROJECT`, and exposing `project`,
`unit`, and `unitRole` to child states.

These responsibilities are fully implemented in the Angular version and mirror
the legacy behaviour.

## AngularJS vs Angular Behaviour

The Angular implementation preserves all functional behaviour while introducing
explicit lifecycle management, explicit subscription cleanup, strong typing via
TypeScript, observable-based route parameter handling, and reduced reliance on
implicit scope inheritance. No functional differences have been identified.

## Dependent Child States

The following child states depend on the `projects/index` parent state for shared
context:

- `projects/dashboard`
- `projects/tutorials`
- `projects/portfolio`
- `projects/groups`
- `projects/outcomes`

Any issues in the parent state will directly affect these routes.

## Verification Required Before Cleanup

Before legacy files can be safely removed, the following must be verified:

- Project loading works for valid and invalid project IDs
- Unit and user role resolve correctly
- Global view state is set to `PROJECT`
- Navigation to all child states works correctly
- Page refresh and deep linking behave correctly
- No routing or console errors occur
- No memory leaks from subscriptions

## Files in Scope

Angular files currently in use:

- `index.component.ts`
- `index.component.html`
- `index.component.scss`
- `index.state.ts`
- `index.module.ts`

Legacy files pending removal:

- `index.coffee`
- `index.tpl.html`

## Conclusion

The Angular implementation of the `projects/index` parent state is functionally
complete. The migration is currently pending verification and cleanup. Once
verified, the legacy AngularJS files can be removed and the parent state can be
considered fully migrated.

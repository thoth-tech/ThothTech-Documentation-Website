---
title: Units Module Angular Migration Plan
description: Structured migration plan for the Units module, covering parent, intermediate parent, and child state migration.
---

# Units Module Angular Migration Plan

**Date:** January 27, 2026  
**Author:** Jeffy Sam  
**Scope:** Units module (all states)  
**Strategy:** Parent-first migration

---

## Scope and Intent

This document defines the **full migration plan** for the Units module from AngularJS (CoffeeScript) to Angular (TypeScript).

It focuses on:
- Migration order
- Parent and intermediate state responsibilities
- Risk-aware sequencing
- Clear success criteria

This plan does **not** redesign UI or introduce new behaviour.  
The goal is parity with the existing implementation.

---

## Units Module Dependency Hierarchy

The Units module forms a **three-level routing hierarchy**:

units (module root)
└─ units/index (abstract parent)
├─ units/tasks (intermediate parent)
│ └─ inbox
├─ definition
├─ viewer
├─ admin
├─ groups
├─ students/list
├─ students/portfolios
├─ analytics
└─ rollover

Because child states inherit context from their parents, **migration must proceed top-down**.

---

## Units States Aggregator

**File:** `src/app/units/states/states.ts`

### Responsibilities
- Registers all Units sub-states
- Acts as the Angular replacement for the legacy CoffeeScript aggregator
- Controls module-level routing registration

### Status
✔ Implemented and functional  
✔ Acts as the stable entry point for the module

---

## Root Parent State — `units/index`

### Responsibilities
- Load the Unit entity
- Resolve the user’s role within the unit
- Enforce access control and redirects
- Provide unit-level context to all children

### Data Provided to Child States
- `unit`
- `unitRole`

### Migration Status
- Angular implementation exists
- Legacy AngularJS files must be removed only after final validation

### Validation Requirements
- Unit loads correctly by `unitId`
- Role resolution matches legacy behaviour
- Invalid access paths redirect correctly
- All child routes continue to load

---

## Intermediate Parent State — `units/tasks`

### Responsibilities
- Own shared task state (`taskData`)
- Synchronise task selection with URL query parameters
- Maintain task lifecycle across child routes
- Expose task context to inbox, definition, and viewer

### Migration Status
❌ Still implemented in AngularJS  
⚠ Identified as the **primary structural blocker** for task-related migrations

### Key Constraint
This state **cannot be skipped** or migrated piecemeal.  
It must be replaced before task children can be safely migrated.

---

## Task Child States

### Inbox
- Angular component exists
- Still routed via AngularJS
- Depends on `unit`, `unitRole`, and task context

### Definition
- Fully AngularJS
- No Angular equivalent yet
- Relies heavily on task mode and task data

### Viewer
- Fully AngularJS
- Highest complexity (PDF rendering, annotations, feedback)
- Should be migrated last among task states

---

## Non-Task Child States

The following states depend only on `unit` and `unitRole`:

- admin
- groups
- students/list
- students/portfolios
- analytics
- rollover

Each should be migrated **independently** after the root parent is stable.

---

## Migration Phases

### Phase 1 — Finalise Root Parent
- Complete validation of `units/index`
- Remove legacy AngularJS routing and templates
- Confirm all child states continue to resolve correctly

---

### Phase 2 — Replace Intermediate Parent
- Introduce an Angular-owned task context service
- Migrate `units/tasks` to Angular
- Replace `$scope.taskData`
- Preserve existing URL and navigation behaviour

---

### Phase 3 — Migrate Task Children
- Finalise inbox migration
- Create Angular equivalents for definition and viewer
- Remove all legacy task-related CoffeeScript files

---

### Phase 4 — Migrate Remaining Children
Migrate remaining child states individually once parent layers are stable:
- admin
- groups
- students
- portfolios
- analytics
- rollover

---

## Recommended Data Access Patterns

### Unit Context
Use a shared Angular service to expose:
- `unit`
- `unitRole`

This avoids deep input chains and supports multi-level routing.

### Task Context
Use a dedicated service responsible for:
- Task selection
- URL synchronisation
- Task source and mode management
- Shared state across task children

---

## Risk Assessment

### High Risk
- Migration of `units/tasks`
- Task viewer complexity
- Admin state with nested editors

### Medium Risk
- Routing stability during incremental migration
- Consistency of data access patterns

### Low Risk
- Inbox completion
- Groups, students, analytics, and rollover states

---

## Success Criteria

For each migrated state:
1. No AngularJS routing remains
2. Legacy CoffeeScript files are removed
3. Deep linking functions correctly
4. No runtime or console errors
5. Behaviour matches the legacy implementation

For the module overall:
- All Units states are Angular
- Shared task state is centrally managed
- Documentation reflects final architecture
- No AngularJS dependencies remain

---

## Status

**Plan complete and ready for execution.**

**Next step:**  
Finalise `units/index`, then proceed sequentially through the hierarchy.

**Last updated:** January 27, 2026

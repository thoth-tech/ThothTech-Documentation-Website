---
title: Units Module Migration Investigation
description: Investigation summary of the current migration state of the Units module from AngularJS (CoffeeScript) to Angular (TypeScript).
---

# Units Module Migration Investigation

**Date:** January 28, 2026  
**Author:** Jeffy Sam  
**Scope:** Units module foundations (state aggregation and parent states)

---

## Purpose

This document records the current state of the Units module migration from AngularJS to Angular.  
Its goal is to clearly identify what has already been migrated, what remains in AngularJS, and which areas act as blockers for downstream work.

This is an **investigation document**, not an implementation plan.

---

## High-Level Structure of the Units Module

The Units module follows a layered UI-Router hierarchy:

units (states aggregator)
└─ units/index (abstract parent)
├─ units/tasks (intermediate parent)
│ ├─ inbox
│ ├─ definition
│ └─ viewer
├─ admin (edit)
├─ groups
├─ students/*
├─ analytics
└─ rollover 


This hierarchy makes parent states critical dependencies for all child migrations.

---

## Current Migration Status

### ✅ What is already in Angular

#### 1) Units states aggregator
- `src/app/units/states/states.ts` exists and acts as the Units states aggregator.
- It imports Units sub-state modules and registers their UI-Router configuration.
- This replaces the legacy `states.coffee` file.

#### 2) `units/index` Angular implementation exists
Angular files exist for the abstract parent state:

- `index.component.ts`
- `index.component.html`
- `index.component.scss`
- `index.state.ts`
- `index.module.ts`

The work is currently tracked in **PR #435**.

⚠️ The legacy AngularJS files still exist and are active:
- `src/app/units/states/index/index.coffee`
- `src/app/units/states/index/index.tpl.html`

These must be removed once the Angular parent is finalised.

---

### ⚠️ What is still AngularJS (blocking work)

The following states remain implemented using AngularJS (CoffeeScript):

- `units/states/tasks/tasks.coffee` *(intermediate parent)*
- `units/states/tasks/inbox/inbox.coffee`
- `units/states/tasks/definition/definition.coffee`
- `units/states/tasks/viewer/viewer.coffee`
- `units/states/edit/edit.coffee`
- `units/states/groups/groups.coffee`
- `units/states/students-list/students-list.coffee`
- `units/states/portfolios/portfolios.coffee`
- `units/states/analytics/analytics.coffee`
- `units/states/rollover/rollover.coffee`

---

## Key Findings

### 1) `units/index` is close, but not final
Although an Angular implementation exists, the presence of legacy AngularJS files means both systems can still be active. Until the legacy files are removed, child migrations remain risky.

### 2) `units/tasks` is the primary blocker
`units/tasks` is an intermediate parent state that provides shared task context to multiple children.  
It cannot be skipped or treated as a leaf migration.

### 3) Scope inheritance is still relied upon
Child states expect data from parent states via AngularJS `$scope`, including:
- `unit`
- `unitRole`
- `taskData`

This dependency must be replaced before child migrations can be completed cleanly.

### 4) Placeholder Angular modules can be misleading
Several Angular `.module.ts` files exist but only provide scaffolding.  
They do **not** indicate that the corresponding state has been migrated.

---

## Parent Responsibilities (Current)

### `units/index`
Provides:
- `unit`
- `unitRole`
- global Units view context

### `units/tasks`
Provides:
- `taskData` (task selection and state)
- query-parameter synchronisation (`taskKey`)
- shared task lifecycle logic

---

## Files Identified for Removal (when ready)

### After `units/index` is finalised
- `src/app/units/states/index/index.coffee`
- `src/app/units/states/index/index.tpl.html`

### After `units/tasks` is migrated
- `src/app/units/states/tasks/tasks.coffee`

Additional child-level removals should occur only after their respective migrations are complete.

---

## Conclusion

The Units module migration is **partially complete** at the foundation level.  
Progress is currently gated by two parent states:

1. Finalising `units/index`
2. Migrating `units/tasks`

Once these are resolved, child migrations can proceed safely without AngularJS scope inheritance.

---

**Status:** Investigation complete  
**Next step:** Finalise parent states before addressing leaf states

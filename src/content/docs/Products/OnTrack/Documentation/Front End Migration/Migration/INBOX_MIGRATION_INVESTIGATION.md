---
title: Inbox Migration Investigation Report
description: Investigation report for the inbox component migration from AngularJS to Angular
---

# Inbox Migration Investigation Report

**Date:** January 08, 2026  
**By:** Husainuddin Mohammed, 223380186  
**Task:** Investigate inbox component migration from AngularJS to Angular

---

## What I Found

The inbox component has already been migrated to Angular (`InboxComponent`), but it can't work
standalone because it depends on data from two AngularJS parent states.

**Component dependency diagram:**

```
units/index (AngularJS parent)
    ↓ provides: unit, unitRole
units/tasks (AngularJS parent)
    ↓ provides: taskData
inbox (Angular component - already exists)
    ↓ needs all the above data
```

The Angular component exists, but the parents feeding it data are still AngularJS.

---

## Current State

**What works:**

- Angular InboxComponent exists (`.component.ts`, `.html`, `.scss`)
- Old AngularJS files still present (`.coffee`, `.tpl.html`)
- App loads via AngularJS route → renders Angular component with scope data

**What doesn't work:**

- Can't create standalone Angular route
- Component expects `@Input()` data that comes from AngularJS parent scopes
- Creating Angular state without parents causes component to break

---

## The Problem

InboxComponent requires these inputs:

- `unit: Unit` (from units/index parent)
- `unitRole: UnitRole` (from units/index parent)
- `taskData` object (from units/tasks parent)

Without the parent data, the component has nothing to display.

---

## Two Approaches

### Approach 1: Keep Parents (Partial Migration)

**What:** Keep AngularJS parents, only migrate inbox routing **Pros:** Quick, minimal changes
**Cons:** Still dependent on AngularJS, need to revisit later **Files to remove:** Just
`inbox.coffee` and `.tpl.html`

### Approach 2: Migrate Everything (Complete Migration)

**What:** Migrate both parent states first, then inbox **Pros:** Clean, fully Angular, no AngularJS
dependencies **Cons:** More work, needs parent migration first **Files to remove:** All inbox
AngularJS files after parents done

---

## Recommended Path

**Approach 2** is the right solution. Here's why:

Both parent states (`units/index` and `units/tasks`) need migration anyway. If we do partial
migration now, we'll have to come back and redo work later when parents are migrated.

**Migration order:**

1. Migrate units/index parent
2. Migrate units/tasks parent
3. Clean up inbox (just delete old files)

This is detailed in the full migration plan document.

---

## Current Files

**Angular (keep):**

- `inbox.component.ts`
- `inbox.component.html`
- `inbox.component.scss`
- `inbox.component.spec.ts`

**AngularJS (delete after parent migration):**

- `inbox.coffee`
- `inbox.tpl.html`
- `inbox.scss` (old version)

---

## Key Insight

The inbox isn't really blocked by its own complexity - it's blocked by parent dependencies. Once
parents are migrated to Angular, finishing inbox is just cleanup (delete old files).

The real work is in the parent migrations, which is covered in the full migration plan.

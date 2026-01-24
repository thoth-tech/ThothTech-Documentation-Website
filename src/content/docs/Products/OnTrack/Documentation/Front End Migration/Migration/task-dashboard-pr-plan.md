\# Task-Dashboard Migration - PR Plan



\*\*Created:\*\* January 19, 2026  
\*\*Created by:\*\* Husainuddin Mohammed, 223380186

\*\*Based on:\*\* Investigation findings
\*\*Location:\*\* Teams Thoth Tech group → OnTrack in main channels → OnTrack Planner Board (top) → Filter by 'Frontend - Angular/Tailwind/Typescript' tag → Task: 'T3 2025: Investigate partial migration - task-dashboard.coffee'



---



\## Overview



This plan breaks down the task-dashboard migration completion into 5 separate PRs. Each PR is small, testable, and can be reviewed independently.



---



\## PR 1: Investigation \& Documentation



\*\*Branch:\*\* `investigate/task-dashboard-migration` ✅ (CURRENT)  

\*\*Dependencies:\*\* None  

\*\*Status:\*\* Complete



\*\*What:\*\*

\- Document current state

\- Create investigation report

\- Create this PR plan



\*\*Files:\*\*

\- `task-dashboard-investigation.md`

\- `task-dashboard-pr-plan.md`



\*\*Changes:\*\* Documentation only, no code changes



---



\## PR 2: Update dashboard template to use Angular components



\*\*Branch:\*\* `migrate/dashboard-angular-components`  

\*\*Dependencies:\*\* None (can start after PR 1)  

\*\*Status:\*\* Not Started



\*\*What:\*\*

Update the AngularJS template to use new Angular component tags



\*\*Changes:\*\*

\- `dashboard.tpl.html`:

&nbsp; - Change `<task-dashboard>` to `<f-task-dashboard>`

&nbsp; - Change `<student-task-list>` to `<f-student-task-list>`  

&nbsp; - Change `<progress-dashboard>` to `<f-progress-dashboard>`



\*\*Testing:\*\*

\- Load dashboard and verify it works

\- Select different tasks

\- Check all cards display correctly



---



\## PR 3: Migrate dashboard state to Angular



\*\*Branch:\*\* `migrate/dashboard-state`  

\*\*Dependencies:\*\* ⚠️ Requires PR 2 merged  

\*\*Status:\*\* Not Started



\*\*What:\*\*

Fully migrate the dashboard state from AngularJS to Angular routing



\*\*Changes:\*\*

\- Update `doubtfire.states.ts` - register Angular dashboard route

\- Remove old AngularJS state registration

\- Verify `project-dashboard.component.ts` handles routing



\*\*Testing:\*\*

\- Navigate to dashboard from different routes

\- Direct URL navigation

\- Browser back/forward buttons

\- Page refresh while on dashboard



---



\## PR 4: Delete old AngularJS files



\*\*Branch:\*\* `cleanup/remove-old-dashboard-files`  

\*\*Dependencies:\*\* ⚠️ Requires PR 3 merged  

\*\*Status:\*\* Not Started



\*\*What:\*\*

Remove all old AngularJS files that are no longer needed



\*\*Files to delete:\*\*

\- `task-dashboard.coffee`

\- `task-dashboard.tpl.html`

\- `task-dashboard.scss`

\- `student-task-list.coffee`

\- `student-task-list.tpl.html`

\- `student-task-list.scss`

\- `dashboard.coffee`

\- `dashboard.tpl.html`

\- `directives.coffee`



\*\*Files to update:\*\*

\- `doubtfire-angularjs.module.ts` - remove imports of deleted files



\*\*Testing:\*\*

\- Full dashboard regression test

\- Check console for errors

\- Verify build succeeds



---



\## PR 5: Update README



\*\*Branch:\*\* `docs/update-migration-checklist`  

\*\*Dependencies:\*\* ⚠️ Requires PR 4 merged  

\*\*Status:\*\* Not Started



\*\*What:\*\*

Update README migration progress



\*\*Changes to README.md:\*\*

\- Change `- \[ ]` to `- \[x]` for:

&nbsp; - `dashboard.coffee`

&nbsp; - `directives.coffee`

&nbsp; - `task-dashboard.coffee`



---



\## Timeline

```

PR 1 (Docs) → Can merge immediately

&nbsp;   ↓

PR 2 (Template) → Can start after PR 1

&nbsp;   ↓

PR 3 (State) → Needs PR 2 merged first

&nbsp;   ↓

PR 4 (Cleanup) → Needs PR 3 merged first

&nbsp;   ↓

PR 5 (README) → Needs PR 4 merged first

```



---



\## Testing Checklist (for each PR)



\- \[ ] Dashboard loads without errors

\- \[ ] Can select tasks

\- \[ ] All cards display correctly

\- \[ ] Navigation works

\- \[ ] Browser console clean

\- \[ ] Build succeeds



---



\## Notes



\- Each PR is small and reversible

\- Low risk approach

\- Can stop at any point if issues arise

\- Most work already done by previous developer


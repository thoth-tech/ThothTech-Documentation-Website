\# Task-Dashboard Migration Investigation



\*\*Date:\*\* January 19, 2026  

\*\*Investigator:\*\* Husainuddin Mohammed, 223380186

\*\*Branch:\*\* investigate/task-dashboard-migration
\*\*Location:\*\* Teams Thoth Tech group → OnTrack in main channels → OnTrack Planner Board (top) → Filter by 'Frontend - Angular/Tailwind/Typescript' tag → Task: 'T3 2025: Investigate partial migration - task-dashboard.coffee'


---



\## Summary



The task-dashboard has already been migrated to Angular, but the old AngularJS files are still there and being used in some places. We need to finish the cleanup.



---



\## What's Done ✅



\- TaskDashboardComponent (Angular) - fully working

\- All 7 child card components migrated

\- Components registered in Angular module

\- Already being used successfully in `inbox.component.html`



---



\## What's Left ❌



\### Old files that need to be deleted:

\- `task-dashboard.coffee`

\- `task-dashboard.tpl.html`

\- `task-dashboard.scss`

\- `student-task-list.coffee`

\- `student-task-list.tpl.html`

\- `student-task-list.scss`

\- `dashboard.coffee`

\- `dashboard.tpl.html`

\- `directives.coffee`



\### Files that need updating:

\- `dashboard.tpl.html` - still uses `<task-dashboard>` instead of `<f-task-dashboard>`

\- `doubtfire-angularjs.module.ts` - still imports the old .coffee files

\- `README.md` - migration checklist needs updating



---



\## Current Usage



\*\*Old way (AngularJS):\*\*

```html

<task-dashboard task="taskData.selectedTask">

</task-dashboard>

```



\*\*New way (Angular - already working):\*\*

```html

<f-task-dashboard \[task]="taskData.selectedTask">

</f-task-dashboard>

```



---



\## Key Findings



1\. Migration is mostly done - just cleanup needed

2\. The Angular components work fine (proven in inbox)

3\. Main blocker: dashboard.tpl.html still uses old tags

4\. Low risk - just need to update template and delete old files



---



\## Next Steps



1\. Create a PR plan for how to complete this

2\. Update dashboard.tpl.html to use Angular components

3\. Migrate the dashboard state fully

4\. Delete old files

5\. Update README



---



\## Notes



\- All the hard work is already done

\- This is just finishing what someone started

\- Should be straightforward


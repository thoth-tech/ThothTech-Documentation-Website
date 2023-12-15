# Component Review - Component task-ilo-alignment-modal.coffee

## Student Name: Jayani Vithanage

## Student ID: 220194805


## Component Name

\*\*\*\*./src/app/tasks/task-ilo-alignmnet/modals/task-ilo-alignment-modal/task-ilo-alignment-modal.coffee

File Name: task-ilo-alignment-modal.coffee

## Component purpose

It is used to set a unit taks's alignment rating to a given learning outcome from admin or convenor account.

## Component outcomes/interactions

It sets a unit taks's aligment rating to a given learning outcome from admin or convenor account and apply justification as how it relates to that particular learning outcome.

![ilo-alignment-modal](public/ilo_allignment_modal_1.png)

![ilo-alignment-modal_rating](public/ilo_alignment_modal2.png)

It works through  popup window for Admin/ Convenor accounts, includes the adding rating and justification for given learning outcome of the task. The given ratig is displayed through a number (1-5). 

This modal has proper mechanism, but some of the changes can be proposed to enhance this.

So, in the proposed modal the user provides the following changes:

1.Progress bar should be alighned to center of the popup window
2.The assignment name and the learning outcome is displayed through bold letters, not in the colored boxes
3.The rational message should be displayed with proper alignment and font size.

New design sketch: Existing UI components are to be used for the input fields and button etc.
``
![new modal sketch](public/ilo_allignment_modal.png)

In these two proposed models, the user provides the following changes:

4.A progress bar with a color range can be used to replace current progress buttons.
5.A pie chart can be added to rate learning outcomes.

New design sketch: proposed different design, existing UI components are to be used for the input fields and button etc. 
![new modal sketch](public/ilo_allignment_modal_design2.png)
![new modal sketch](public/ilo_allignment_modal_design3.png)

**Component migration Check list** – What is needs to be checked for this component to work once
migrated?

[ ] Ability to collect details from the user

[ ] The rating values should be correctly passed and store (data validation)

[ ] high user friendliness

[ ] Check with the output data, the rating value should be displayed as a number - student task submission 
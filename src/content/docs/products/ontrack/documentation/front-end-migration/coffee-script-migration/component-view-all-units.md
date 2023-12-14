---
title: Component Review - Create Unit Modal
---

**Student Names:** 
- Brian Caldera (hacaldera@deakin.edu.au)
- Bruce Wang (s223140522@deakin.edu.au)

**Student IDs:** 
- Brian Caldera - 221033693
- Bruce Wang - 223140522

**Link to Trello card:** https://trello.com/c/EiLPAyRH

### Component Name

**Path:** src/app/units/states/all/directives/all-units-list

### Component Purpose

It is used to display all the units in the unit list view.

### Existing model

![figure_1](/vau-c-1.png)

![figure_1](/vau-c-2.png)

### Component outcomes/interactions

The component is being used to display all the units in the unit list view.

If user is not enrolled in any unit, a null state will be displayed.

The new migrated component expected to work the same way as the existing component.

### Component migration Check list

What is needs to be checked for this component to work once migrated?

- view null state when the user has no units

- view units/projects based on user role

- handles errors - when the server is down

### What we have done so far

#### Component v1

**f-all-units-list.component.html**

```html
<div class="container">
  <div class="large-notice-block" *ngIf="!dataLoaded">
    <i class="fa fa-pulse fa-2x fa-spinner"></i>
    <p>Loading unit details...</p>
  </div>
  <div *ngIf="dataLoaded">
    <div class="panel panel-primary">
      <div class="panel-heading clearfix">
        <div class="pull-left">
          <h4 class="panel-title">Units</h4>
          All units registered with {{ externalName.value }}
        </div>
        <form role="search" class="pull-right form-horizontal">
          <input
            id="searchbar"
            class="input-md form-control"
            placeholder="Search for units..."
            [(ngModel)]="search"
            autocomplete="off"
          />
        </form>
      </div>
      <div class="panel-body">
        <div class="callout callout-info" *ngIf="unitRoles.length === 0">
          No units have been registered with {{ externalName.value }} yet
        </div>
        <table *ngIf="unitRoles.length > 0" class="table table-hover table-pointer">
          <thead>
            <tr>
              <th (click)="sortOrder = 'unit.code'; reverse = !reverse">
                Unit Code
                <i
                  *ngIf="sortOrder === 'unit.code'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
              <th (click)="sortOrder = 'unit.name'; reverse = !reverse">
                Name
                <i
                  *ngIf="sortOrder === 'unit.name'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
              <th (click)="sortOrder = 'role'; reverse = !reverse">
                Unit Role
                <i
                  *ngIf="sortOrder === 'role'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
              <th (click)="sortOrder = 'teachingPeriod().name'; reverse = !reverse">
                Teaching Period
                <i
                  *ngIf="sortOrder === 'teachingPeriod().name'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
              <th (click)="sortOrder = 'unit.startDate'; reverse = !reverse">
                Start Date
                <i
                  *ngIf="sortOrder === 'unit.startDate'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
              <th (click)="sortOrder = 'unit.endDate'; reverse = !reverse">
                End Date
                <i
                  *ngIf="sortOrder === 'unit.endDate'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
              <th (click)="sortOrder = 'active'; reverse = !reverse">
                Active
                <i
                  *ngIf="sortOrder === 'active'"
                  class="fa fa-caret-{{ reverse ? 'down' : 'up' }}"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="
                let unitRole of unitRoles
                  | orderBy: sortOrder : reverse
                  | slice: (currentPage - 1) * pageSize : pageSize
              "
              [routerLink]="['/units/tasks/inbox', unitRole.unit.id]"
            >
              <td>
                <label class="label label-info">
                  {{ unitRole.unit.code }}
                </label>
              </td>
              <td>{{ unitRole.unit.name }}</td>
              <td>{{ unitRole.role || 'N/A' }}</td>
              <td *ngIf="unitRole.teachingPeriod">{{ unitRole.teachingPeriod.name }}</td>
              <td *ngIf="!unitRole.teachingPeriod">Custom</td>
              <td>{{ unitRole.unit.startDate | date: 'EEE d MMM' }}</td>
              <td>{{ unitRole.unit.endDate | date: 'EEE d MMM' }}</td>
              <td *ngIf="unitRole.unit.teachingPeriod">
                <i
                  *ngIf="unitRole.unit.teachingPeriod.active && unitRole.unit.active"
                  class="fa fa-check"
                ></i>
                <i
                  *ngIf="!unitRole.unit.teachingPeriod.active || !unitRole.unit.active"
                  class="fa fa-times"
                ></i>
              </td>
              <td *ngIf="!unitRole.teachingPeriod">
                <i *ngIf="unitRole.active" class="fa fa-check"></i>
                <i *ngIf="!unitRole.active" class="fa fa-times"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="panel-footer clearfix">
        <pagination
          *ngIf="unitRoles.length > pageSize"
          [totalItems]="unitRoles.length"
          [(ngModel)]="currentPage"
          [itemsPerPage]="pageSize"
          [maxSize]="maxSize"
          class="pagination-sm pull-left"
          [boundaryLinks]="true"
          [rotate]="false"
        ></pagination>
      </div>
    </div>
  </div>
</div>
```

**f-all-units-list.component.ts**

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, Inject, OnInit} from '@angular/core';

import {dateService} from 'src/app/ajs-upgraded-providers';
import {GlobalStateService} from 'src/app/projects/states/index/global-state.service';
import {UserService} from 'src/app/api/services/user.service';
import {UnitService} from 'src/app/api/services/unit.service';
import {ViewType} from 'src/app/projects/states/index/global-state.service';

@Component({
  selector: 'f-all-units-list',
  templateUrl: './f-all-units-list.component.html',
})
export class AllUnitsListComponent implements OnInit {
  externalName: any;
  sortOrder: string;
  reverse: boolean;
  currentPage: number;
  maxSize: number;
  pageSize: number;
  showSpinner: boolean;
  dataLoaded: boolean;
  unitRoles: any[];
  units: any[];
  currentUser: any;
  constants: any;
  notEnrolled: () => boolean;

  constructor(
    @Inject(dateService) private DateService: any,
    @Inject(GlobalStateService) private globalStateService: any,
    @Inject(UserService) private userService: any,
    @Inject(UnitService) private unitService: any,
  ) {
    this.sortOrder = 'start_date';
    this.reverse = true;
    this.currentPage = 1;
    this.maxSize = 5;
    this.pageSize = 15;
  }

  ngOnInit() {
    this.globalStateService.setView(ViewType.OTHER);
    this.externalName = this.constants.ExternalName;
    this.showSpinner = true;

    this.timeout(() => {
      this.showSpinner = true;
    }, 2000);

    this.globalStateService.onLoad().subscribe(() => {
      this.unitRoles = this.globalStateService.loadedUnitRoles.currentValues;
      this.showSpinner = false;
      this.dataLoaded = true;
      this.timeout.cancel();
    });

    if (this.userService.currentUser.role !== 'Student') {
      this.unitService.query().subscribe((units) => {
        this.units = units;
      });
    }

    this.currentUser = this.userService.currentUser;
  }

  typeAhead(roles: any[]) {
    const result = [];
    roles.forEach((role) => {
      result.push(role.unit.code);
      result.push(role.unit.name);
    });
    return Array.from(new Set(result));
  }

  unit(unitId: any) {
    return this.units.find((unit) => unit.id === unitId);
  }

  checkEnrolled() {
    if (!this.unitRoles) {
      return;
    }
    this.notEnrolled = () => {
      return this.unitRoles.length === 0 && this.userService.currentUser.role === 'Tutor';
    };
  }
}
```

#### Component v2

**f-all-units-list.component.html**

```html
<div class="table-padding">
    <div class="flex flex-row gap-8">
      <div class="flex-grow flex flex-col gap-8 gap-y-0">
        <div class="flex flex-row">
          <div>
            <h3>Units</h3>
            <p>Modify units registered with OnTrack</p>
          </div>
          <div class="flex-grow"></div>
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Search</mat-label>
              <input matInput (keyup)="applyFilter($event)" />
            </mat-form-field>
          </div>
        </div>
        <table
          class="flex-grow f-table selectable"
          mat-table
          [dataSource]="dataSource"
          matSort
          (matSortChange)="sortTableData($event)"
        >
          <!-- Unit Code Column -->
          <ng-container matColumnDef="unit_code" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Unit Code</th>
            <td mat-cell *matCellDef="let element" class="w-0 min-w-full">
              <f-chip class="shrink">{{ element.code }}</f-chip>
            </td>
          </ng-container>
  
          <!-- Name Column -->
          <ng-container matColumnDef="name" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
            <td mat-cell *matCellDef="let element">{{ element.name }}</td>
          </ng-container>
  
          <!-- Unit Role Column -->
          <ng-container matColumnDef="unit_role" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Unit Role</th>
            <td mat-cell *matCellDef="let element">{{ element.myRole }}</td>
          </ng-container>
  
          <!-- Teaching Period Column -->
          <ng-container matColumnDef="teaching_period" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Teaching Period</th>
            <td mat-cell *matCellDef="let element">
              @if (element.teachingPeriod) {
                {{ element.teachingPeriod.name }}
              } @else {
                Custom
              }
            </td>
          </ng-container>
  
          <!-- Start Date Column -->
          <ng-container matColumnDef="start_date" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Start Time</th>
            <td mat-cell *matCellDef="let element">{{ element.startDate | date: 'EEE d MMM y' }}</td>
          </ng-container>
  
          <!-- End Date Column -->
          <ng-container matColumnDef="end_date" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>End Time</th>
            <td mat-cell *matCellDef="let element">{{ element.endDate | date: 'EEE d MMM y' }}</td>
          </ng-container>
  
          <!-- Active Column -->
          <ng-container matColumnDef="active" sticky>
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Active</th>
            <td mat-cell *matCellDef="let element">
              <!-- If element.teachingPeriod exists -->
              @if (element.teachingPeriod) {
                @if (element.teachingPeriod.active && element.active) {
                  <i class="fa fa-check"></i>
                }
                @if (!element.teachingPeriod.active || !element.active) {
                  <i class="fa fa-times"></i>
                }
              } @else {
                @if (element.active) {
                  <i class="fa fa-check"></i>
                }
                @if (!element.active) {
                  <i class="fa fa-times"></i>
                }
              }
  
              <!-- If element.teachingPeriod does not exist -->
            </td>
          </ng-container>
  
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr
            mat-row
            *matRowDef="let row; columns: displayedColumns"
            uiSref="units/admin"
            [uiParams]="{unitId: row.id}"
          ></tr>
        </table>
      </div>
    </div>
  </div>
```

**f-all-units-list.component.ts**

```typescript
import {Component, AfterViewInit, ViewChild, OnDestroy} from '@angular/core';
import {Unit} from 'src/app/api/models/unit';
import {UnitRole} from 'src/app/api/models/unit-role';
import {UnitService} from 'src/app/api/services/unit.service';
import {UserService} from 'src/app/api/services/user.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'f-all-units-list',
  templateUrl: './f-all-units-list.component.html',
  styleUrls: ['./f-all-units-list.component.scss'],
})
export class FUnitsComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatTable, {static: false}) table: MatTable<Unit>;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'unit_code',
    'name',
    'unit_role',
    'teaching_period',
    'start_date',
    'end_date',
    'active',
  ];
  dataSource: MatTableDataSource<Unit>;
  clickedRows = new Set<Unit>();

  public allUnits: Unit[];
  unitRoles: UnitRole[];
  dataload: boolean;

  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private unitService: UnitService,
  ) {
    this.dataload = false;
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.unitService.cache.currentValuesClone());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter: string) => data.matches(filter);

    this.subscriptions.push(
      this.unitService.cache.values.subscribe((units) => {
        this.dataSource.data = units;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private sortCompare(aValue: number | string, bValue: number | string, isAsc: boolean) {
    return (aValue < bValue ? -1 : 1) * (isAsc ? 1 : -1);
  }

  // Sorting function to sort data when sort
  // event is triggered
  sortTableData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }
    this.dataSource.data = this.dataSource.data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'unit_code':
        case 'name':
        case 'unit_role':
        case 'teaching_period':
        case 'start_date':
        case 'end_date':
        case 'active':
          return this.sortCompare(a[sort.active], b[sort.active], isAsc);
        default:
          return 0;
      }
    });
  }
}
```
- At this point we are getting few error in the terminal and they should be easy to fix.
- And make sure to change **doubtfire-angular.module.ts** and **doubtfire-angularjs.module.ts** files to include the new component.
import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeRangeComponent),
  multi: true,
};

@Component({
  selector: 'app-date-time-range',
  providers: [
    SELECT_VALUE_ACCESSOR,
  ],
  templateUrl: './date-time-range.component.html',
  styleUrls: ['./date-time-range.component.css']
})
export class DateTimeRangeComponent implements OnInit, ControlValueAccessor {
  constructor() { }
  formGroup: FormGroup;
  dateTypeOptions = [
    {displayName: 'Fixed', value: 'fixed'},
    {displayName: 'Last 7 days', value: 'last7days'},
    {displayName: 'Last 14 days', value: 'last14days'},
    {displayName: 'Today', value: 'today'},
    {displayName: 'Yesterday', value: 'yesterday'},
    {displayName: 'This week to date (starts Sunday)', value: 'thisweek_todate_sunday'},
    {displayName: 'Last week (starts Monday)', value: 'lastweek_monday'},
    {displayName: 'This year to date', value: 'thisyear_todate'},
    {displayName: 'Last year', value: 'lastyear'},
    {displayName: 'Advanced', value: 'lastweek_monday'},
  ]
  modelOpen = false;

  private propagateChange = (_: any) => { };

  ngOnInit() {
    this.formGroup = new FormGroup({
      dateTimeType: new FormControl(''),
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.propagateChange(value);
  }

  toogleModel(event) {
    event.preventDefault();
    this.modelOpen = !this.modelOpen;
    console.log('go here')
  }
}

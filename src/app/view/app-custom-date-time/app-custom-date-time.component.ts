import {Component, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import * as moment from 'moment';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppCustomDateTimeComponent),
  multi: true,
};

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-app-custom-date-time',
  providers: [
    SELECT_VALUE_ACCESSOR,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  templateUrl: './app-custom-date-time.component.html',
  styleUrls: ['./app-custom-date-time.component.css']
})
export class AppCustomDateTimeComponent implements OnInit, ControlValueAccessor {
  dateOptions = [
    {id: 'yesterday', name: 'Yesterday'},
    {id: 'today', name: 'Today'},
    {id: 'endOfToday', name: 'End of Today'},
    {id: 'lastWeek', name: 'Last Week'},
    {id: 'thisWeek', name: 'This Week'},
    {id: 'lastMonth', name: 'Last Month'},
    {id: 'thisMonth', name: 'Yesterday'},
    {id: 'custom', name: 'Custom'}
  ];

  time = '';
  selectedOption = 'today';
  selectedDate: any;

  @ViewChild('dateInput') dateInput;

  private propagateChange = (_: any) => { };

  constructor() {
    this.selectedDate = moment();
  }

  ngOnInit() {
    this.propagateChange(this.selectedDate);
  }

  registerOnChange( fn: any ): void {
    this.propagateChange = fn;
  }

  registerOnTouched( fn: any ): void {
    // this.onTouched = fn;
  }

  writeValue( value: any ): void {
    this.selectedDate = moment(value);
  }

  onChange(value) {
    // this.dateInput.value = value;
    if (moment(value, 'MM/DD/YYYY HH:mm', true).isValid()) {
      this.selectedDate = moment(value);
      this.propagateChange(this.selectedDate);
    }

  }

  onChangeOption() {
    const now = new Date();
    switch (this.selectedOption) {
      case 'today': this.selectedDate =  moment(now); break;
      case 'yesterday': this.selectedDate = moment(new Date(new Date().setDate(now.getDate() - 1))); break;
      case 'lastWeek': this.selectedDate = moment(new Date(new Date().setDate(now.getDate() - 7))); break;
      default: this.selectedDate =  moment(now); break;
    }
  }

  onChangeTime(value: any) {
    console.log(value);
    const [hour, minute] = this.time.split(':');
    this.selectedDate = moment(this.selectedDate).hour(+hour).minute(+minute);

    this.propagateChange(this.selectedDate);
  }
}

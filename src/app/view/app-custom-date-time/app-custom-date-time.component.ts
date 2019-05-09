import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material';
import * as moment from 'moment';
import {Platform} from '@angular/cdk/platform';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppCustomDateTimeComponent),
  multi: true,
};

@Component({
  selector: 'app-app-custom-date-time',
  providers: [
    SELECT_VALUE_ACCESSOR,
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

  // time = '';
  selectedOption = 'today';
  // dateValue = '';
  // dateChoosen: any;
  timeString = '00:00';

  formGroup: FormGroup;

  private propagateChange = (_: any) => { };

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      dateChoosen: new FormControl(null),
      dateValue: new FormControl(''),
      time: new FormControl('')
    });
  }

  registerOnChange( fn: any ): void {
    this.propagateChange = fn;
  }

  registerOnTouched( fn: any ): void {
    // this.onTouched = fn;
  }

  writeValue( value: any ): void {
    this.formGroup.get('dateValue').setValue(this.formatDate(value));
  }

  formatDate(date: Date): string {
    return moment(date).format(`MM/DD/YYYY ${this.timeString}`);
  }

  onDateInput(eventType) {
    let strDate = '';
    if (eventType === 'chooseDate') {
      const dateChoosen = this.formGroup.get('dateChoosen').value;
      if (dateChoosen) {
        strDate = this.formatDate(dateChoosen);
        this.propagateChange(strDate);
        this.formGroup.get('dateValue').setValue(strDate);
      }
    }
    if (eventType === 'input') {
      this.propagateChange(this.formGroup.get('dateValue').value);
    }

    const testValidDate = moment(this.formGroup.get('dateValue').value, 'MM/DD/YYYY HH:mm', true).isValid();
    if (!testValidDate) {
      this.formGroup.get('dateValue').setErrors({Invalid: true});
    } else {
      // this.formGroup.get('dateValue').setErrors({Invalid: false});
    }


  }

  onChangeOption() {
    // const now = new Date();
    // switch (this.selectedOption) {
    //   case 'today': this.selectedDate =  now; break;
    //   case 'yesterday': this.selectedDate = new Date(new Date().setDate(now.getDate() - 1)); break;
    //   case 'lastWeek': this.selectedDate = new Date(new Date().setDate(now.getDate() - 7)); break;
    //   default: this.selectedDate = now; break;
    // }
    // this.onDateInput(this.selectedDate);
  }

  onChangeTime() {
    const [hour, minute] = this.formGroup.get('time').value.split(':');
    function _to2digit(n: number) {
      return ('00' + n).slice(-2);
    }
    this.timeString = `${_to2digit(+hour)}:${_to2digit(+minute)}`;

    this.formGroup.get('dateValue').setValue(moment(this.formGroup.get('dateValue').value).format(`MM/DD/YYYY ${this.timeString}`));

    this.propagateChange(this.formGroup.get('dateValue').value);
  }
}


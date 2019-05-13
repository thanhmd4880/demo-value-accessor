import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import * as moment from 'moment';
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
    {displayName: 'Advanced', value: 'advanced'},
  ];
  modelOpen = false;

  get selectedDate1() {
    return moment(this.formGroup.get('_selectedDate1').value).format('MMM Do, YYYY');
  }

  get selectedDate2() {
    return moment(this.formGroup.get('_selectedDate2').value).format('MMM Do, YYYY');
  }
  get fromTime() {
    return this.formGroup.get('fromTime').value;
  }
  get toTime() {
    return this.formGroup.get('toTime').value;
  }

  private propagateChange = (_: any) => { };

  ngOnInit() {
    this.formGroup = new FormGroup({
      dateTimeType: new FormControl('advanced'),
      dateInputType1: new FormControl('fixed'),
      dateOp1: new FormControl('minus'),
      duration1: new FormControl(0, [Validators.min(0)]),
      period1: new FormControl('days'),
      dateInputType2: new FormControl('fixed'),
      dateOp2: new FormControl('minus'),
      duration2: new FormControl(0, [Validators.min(0)]),
      period2: new FormControl('days'),
      _selectedDate1: new FormControl(new Date()),
      _selectedDate2: new FormControl(new Date()),
      radioTime: new FormControl('1'),
      fromTime: new FormControl('00:00 am'),
      toTime: new FormControl('00:00 am')
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
  }

  onSelectDate1(event: any) {
    this.formGroup.get('_selectedDate1').setValue(event);
  }
  onSelectDate2(event: any) {
    this.formGroup.get('_selectedDate2').setValue(event);
  }

  onDateChange1(event: string) {
    let dateValue = moment(new Date());
    const dateOp = this.formGroup.get('dateOp1').value;
    const duration =  this.formGroup.get('duration1').value || 0;
    const period = this.formGroup.get('period1').value;


    if (dateOp === 'plus') {
      dateValue = moment(dateValue).add(duration, period);
    } else if (dateOp === 'minus') {
      dateValue = moment(dateValue).subtract(duration, period);
    }

    this.formGroup.get('_selectedDate1').setValue(dateValue.toDate());


  }
}

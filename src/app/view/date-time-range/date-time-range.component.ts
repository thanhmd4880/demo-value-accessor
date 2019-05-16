import {AfterViewInit, Component, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import * as moment from 'moment';
import {SlideInOutAnimation} from '../../animation/slide-in-out';

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
  styleUrls: ['./date-time-range.component.css'],
  animations: [SlideInOutAnimation]
})
export class DateTimeRangeComponent implements OnInit, ControlValueAccessor {
  VIEWS: any = {
    INCLUDETODAYVIEW: 'toDateView',
    INCLUDECALENDARVIEW: 'calendarDateView'
  };

  constructor() {
  }

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
  formatView = [
    {value: 'fixed', toDateView: false, calendarDateView: true, lastDateType: false, radioGroupTimeView: true},
    {value: 'last7days', toDateView: true, calendarDateView: false, lastDateType: true, radioGroupTimeView: true},
    {value: 'last14days', toDateView: true, calendarDateView: false, lastDateType: true, radioGroupTimeView: true},
    {value: 'today', toDateView: false, calendarDateView: false, lastDateType: true, radioGroupTimeView: false},
    {value: 'yesterday', toDateView: false, calendarDateView: false, lastDateType: true, radioGroupTimeView: false},
    {value: 'thisweek_todate_sunday', toDateView: true, calendarDateView: false, lastDateType: true, radioGroupTimeView: true},
    {value: 'lastweek_monday', toDateView: false, calendarDateView: false, lastDateType: true, radioGroupTimeView: true},
    {value: 'thisyear_todate', toDateView: true, calendarDateView: false, lastDateType: true, radioGroupTimeView: true},
    {value: 'lastyear', toDateView: false, calendarDateView: false, lastDateType: true, radioGroupTimeView: true},
    {value: 'advanced', toDateView: false, calendarDateView: true, lastDateType: false, radioGroupTimeView: true},
  ];

  @ViewChild('dateRangeInfo') dateRangeInfo;
  @ViewChild('dateRangeText') dateRangeText;

  animationState = 'in';

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

  get dateTypeDisplayName() {
    return this.dateTypeOptions.find(option => option.value === this.formGroup.get('dateTimeType').value)['displayName'];
  }

  get isNotIncludeDetailDate() {
    return this.formatView.find(fv => fv.value === this.formGroup.get('dateTimeType').value)['lastDateType'];
  }

  get isIncludeTodayCheckedView() {
    return this.formatView.find(fv => fv.value === this.formGroup.get('dateTimeType').value)['toDateView'];
  }

  get isIncludeCalendarView() {
    return this.formatView.find(fv => fv.value === this.formGroup.get('dateTimeType').value)['calendarDateView'];
  }

  get isIncludeTodayChecked() {
    return this.formGroup.get('includeToday').value;
  }

  get isIncludeRadioTimeGroupView() {
    return this.formatView.find(fv => fv.value === this.formGroup.get('dateTimeType').value)['radioGroupTimeView'];
  }


  private propagateChange = (_: any) => {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      dateRange: new FormControl(''),
      dateTimeType: new FormControl('advanced'),
      dateInputType1: new FormControl('fixed'),
      dateOp1: new FormControl('minus'),
      duration1: new FormControl(0, [Validators.min(0)]),
      period1: new FormControl('days'),
      dateInputType2: new FormControl('fixed'),
      dateOp2: new FormControl('minus'),
      duration2: new FormControl(0, [Validators.min(0)]),
      period2: new FormControl('days'),
      _selectedDate1: new FormControl(new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`)),
      _selectedDate2: new FormControl(new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`)),
      allDay: new FormControl(true),
      radioTime: new FormControl('1'),
      fromTime: new FormControl('00:00 am'),
      toTime: new FormControl('00:00 am'),
      includeToday: new FormControl(false)
    });

    this.formGroup.valueChanges.subscribe(changes => console.log(changes));

    this.formGroup.get('radioTime').disable({onlySelf: true});
    this.formGroup.get('fromTime').disable({onlySelf: true});
    this.formGroup.get('toTime').disable({onlySelf: true});

    // {displayName: 'Fixed', value: 'fixed'},
    // {displayName: 'Last 7 days', value: 'last7days'},
    // {displayName: 'Last 14 days', value: 'last14days'},
    // {displayName: 'Today', value: 'today'},
    // {displayName: 'Yesterday', value: 'yesterday'},
    // {displayName: 'This week to date (starts Sunday)', value: 'thisweek_todate_sunday'},
    // {displayName: 'Last week (starts Monday)', value: 'lastweek_monday'},
    // {displayName: 'This year to date', value: 'thisyear_todate'},
    // {displayName: 'Last year', value: 'lastyear'},
    // {displayName: 'Advanced', value: 'advanced'},

    this.formGroup.get('dateTimeType').valueChanges.subscribe(changes => {
      const dateTimeType = this.formGroup.get('dateTimeType').value;
      const currentFromDate = new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`);
      const yesterday = moment(currentFromDate).subtract(1, 'days');
      let newDate = null;
      if (dateTimeType === 'fixed' || dateTimeType === 'advanced' ) {
        this.formGroup.get('_selectedDate1').setValue(currentFromDate);
        this.formGroup.get('_selectedDate2').setValue(currentFromDate);
      }
      if (dateTimeType === 'last7days') {
        newDate = moment(currentFromDate).subtract(7, 'days');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(yesterday.toDate());
      }
      if (dateTimeType === 'last14days') {
        newDate = moment(currentFromDate).subtract(14, 'days');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(yesterday.toDate());
      }
      if (dateTimeType === 'today') {
        this.formGroup.get('_selectedDate1').setValue(currentFromDate);
        this.formGroup.get('_selectedDate2').setValue(moment(currentFromDate).add(1, 'days').toDate());
      }
      if (dateTimeType === 'yesterday') {
        newDate = moment(currentFromDate).subtract(1, 'days');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(newDate.add(1, 'days').toDate());
      }
      if (dateTimeType === 'thisweek_todate_sunday') {
        newDate = moment(currentFromDate).startOf('isoWeek').subtract(1, 'days');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(yesterday.toDate());
      }
      if (dateTimeType === 'lastweek_monday') {
        newDate = moment(currentFromDate).subtract(1, 'week').startOf('isoWeek');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(yesterday.toDate());
      }
      if (dateTimeType === 'thisyear_todate') {
        newDate = moment(currentFromDate).startOf('year');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(yesterday.toDate());
      }
      if (dateTimeType === 'lastyear') {
        newDate = moment(currentFromDate).subtract(1, 'year').startOf('year');
        const endDate = moment(currentFromDate).subtract(1, 'year').endOf('year');
        this.formGroup.get('_selectedDate1').setValue(newDate.toDate());
        this.formGroup.get('_selectedDate2').setValue(endDate.toDate());
      }
    });

    this.formGroup.get('includeToday').valueChanges.subscribe(changes => {
      const currentToDate = new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`);
      if (changes) {
        this.formGroup.get('_selectedDate2').setValue(currentToDate);
      } else {
        this.formGroup.get('_selectedDate2').setValue(moment(currentToDate).subtract(1, 'days').toDate());

      }
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


  applyModel(event) {
    event.preventDefault();
    this.modelOpen = !this.modelOpen;
    // set the value of dateRange
    this.formGroup.get('dateRange').setValue(this.dateRangeInfo.nativeElement.innerText);
  }

  cancelModel(event) {
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
    // tslint:disable-next-line:max-line-length
    this.formGroup.get('_selectedDate1').setValue(new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`));
    let dateValue = moment(this.formGroup.get('_selectedDate1').value);
    const dateOp = this.formGroup.get('dateOp1').value;
    // tslint:disable-next-line:max-line-length
    const duration = Number.isNaN(parseInt(this.formGroup.get('duration1').value, 10)) ? 0 : parseInt(this.formGroup.get('duration1').value, 10);
    const period = this.formGroup.get('period1').value;

    if (dateOp === 'plus') {
      dateValue = moment(dateValue).add(duration, period);
    } else if (dateOp === 'minus') {
      dateValue = moment(dateValue).subtract(duration, period);
    }

    if (period === 'months') {
      dateValue = dateValue.date(1);
    } else if (period === 'years') {
      dateValue = dateValue.date(1).month(0);
    }

    this.formGroup.get('_selectedDate1').setValue(dateValue.toDate());
  }

  get dateTimeType() {
    return this.formGroup.get('dateTimeType').value;
  }

  get allDayChecked() {
    return this.formGroup.get('allDay').value;
  }

  onCheckAllDay() {
    const checked = this.formGroup.get('allDay').value;
    if (checked) {
      this.formGroup.get('fromTime').disable({onlySelf: true});
      this.formGroup.get('toTime').disable({onlySelf: true});
      this.formGroup.get('radioTime').disable({onlySelf: true});
    } else {
      this.formGroup.get('fromTime').enable({onlySelf: true});
      this.formGroup.get('toTime').enable({onlySelf: true});
      this.formGroup.get('radioTime').enable({onlySelf: true});
    }
  }

  handleChangeTime(type, event) {
    if (type === 'fromTime') {
      this.formGroup.get('fromTime').setValue(event.value);
    } else if (type === 'toTime') {
      this.formGroup.get('toTime').setValue(event.value);
    }
  }

  getHourMinuteOptionData(): string[] {
    const data: string[] = [];
    let date = moment().hour(0).minute(0);
    let d = date.format('h:mm a');
    do {
      data.push(d);
      date = date.add(15, 'minutes');
      d = date.format('h:mm a');
    }
    while (d !== '12:00 am');

    return data;
  }

  toogleModel(event) {
    event.preventDefault();
    this.modelOpen = !this.modelOpen;
  }
}

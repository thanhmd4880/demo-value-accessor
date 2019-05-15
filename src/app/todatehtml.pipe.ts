import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {from} from 'rxjs';
@Pipe({
  name: 'todatehtml'
})
export class TodatehtmlPipe implements PipeTransform {
  formatView: any;
  formGroupValue: any;
  dateTypeOptions: any;
  transform(formGroupValue: any, formatView: any, dateTypeOption: any): any {
    this.formatView = formatView;
    this.formGroupValue = formGroupValue;
    this.dateTypeOptions = dateTypeOption;
    let returnStr = ``;
    if (!this.isNotIncludeDetailDate) {
      if (formGroupValue.dateInputType1 === 'fixed' && formGroupValue.dateInputType2 === 'fixed') {
        if (formGroupValue.radioTime == 1) {
          returnStr = `${this.selectedDate1} - ${this.selectedDate2}`;
          if(!formGroupValue.allDay) {
            returnStr += ` (${this.fromTime} - ${this.toTime} each day)`;
          }
        }
        if (formGroupValue.radioTime == 2){
          if(formGroupValue.allDay) {
            returnStr = `${this.selectedDate1} - ${this.selectedDate2}`;
          } else {
            returnStr = `${this.selectedDate1} (${this.fromTime}) - ${this.selectedDate2} (${this.toTime})`;
          }
        }
      }
      if (formGroupValue.dateInputType1 === 'today' && formGroupValue.dateInputType2 === 'fixed') {
        if (formGroupValue.radioTime == 1) {
          returnStr = `Today ${formGroupValue.dateOp1} ${formGroupValue.duration1} ${formGroupValue.period1} - ${this.selectedDate2}`;
          if (!formGroupValue.allDay) {
            returnStr += ` (${this.fromTime} - ${this.toTime} each day)`;
          }
        }
        if (formGroupValue.radioTime == 2) {
          if(formGroupValue.allDay) {
            returnStr = `Today ${formGroupValue.dateOp1} ${formGroupValue.duration1} ${formGroupValue.period1} - ${this.selectedDate2}`;
          }
          else {
            returnStr = `Today ${formGroupValue.dateOp1} ${formGroupValue.duration1} ${formGroupValue.period1} (${this.fromTime}) - ${this.selectedDate2} (${this.toTime})`;
          }
        }
      }
      if (formGroupValue.dateInputType1 === 'fixed' && formGroupValue.dateInputType2 === 'today') {
        if (formGroupValue.radioTime == 1) {
          returnStr = `${this.selectedDate1} - Today ${formGroupValue.dateOp2} ${formGroupValue.duration2} ${formGroupValue.period2}`;
          if (!formGroupValue.allDay) {
            returnStr += ` (${this.fromTime} - ${this.toTime} each day)`;
          }
        }
        if (formGroupValue.radioTime == 2) {
          if(formGroupValue.allDay) {
            returnStr = `${this.selectedDate1} - Today ${formGroupValue.dateOp2} ${formGroupValue.duration2} ${formGroupValue.period2}`;
          }
          else {
            returnStr = `${this.selectedDate1} (${this.fromTime}) - Today ${formGroupValue.dateOp2} ${formGroupValue.duration2} ${formGroupValue.period2} (${this.toTime})`;
          }
        }
      }
      if (formGroupValue.dateInputType1 === 'today' && formGroupValue.dateInputType2 === 'today') {
        if (formGroupValue.radioTime == 1) {
          returnStr = `Today ${formGroupValue.dateOp1} ${formGroupValue.duration1} ${formGroupValue.period1} - Today ${formGroupValue.dateOp2} ${formGroupValue.duration2} ${formGroupValue.period2}`;
          if (!formGroupValue.allDay) {
            returnStr += ` (${this.fromTime} - ${this.toTime} each day)`;
          }
        }
        if (formGroupValue.radioTime == 2) {
          if(formGroupValue.allDay) {
            returnStr = `Today ${formGroupValue.dateOp1} ${formGroupValue.duration1} ${formGroupValue.period1} - Today ${formGroupValue.dateOp2} ${formGroupValue.duration2} ${formGroupValue.period2}`;
          } else {
            returnStr = `Today ${formGroupValue.dateOp1} ${formGroupValue.duration1} ${formGroupValue.period1} (${this.fromTime}) - Today ${formGroupValue.dateOp2} ${formGroupValue.duration2} ${formGroupValue.period2} (${this.toTime})`;
          }
        }
      }
    } else {
      returnStr = `${this.dateTypeDisplayName}`;
      if (this.isIncludeTodayCheckedView && !formGroupValue.includeToday) {
        returnStr += `, not including today`;
      }
      if (this.isIncludeTodayCheckedView && formGroupValue.includeToday) {
        returnStr += `, including today`;
      }
      if (!formGroupValue.allDay && this.isIncludeRadioTimeGroupView) {
        if (formGroupValue.radioTime == 1) {
          returnStr +=  ` (${this.fromTime} - ${this.toTime} each day)`;
        }
        if (formGroupValue.radioTime == 2) {
          returnStr +=  ` (${this.fromTime} - ${this.toTime})`;
        }
      }
      if (!formGroupValue.allDay && this.isIncludeRadioTimeGroupView) {
        returnStr += ` (${this.fromTime} - ${this.toTime})`;
      }
    }
    return returnStr;
  }

  get selectedDate1() {
    return moment(this.formGroupValue._selectedDate1).format('MMM Do, YYYY');
  }

  get selectedDate2() {
    return moment(this.formGroupValue._selectedDate2).format('MMM Do, YYYY');
  }
  get fromTime() {
    return this.formGroupValue.fromTime;
  }
  get toTime() {
    return this.formGroupValue.toTime;
  }

  get isNotIncludeDetailDate() {
    return this.formatView.find(fv => fv.value === this.formGroupValue.dateTimeType)['lastDateType'];
  }

  get isIncludeTodayCheckedView() {
    return this.formatView.find(fv => fv.value === this.formGroupValue.dateTimeType)['toDateView'];
  }

  get isIncludeCalendarView() {
    return this.formatView.find(fv => fv.value === this.formGroupValue.dateTimeType)['calendarDateView'];
  }

  // get isIncludeTodayChecked() {
  //   return this.formGroup.get('includeToday').value;
  // }

  get isIncludeRadioTimeGroupView() {
    return this.formatView.find(fv => fv.value === this.formGroupValue.dateTimeType)['radioGroupTimeView'];
  }

  get dateTypeDisplayName() {
    return this.dateTypeOptions.find(option => option.value === this.formGroupValue.dateTimeType)['displayName'];
  }

  // get isIncludeTodayChecked() {
  //   return this.formGroup.get('includeToday').value;
  // }



}

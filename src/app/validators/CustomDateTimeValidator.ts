import {FormControl} from '@angular/forms';
import * as moment from 'moment';

const FORMAT = 'MM/DD/YYYY HH:mm';

export function CustomDateTimeValidator(control: FormControl) {
  if (!control || !control.value) { return; }

  // const date = control.value;

  if (!moment(control.value, FORMAT, true).isValid()) {
    return {
      validateDate: {
        Invalid: true
      }
    };
  }

  return null;

}

// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

// moment.js locale configuration
// locale : Thai-Buddhist Era [th-be]
// author : Watcharapol Sanitwong : https://github.com/tumit

import { LocaleData } from '../locale/locale.class';
import { setFullYear } from '../utils/date-setters';
import { getFullYear, getMonth } from '..';
import { getDate } from '../utils/date-getters';

export const thBeLocale: LocaleData = {
  abbr: 'th-be',
  months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
  monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
  monthsParseExact: true,
  weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
  weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
  weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY เวลา H:mm',
    LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
  },
  meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
  isPM(input) {
    return input === 'หลังเที่ยง';
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return 'ก่อนเที่ยง';
    } else {
      return 'หลังเที่ยง';
    }
  },
  calendar: {
    sameDay: '[วันนี้ เวลา] LT',
    nextDay: '[พรุ่งนี้ เวลา] LT',
    nextWeek: 'dddd[หน้า เวลา] LT',
    lastDay: '[เมื่อวานนี้ เวลา] LT',
    lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'อีก %s',
    past: '%sที่แล้ว',
    s: 'ไม่กี่วินาที',
    ss: '%d วินาที',
    m: '1 นาที',
    mm: '%d นาที',
    h: '1 ชั่วโมง',
    hh: '%d ชั่วโมง',
    d: '1 วัน',
    dd: '%d วัน',
    M: '1 เดือน',
    MM: '%d เดือน',
    y: '1 ปี',
    yy: '%d ปี'
  },
  preinput(input: Date): Date {
    // just year-543 of input before next step
    let preinputDate = new Date(input);
    preinputDate.setFullYear(input.getFullYear()-543);
    return preinputDate;
  },
  postvalue(value: Date): Date {
    // just year+543 of value before display on ui
    let preinputDate = new Date(value);
    let fullYear =  setFullYear(preinputDate, value.getFullYear());
  //   console.log('FULL YEAR BEFORE', fullYear)
    const _month = getMonth(fullYear);
    const _date = getDate(fullYear);
    const _year = getFullYear(fullYear);

    console.log(_year, _month, _date)
    fullYear = new Date(_year + 543, _month, _date)
 //  console.log(fullYear, 'FULL YEAR AFTER')
    return fullYear
   }
};

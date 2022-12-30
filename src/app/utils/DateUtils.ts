import { parse, format as dateFnsFormat } from "date-fns";

export class DateUtils {

  static dateFormat = 'dd/MM/yyyy';
  static dateFormatInput = 'yyyy-MM-dd';
  static dateFormatApi = 'yyyy-MM-ddTHH:mm:ss.sssZ';
  static dateDTO = 'yyyy-MM-dd';

  static minDataInput = '1700-04-01';
  static maxDataInput = '2100-12-30';

  static dataInput = {
    format: DateUtils.dateFormatInput,
    min: DateUtils.minDataInput,
    max: DateUtils.maxDataInput
  };

  static dateToString = (date?: any, format: any = DateUtils.dateFormat) => {
    return dateFnsFormat(date, format);
  }

  static dateToStringInput = (date?: any) => {
    return DateUtils.dateToString(date, DateUtils.dateFormatInput);
  }

  static stringToDate = (date?: any, format: any = DateUtils.dateFormat) => {
    return parse(date, format, new Date());
  }

  static stringToDateInput = (date?: any) => {
    return DateUtils.stringToDate(date, DateUtils.dateFormatInput);
  }

}

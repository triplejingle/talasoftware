import moment from "moment/moment";

export function getYears(date: string){
  const start = moment(date);
  const remainder = 6- (start.month() % 12);
  return moment().diff(date, 'years') + " years and " + remainder +" months"
}
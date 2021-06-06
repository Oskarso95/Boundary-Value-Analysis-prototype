/**
 * Used as reference when date is invalid and we want access to its year,month,day parameters
 */
module.exports = class DateReference {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
};

/**
 * Used as container class for a cube, a date and the year,month,day of the date
 * to use as reference when input is invalid
 */

module.exports = class DateCube {
  constructor(date, cube, dateReference) {
    this.date = new Date(date);
    this.cube = cube;
    this.dateReference = dateReference;
  }

  ISOdate() {
    try {
      return this.date.toISOString().slice(0, 10); //.replace(/-/g, "/");
    } catch (err) {
      return "" + err;
    }
  }
};

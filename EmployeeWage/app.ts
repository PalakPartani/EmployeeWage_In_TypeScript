
let isPresent = 1;
let empWorkingHrs = 0;
let WAGE_PER_HOUR = 20;
let FULL_DAY_HOUR = 8;
let empWage = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == 1) {
    var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log('Employee daily Wage is : ' + dailyWage);
}
else {
    console.log('Employee Is Absent');
}
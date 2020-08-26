let isPresent = 1;
let empWorkingHrs = 0;
let WAGE_PER_HOUR = 20;
let FULL_DAY_HOUR = 8;
let PART_TIME_HOUR = 4;

let empWage = 0;
let empCheck = Math.round(Math.random() * 10) % 3;
switch (empCheck) {
    case 0:
        {
            console.log('Full Time Employee Is Present');
            var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
            console.log('Employee daily Wage is : ' + dailyWage);
            break;
        }
    case 1:
        {
            console.log('Part Time Employee Is Present');
            var dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
            console.log('Part Time Employee Wage is : ' + dailyWage);
            break;
        }
    default:
        {
            console.log('Employee Is Absent');
        }
}
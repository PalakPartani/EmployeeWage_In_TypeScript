//Declaring constants and variables.
const WAGE_PER_HOUR = 20;
const PART_TIME = 4;
const FULL_TIME = 8;
let totalSal = 0;
let day = 1;
let hours = 0;
let hr = 0;
//cal daily wage.
let calculateDailyWage = (employeeHrs: number,days:number) => {
    var wage = employeeHrs * WAGE_PER_HOUR;
    console.log('Day : ' + days);
    console.log("Daily Wage : " + wage)
}
    //Function to get working hours.
    let getWorkHours=(value:number)=>{
        switch (value) {
            case 0:
                totalSal += WAGE_PER_HOUR * FULL_TIME;
                hours = FULL_TIME;
                break;
            case 1:
               // console.log('Part Time Employee is Present');
                totalSal += WAGE_PER_HOUR * PART_TIME;
                hours = PART_TIME;

                break;
            default:
                console.log('Employee is Absent');
                totalSal +=0;
                hours += 0;
        }


}

//Iterating for calculating wage for 20 days or 100 hours.
while (day < 20 && hr < 100) {
    day++;
    let empCheck = Math.round(Math.random() * 10) % 3;
        getWorkHours(empCheck);
        hr += hours;
    var empDailyWage: Array<number> = [hr];
    calculateDailyWage(hours, day);
   
}
//Displaying the total salary for month.
totalSal = (hr * WAGE_PER_HOUR);
console.log("Wages for a Month :  " + totalSal);
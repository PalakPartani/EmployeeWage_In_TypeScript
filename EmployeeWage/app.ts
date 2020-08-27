//Declaring constants and variables.
let WAGE_PER_HOUR = 20;
let PART_TIME = 4;
let FULL_TIME = 8;
let totalSal = 0;
let day = 1;
let hours = 0;
//Iterating for calculating wage for 20 days.
while (day < 20 && hours < 100) {
    let empCheck = Math.round(Math.random() * 10) % 3;
    getWorkHours(empCheck);
    day++;
}

    //Function to get working hours.
    function getWorkHours(value:number){
        switch (value) {
            case 0:
                console.log('Full Time Employee Is Present');
                totalSal += WAGE_PER_HOUR * FULL_TIME;
                hours += FULL_TIME;
                break;
            case 1:
                console.log('Part Time Employee Is Present');
                totalSal += WAGE_PER_HOUR * PART_TIME;
                hours += PART_TIME;
                break;
            default:
                console.log('Employee Is Absent');
                totalSal +=0;
                hours += 0;
        }
}
//Displaying the total salary for month.
console.log('Employee total Wage is : ' + totalSal);
console.log('Working Hrs :' + hours);
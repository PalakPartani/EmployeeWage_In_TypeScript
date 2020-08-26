//Declaring constants and variables.
let WAGE_PER_HOUR = 20;
let NO_OF_WORKING_DAYS = 20;
let PART_TIME = 4;
let FULL_TIME = 8;
let totalSal = 0;
let day = 1;

//Iterating for calculating wage for 20 days.
while (day < 20) {
    let empCheck = Math.round(Math.random() * 10) % 3;
    switch (empCheck) {
        case 0:
                console.log('Full Time Employee Is Present');
                totalSal = (totalSal + (WAGE_PER_HOUR * FULL_TIME));
                break;
        case 1:
                console.log('Part Time Employee Is Present');
                totalSal = (totalSal + (WAGE_PER_HOUR * PART_TIME));
                break;
        case 2:
            console.log('Employee Is Absent');
            totalSal = totalSal + 0;  
    }
    day++;
}
//Displaying the total salary for month.
console.log('Employee total Wage is : ' + totalSal);
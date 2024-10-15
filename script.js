// Given the array numbers = {5, 10, 15, 20, 25}, write a for loop that calculates and prints the sum of all the elements in the array.
// Declare two variables: one of type int named age with the value 30, and another of type double named height with the value 5.9. Write a statement that prints "Age is 30 and Height is 5.9" using these variables.
// Given the array numbers = {3, 6, 9, 12, 15}, write a function to calculate the average of the array values. Print both the sum and the average after the loop.
// Given the array numbers = {12, 45, 67, 23, 89, 54, 90}, write a program that prints all numbers greater than 50. 
// Write a program that calculates both the area and circumference of a circle.
// Write a program that asks the user for two numbers, start and end. Write a function to calculate and print the sum of all multiples of 3 between start and end (inclusive). If there are no multiples of 3 in that range, print "No multiples found."


//1. sum of all elements
let arraynumbers = [5, 10, 15, 20, 25];
let total=0;
for(i=0;i<arraynumbers.length;i++){
    total+=arraynumbers[i]
}
console.log(total);

//2 Declare two variable
var age=30;
var height=5.9;
console.log(`Age is ${age} and Height is ${height}`);

//3. calculate average/and sum
function values(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    let average = sum / num.length;
    return { sum, average }; 
}

let num = [3, 6, 9, 12, 15];
let result = values(num); 
console.log("sum = " + result.sum); 
console.log("average = " + result.average); 




//4. prints all numbers greater than 50. 

let  greater = [12, 45, 67, 23, 89, 54, 90]
for(i=0;i<greater.length;i++){
    if(greater[i]>50){
        console.log(greater[i])
    }
}

//5.  Write a program that calculates both the area and circumference of a circle.

function calculateCircle(radius) {
    let pi = 3.14; 
    let area = pi * radius * radius; 
    let circumference = 2 * pi * radius; // Circumference = 2 * π * r

    console.log("Area of the circle: " + area); 
    console.log("Circumference of the circle: " + circumference); 
}
let radius = 2;
calculateCircle(radius);


//6.
function sumMultiplesOfThree(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }

    if (sum > 0) {
        console.log("Sum of multiples of 3 between " + start + " and " + end + " is: " + sum);
    } else {
        console.log("No multiples found.");
    }
}

sumMultiplesOfThree(1, 2);





// QUESTION 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner

// taking array from exercise 14
var guestList: string[] = ["Ali ", "Arslan", "Talha", "Rizwan"];
console.log("No of Guests invited:", guestList.length);


//EXTRA 

var greeting: string = "hello,\n World"                        // \n is used to skip the line 
console.log(greeting)
var greeting2: string = "hello,\t world";                     // \t is used to skip the space equal to tab button
console.log(greeting2);


// QUESTION 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var cities: string[] = ["Lahore", "Faisalabad", "Karachi", "Islamabad", "Peshawar"];
console.log("List of Cities:")
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
};


// QUESTION 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these item.
var cars = {
    brand: "honda",
    model: "Civic",
    year: "2023"
}
console.log(cars);
// we can also create objects in the array.
var places = [{ name: "Usman Saeed", Province: "Punjab" }, { name: "Shazad", Province: "Karachi" }, { name: "Haseeb Arif", Province: "Punjab" }
];
console.log(places[2]);


// QUESTION 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var array: string[] = ["java", "javascript", "typescript", "HTML", "CSS"];
// to create an intentional error we need to create index greater than the array;
console.log(`Intentional error:${array[6]} `)
console.log(`Valid index:${array[4]}`);


// QUESTION 23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:*/

let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("Is car =='subaru'?i predict true");
console.log(car == 'subaru');
console.log("Is car =='honda'");
console.log(car == 'honda');

console.log("Is car==='subaru'? my prediction is  true");
console.log(car === 'subaru');
console.log("is car ==='honda'?my prediction is false");
console.log(car === 'honda');

console.log("is car !='subaru'? my prediction was false");
console.log(car != 'subaru');
console.log("is car !='honda'? my predication is true");
console.log(car != 'honda');  
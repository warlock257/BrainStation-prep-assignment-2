//Prep course assignment 2 - David Courtemanche


//Challenge 1

var hashes = [];

for (var i = 1; i < 8; i++){
    hashes.push("#");
    console.log(hashes);
}

/* Explanation
I created an array, then with a for loop, just added a new # each loop, and printed the entire array each loop.

Only thing that might not be quite as intended, is it looks like this: [ '#', '#' ]  instead of just  ##

*/ 



//Challenge 2

var number;

function isEven (number){
    if ((number % 2)  == 0){
        console.log("Number is even");
    } else if ((number % 2)  == 1){
        console.log("Number is odd");
    } else {
        console.log ("not a valid number");
    }
}

isEven(3);

/* Explanation

created an empty variable called number, then made a function that passes in that number
created an if statement that asks: if number remainder 2 is 0, then number is even
created an else if, if the same question has a remainder of 1, it's odd
If the number variable is not a number (like a word), the final else give the error message saying that it's not a number

then called the function, passing in various numbers to test.

*/
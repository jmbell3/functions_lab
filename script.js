/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (num) => {
    if (num >= 21) {
      return 'Adult';
    } else {
      return 'Minor';
    }
  }



console.log('Exercise 2 Result:', isAdult(22));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char){
 
  if (char = ['a', 'e', 'i','o', 'u'].includes(char)) { //includes checks to see if any character is present inside 
    return 'true';
  } else {
    return 'false';
  }
}



console.log('Exercise 3 Result:', isCharAVowel("h"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail (name, domain){
  return `${name}@${domain}`; //dollar sign adds together. //dollar sign prints name in the console log. returns the value
} 


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
   
  function greetuser(name,timeofday){ // two parameters required that will store arguements sam and morning


    switch(timeofday){ // switch to moring since it is an arguments. Prints greeting good morning
    case 'morning': greeting = 'Good Morning';
    break;
    case 'afternoon': greeting = 'Good Afternoon';
    break;
    case 'evening': greeting = 'Good evening';
    break;
    
    }
    return `${greeting}, ${name}`;
    
    }
    console.log('Exercise 5 Result:', greetuser('sam','morning'));
/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString(str){  //calls the funciton from console log. //rockstar is stored in the paramenter
    return str.split('').reverse().join(''); // .split('') ' r o c k s t a r ' .reverse() switches the code . join brings the leters come together
}
    console.log(reverseString('rockstar')); // rockstar is stored into string
  



console.log('Exercise 6 Result:', reverseString("rockstar"));


/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(str){ // palindrome means it remains the same word front to back
  return str === str.split('').reverse().join('');  // return prints values on the display // stric equals makes it become boolean
}


console.log('Exercise 7 Result:', checkPalindrome("radar"), checkPalindrome ('taco'));

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3){ //three parameters for three numbers
    return Math.max(num1,num2, num3); //Math.max is a method in js that shows highest number  
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8)); /*arguments are 5,10,8*/
/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage) // function is calculateTip, Parameters are billAmount, tipPercntage
{
  let tipAmount = (billAmount * tipPercentage)/ 100;  // created a let variable for tipAmount becaue billamount and tip percentage will change. // Created a math equation to calculate tip. 
  
  return tipAmount; 
}

console.log('Exercise 9 Result:', calculateTip(50, 20)); // 50 and 20, are the arguements for the parameters

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temperature, 'str')

if ('str' === 'C'){
  return temperature + 32;
}
else



console.log('Exercise 10 Result:', convertTemperature(32, "C"));




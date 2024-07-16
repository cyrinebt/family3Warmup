// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
	// return firstname+" "+lastname  
}


let MultipleOf13orNot = function() {

}
function combineNames(firstName, lastName) {
    return firstName + " " + lastName;
}




// 4-create a function that takes a age as a parametre and return that age in seconds.*//

const  AgeInSeconds = (age) =>  {


    // Constants
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const daysPerYear = 365;

    
    const totalSeconds = age * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
    return totalSeconds;
}



//  * 5 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

const sameLength=(str1, str2)=> {
}


return str1.length === str2.length;
}
/**
 *? 6 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 *? followed by a number starting from zero(solve it using while loop).
 *? example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */
 function reverseStr(inputStr) {
    let reversedStr = '';
    let index = 0;
    let length = inputStr.length;
    
    while (length > 0) {
        length--;
        reversedStr += inputStr[length] + index;
        index++;
    }
    
    return reversedStr;
}


let reverseStr = function (str){
}
/**
// * 7 Write a function called laugh() that takes one parameter,
// * num that represents the number of "ha"s to return.
// * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */
const laugh= function (num){

}


/**
 * 8- write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 * @function reverseArray
 * @param {array} array
 * @return {Array}
 */
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        
        [arr[start], arr[end]] = [arr[end], arr[start]];
      
        start++;
        end--;
    }
    
    return arr;
}





let reverseArray = (array ) => {}


/**
 * 10-Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */
let findAll2 = (arr,n) => {}


// 6. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord=(string) => {}



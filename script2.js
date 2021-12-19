/*Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.
Input:
addFive(5);
addFive(0);
addFive(-5);
Output:
10
5
0 */
//Solution
var num = 10;
function addFive(num) { return num + 5; }
var result = addFive(num)
console.log(result)

/*Write a function called “getOpposite”.
Given a number, return its opposite
Input:
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite(“5a”);
getOpposite(5.5);
Output:
-5
0
5
- 1
- 1*/
Solution:
var num = 5;
function getOpposite(num) {
    if (Number.isInteger(num)) { return num * (-1); }
    else ({ return: -1 })
}
var result = getOpposite(num);
console.log(result);

/*Fill in your code that takes an number minutes and converts it to seconds.
Examples
toSeconds(5) ➞ 300
toSeconds(3) ➞ 180
toSeconds(2) ➞ 120*/
var min = 5;
function toSeconds(min) { return min * 60; }
var secs = toSeconds(min);
console.log(secs);

/*Create a function that takes a string and returns it as an integer.
Examples
toInteger(“6”) ➞ 6
toInteger(“1000”) ➞ 1000
toInteger(“12”) ➞ 12 */
var mystr = "5";
function toInteger(mystr) { return parseInt(mystr); }
var myint = toInteger(mystr);
console.log(myint);

/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.
Examples
nextNumber(0) ➞ 1
nextNumber(9) ➞ 10
nextNumber(-3) ➞ -2 */
var myint = 9;
function nextNumber(myint) { return myint + 1; }
var myNextint = nextNumber(myint);
console.log(myNextint)
/*Create a function that takes an array and returns the first element.
Examples
getFirstElement([1, 2, 3]) ➞ 1
getFirstElement([80, 5, 100]) ➞ 80
getFirstElement([-500, 0, 50]) ➞ -500 */
var arr = [1, 2, 3];
function getFirstElement(arr) { return arr[0]; }
var data = getFirstElement(arr);
console.log(data);
/*Convert Hours into Seconds
Write a function that converts hours into seconds.
Examples
hourToSeconds(2) ➞ 7200
hourToSeconds(10) ➞ 36000
hourToSeconds(24) ➞ 86400 */
var arr = [1, 2, 3]; function hourToSeconds(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = 3600 * arr[i]; //storing it in same array of element
    }
    return arr
}
var result = hourToSeconds(arr)
console.log(result)
/*Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.
Examples
findPerimeter(6, 7) ➞ 26
findPerimeter(20, 10) ➞ 60
findPerimeter(2, 9) ➞ 22 */

function findPerimeter(num1, num2) { return 2 * (num1 + num2) }
var peri = findPerimeter(6, 7)
console.log(peri)

/*Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37
lessThan100(83, 34) ➞ false
// 83 + 34 = 117 */

function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        return true
    }
    else {
        return false
    }
}
var res = lessThan100(22, 15);
console.log(res);

/*Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
Examples
CountAnimals(2, 3, 5) ➞ 36
CountAnimals(1, 2, 3) ➞ 22
CountAnimals(5, 2, 8) ➞ 50 */

function CountAnimals(tur, horse, pigs) {
    var a = 2 * tur;
    var b = 4 * horse;
    var b = 4 * pigs;
    return a + b + c
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);
/*Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
Examples
divisibleByFive(5) ➞ true
divisibleByFive(-55) ➞ true
divisibleByFive(37) ➞ false */
function divisibleByFive(num1) {
    if (num1 % 5 === 0) { return true }
    else { return false }
}
var divisible = divisibleByFive(5);
console.log(divisible);

/*Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.
Input:
isEven(12);
isEven(0);
isEven(11);
isEven(“11h”);
Output:
true
true
false
-1 */
function isEven(num) {
    if (parseInt(num) == num) {
        if (num % 2 === 0) { return true }
        else { return false }
    }
    else { return -1 }
}
var even = isEven(5);
console.log(even);

/*Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
Input:
areBothOdd(1, 3);
areBothOdd(1, 4);
areBothOdd(2, 3);
areBothOdd(0, 0);
Output:
true
false
false
false */

function areBothOdd(num1, num2) {
    if ((num1 % 2 != 0) && (num2 % 2 != 0)) { return true }
    else { return false }
}
console.log(areBothOdd(5, 6));
/*Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
Input:
getFullName(“GUVI”, “GEEK”);
getFullName(“GUVI”, );
getFullName(, “GEEK”);
getFullName(“”, “”);
Output:
“GUVI GEEK”
“GUVI”
“GEEK”
“” */

function getFullName(firstName, lastName) {
    if ((firstName != '') && (lastName != '')) {
        return firstName + ' ' + lastName
    }
    else { return firstName + lastName }
}

console.log(getFullName());
/*Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
Input:
getLengthOfWord(“GUVI”);
getLengthOfWord(“”);
getLengthOfWord();
getLengthOfWord(9);
Output:
4
0
-1
-1
 */
function getLengthOfWord(word1) {
    if (typeOf(word1) == string) {
        return word1.length
    }
    else { return -1 }
}


/*Create a function to calculate the distance between two points defined by their x, y coordinates */
function getDistance(x1, y1, x2, y2) {
    //using pythagorean theorem
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

}
console.log(getDistance(100, 100, 400, 300));

/*Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0,
 it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3 */
function getNthElement(array, n) {
    if (array == "") {
        return undefined
    }
    return array[n]
}

/*Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
Input:
getLastElement([1, 2, 3, 4]);
Output:
4 */
function getLastElement(array) {
    return array[array.length - 1]
}
/*
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
mykey: “value”
};
Input:
getProperty(obj,’mykey’);
getProperty(obj,’dummykey’);
Output:
value
NA */
var obj = {
    mykey: "value"
};
function getProperty(obj, key) {
    let obj1 = Object.keys(obj)
    let p = []
    p.push(key)
    if (!obj1[0].includes(p)) {
        return undefined
    } else {
        return obj[key]

    }
}
getProperty(obj, "mykey");
getProperty(obj, "dummykey");

/*Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
}
Input:
addProperty(obj, “mykey”);
Output:
{
mykey: true
} */

var obj = {
    mykey: "value"
};
function addProperty(obj, key) {
    obj[key] = true; return obj
};
addProperty(obj, "mykey");

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let p = []
    p.push(arr.filter(val => val > 0).reduce((pre, current) => pre + current))
    p.push(arr.filter(val => val < 0).reduce((pre, current) => pre + current))
    return p
}
console.log(ar2);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar) {
    let p = []
    p.push(ar.filter(val => val > 0).reduce((pre, current) => pre + current))
    return p
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


/**Find the maximum number in an array of numbers */

function findMax(ar) {
    return Math.max(...ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:", max);

/*Reverse a string */

function reverseString(s) {
    var arr = s.split('').reverse().join('');
    return arr
}
console.log(reverseString("JavaScript"));


/**Calculate the sum of numbers received in a comma delimited string */
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s) {
    var sum = 0;
    k = s.split(',');
    for (i = 0; i < k.length; i++) {
        sum += +k[i];
    }
    return sum
}

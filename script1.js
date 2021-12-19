// 1.Do the below programs in anonymous function & IIFE
// a)PRINT ODD NUMBERS IN AN ARRAY

let value = [4, 44, 8, 9, 23, 12, 67, 28];
let oddNumbers = value.filter(function (n) { return n % 2 });
console.log(oddNumbers)


// b)Convert all the strings to title caps in a string array

let titleCaps = function () {
    const arr = ["hello", "world"];

    for (var i = 0; i <= arr.length; i++) {
        const result = arr[i][0].toUpperCase() + arr[i].substring(1);
        console.log(result)
    }
}
titleCaps();

// c)Sum of all numbers in an array

(function () {
    let arr = [1, 16, 34, 5, 8]
    console.log(arr.reduce((current, sum) => sum + current, 0)
    )
})();

// d) Return all the prime numbers in an array

let isPrime = function () {
    let numbers = [8, 7, 22, 11, 16, 29]
    for (var val of numbers) {
        if (val % 2 === 0) {
            continue;
        }
        console.log(val)
    }
}
isPrime();

// e)Return all the palindromes in an array

let arr1 = [];
let palindromes = function () {
    let arr = ["madam", "guru", "radar", "worst"]
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i]) {
            arr1.push(arr[i]);
        }
    }
};
palindromes();
console.log(arr1);

// f) Return median of two sorted arrays of same size

getMedian = function (ar1, ar2, n) {
    var i = 0; // Current index of i/p array ar1[]
    var j = 0; // Current index of i/p array ar2[]
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n; count++) {

        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        // equals sign because if two arrays have some common elements
        if (ar1[i] <= ar2[j]) {
            m1 = m2; //Store the prev median
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2; // Store the prev median
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2) / 2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2) {
    console.log("Median is " + getMedian(ar1, ar2, n1));
}






//g)Remove Duplicates from an array

let inputArr = [1, 2, 3, 4, 4, 2, 5, 5, 5]
let resultArr = [...new Set(inputArr)];
console.log(resultArr);

//h)Rotate an array by K times

let rotate = function () {
    var arr = [1, 2, 3, 4, 5, 6]
    let k = 4;
    k = k % arr.length;
    for (i = 0; i < arr.length; i++) {
        if (i < k) {
            console.log(arr[arr.length + i - k] + " ");
        }
        else {
            console.log((arr[i - k]) + " ")
        }
    }
}
rotate();
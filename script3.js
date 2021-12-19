// Do the below programs in arrow functions
//1. Print odd numbers in an array

let value = [4, 44, 8, 9, 23, 12, 67, 28];
let oddNumbers = value.filter(n => n % 2);
console.log(oddNumbers)

// 2. Convert all the strings to title caps in a string array


let titleCaps = () => {
    const arr = ["hello", "world"];

    for (var i = 0; i <= arr.length; i++) {
        const result = arr[i][0].toUpperCase() + arr[i].substring(1);
        console.log(result)
    }
}
titleCaps();

// 3. Sum of all numbers in an array


let sum = () => {
    let arr = [1, 16, 34, 5, 8]
    console.log(arr.reduce((current, sum) => sum + current, 0)
    )
}
sum();

// 4.Return all the prime numbers in an array

let isPrime = () => {
    let numbers = [8, 7, 22, 11, 16, 29]
    for (var val of numbers) {
        if (val % 2 === 0) {
            continue;
        }
        console.log(val)
    }
}
isPrime();

// 5. Return all the palindromes in an array

let arr1 = [];
let palindromes = () => {
    let arr = ["madam", "guru", "radar", "worst"]
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i]) {
            arr1.push(arr[i]);
        }
    }
};
palindromes();
console.log(arr1);
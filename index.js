//1. Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

//2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

//3. Function to find the minimum number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

//4. Function to filter out even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

//5. Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

//6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

//7. Function to find the average of numbers in an array
function findAverage(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

//8. Function to check if a year is a leap year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Testing the functions
console.log("Difference:", calculateDifference(10, 5));
console.log("Is Odd:", isOdd(7));
console.log("Find Min:", findMin([2, 3, 1, 5, 4]));
console.log("Filter Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("Sort Array Descending:", sortArrayDescending([1, 3, 2, 5, 4]));
console.log("Lowercase First Letter:", lowercaseFirstLetter("Hello"));
console.log("Find Average:", findAverage([1, 2, 3, 4, 5]));
console.log("Is Leap Year:", isLeapYear(2020));

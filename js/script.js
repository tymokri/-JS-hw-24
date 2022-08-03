"use strict";

// Task 1

let arr = ['a', 'b', 'c', 'd'];

let arr1 = arr.slice(0, 2);
let arr2 = arr.splice(2, 2);

let a = arr1.join('+');
let b = arr2.join('+');

// console.log(a);
// console.log(typeof (a));

// варіант 1:
alert([a, b].join(', '));

// варіант 2:
alert(a + ', ' + b);

// Task 2

let arr02 = [2, 5, 3, 9];

let k = arr02.at(0);
let m = arr02.at(1);
let c = arr02.at(2);
let d = arr02.at(3);

let result = k * m + c * d;

alert(result);

// Task 3

let arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

let x = arr3.at(1).at(0);

alert(x);

// Task 4

let obj = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}

let n = obj['js'];

alert(n.at(0));

// Task 5

let arr5 = [];

let o = "";

for (let i = 0; i < 5; i += 1) {

    o += "x";
    arr5.push(o);
}

console.log(arr5);

// Task 6

let arr6 = [];

for (let i = 1; i < 6; i += 1) {
    let a = "";

    for (let j = 0; j < i; j += 1) {
        a += i;
    }

    arr6.push(a);
}

console.log(arr6);

// Task 7

function arrayFill(a, b) {

    return Array(b).fill(a);
}

console.log(arrayFill("*", 3));

// Task 8

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // варіант масиву 1

// let arr8 = [1, 2, 3]; // варіант масиву 2

let sum8 = 0;

let count = 0;

for (let i = 0; i < arr8.length; i += 1) {

    sum8 += arr8[i];

    if(sum8 > 10) {
        count = i + 1;
        break;
    }
}

if(count === 0) throw new Error("The sum is less then 10 or equals 10");

console.log(sum8);

// Task 9

let arr9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let q = arr9.length;

let arrNew9 = [];

for (let i = 0; i < q; i += 1) {

    arrNew9.push(arr9.pop());
}

console.log(arrNew9);

// Task 10

let arr10 = [
    [1, 2, 3],
    [4, 5],
    [6]
];

let sum10 = 0;

for (let i = 0; i < arr10.length; i += 1) {

    for (let j = 0; j < arr10[i].length; j += 1) {

        sum10 += arr10.at(i).at(j);  // варіант 1

        // sum += arr[i][j];  // варіант 2
    }
}

console.log(sum10);

// Task 11

let arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum11 = 0;

for (let i = 0; i < arr11.length; i += 1) {

    for (let j = 0; j < arr11[i].length; j += 1) {

        for (let g = 0; g < arr11[i][j].length; g += 1) {

            sum11 += arr11[i][j][g];
        }
    }
}

console.log(sum11);
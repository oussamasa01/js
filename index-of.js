Instructions
Create 3 functions which accept an array to be searched, and a value to be matched.

indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
includes: which returns true if the value was found in the array, and false otherwise.
Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().
// function indexOf(arr , value,  str = 0){

//     for (let i=str ; i<arr.length ; i++){
//         if(arr[i] === value){
//             return i
//         }

//     }
//     return -1
// }
function lastIndexOf(arr, value, start = arr.length - 1) {
    if (start >= arr.length) {
        (start = arr.length - 1);
    }
    for (let i = start; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        
        }
    }

    return -1;
}

// console.log(indexOf([1, 2, 3, 4], 1));      // 0
// console.log(indexOf([1, 2, 3, 4], 3));      // 2
// console.log(indexOf([1, 2, 3, 4], 5));      // -1
// console.log(indexOf([1, 2, 3, 2], 2));      // 1
// console.log(indexOf([1, 2, 3, 2], 2, 2));   // 3
// console.log(indexOf([1, 2, 3, 2], 2, 4));   // -1



console.log(lastIndexOf([1, 2, 3, 2], 2));     // 3

console.log(lastIndexOf([1, 2, 3, 2], 2, 2));  // 1

console.log(lastIndexOf([1, 2, 3], 5));        // -1

console.log(includes([1, 2, 3], 2)); // true

console.log(includes([1, 2, 3], 5)); // false

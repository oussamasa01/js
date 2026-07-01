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
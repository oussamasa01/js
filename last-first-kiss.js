function first(str){
    return str[0]
}
function last(str){
    return str[str.length -1]
}
function kiss(str){
    return [last(str) , first(str)]
}



// // Test the first function
console.log(first([1, 2, 3])); // Should output 1
console.log(first("hello")); // Should output "h"

// Test the last function
console.log(last([1, 2, 3])); // Should output 3
console.log(last("hello")); // Should output "o"

// Test the kiss function
console.log(kiss([1, 2, 3])); // Should output [3, 1]
console.log(kiss("hello")); // Should output ["o", "h"]
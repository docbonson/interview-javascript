const removeDuplicates = (input) => {
  // Check for null or undefined input
  if (input == null) return []

  // Split the input string by commas
  let items = input.split(',')

  // Filter out empty strings and use a Set to store unique items
  let uniqueItems = [...new Set(items.filter((item) => item.trim() !== ''))]

  return uniqueItems
}

// Example Usage
const input =
  'red,yellow,green,blue,five,7,seven,7,green,,red,red,hello,four,five,0,1,0,'
console.log('1:', removeDuplicates(input))
// Output: ["red", "yellow", "green", "blue", "five", "7", "seven", "hello", "four", "0", "1"]
// Testing basic functionality with a normal list

// Edge Cases

// Empty input string
console.log('2:', removeDuplicates(''))
// Output: []
// Checking for empty input string, should return an empty array

// Null input
console.log('3:', removeDuplicates(null))
// Output: []
// Checking for null input, should return an empty array

// Consecutive commas
console.log('4:', removeDuplicates('apple,,banana,,apple,,banana,'))
// Output: ["apple", "banana"]
// Checking for consecutive commas, should ignore empty values

// Mixed case and special characters
console.log('5:', removeDuplicates(',apple,banana,APPLE,Banana,123,123,!!,!!,'))
// Output: ["apple", "banana", "APPLE", "Banana", "123", "!!"]
// Checking for mixed case sensitivity and special characters, should maintain case differences and special characters

const reverseString = (str) => {
  // Check for null or undefined input
  if (str == null) return ''

  let reversed = ''
  // Loop through the string from end to start
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

// Example Usage
console.log('1', reverseString('Elite Metal Tools')) // Output: "slooT lateM etilE"
console.log('2', reverseString('')) // Output: ""
console.log('3', reverseString(null)) // Output: ""
console.log('4', reverseString(undefined)) // Output: ""

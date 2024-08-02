const anagrams = (str1, str2) => {
  // Edge case: If either string is null or undefined
  if (str1 == null || str2 == null) return false

  // Normalize the strings: remove spaces, convert to lowercase, and sort characters
  const normalize = (str) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('')

  return normalize(str1) === normalize(str2)
}

// Example Usage
console.log('1', anagrams('listen', 'silent')) // Output: true
console.log('2', anagrams('hello', 'world')) // Output: false
console.log('3', anagrams('Hello', 'hello')) // Output: true
console.log('4', anagrams('', '')) // Output: true
console.log('5', anagrams(null, 'silent')) // Output: false
console.log('6', anagrams('listen', null)) // Output: false
console.log('7', anagrams('Lis ten', 'si Lent')) // Output: true

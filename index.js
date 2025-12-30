// Integer Sequence
// Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

// For example, given 5, return "12345".

function sequence(n) {
  console.log(n);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  console.log(arr);

  return arr.join('');
}

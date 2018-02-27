//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function loopIterated(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

//2. Next, try looping just like above except using recursion

function loop(n) {
  console.log(n);
  
  if (n === 0) {
    return;
  }
  
  loop(n - 1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  
  let result = base;
  
  while (exp > 1) {
    result *= base;
    exp--;
  }

  return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  return base * recursiveExponent(base, exp - 1);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
  const mult = arr[0] * num;
  
  if (arr.length === 1) {
    return [mult];
  }

  return [mult].concat(recursiveMultiplier(arr.slice(1), num));
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
  const element = arr[0];

  if (arr.length === 1) {
    return [element];
  }

  return recursiveReverse(arr.slice(1)).concat([element]);
}

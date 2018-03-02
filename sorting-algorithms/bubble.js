/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    let changes = false;

    for (let i = 1; i < array.length; i++) {
      const previous = array[i - 1];
      const current = array[i];

      if (current < previous) {
        array[i] = previous;
        array[i - 1] = current;
        changes = true;
      }
    }

    if (!changes) {
      sorted = true;
    }
  }
  
  return array;
}

// time complexity: O(n^2)

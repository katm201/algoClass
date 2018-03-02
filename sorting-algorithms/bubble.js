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
  // declare sorted = false (becomes true once we cycle through the whole sort and make no changes)
  // while array is still unsorted
    // declare changes = false (becomes true once we swap once)
    // loop through array
      // compare current # and next #
      // if current # > next #
        // swap #s
        // changes = true
    // if changes is still false
      // sorted = true
  // return sorted array
}

// time complexity: O(n^2)

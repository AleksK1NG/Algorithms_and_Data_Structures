// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort


const array = [190,2,100,123,157,1000];
// Bubble sort

function bubbleSort(arr) {
  // Implements Bubblesort

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array));
bubbleSort(array);
















function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}
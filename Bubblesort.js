function bubbleSort(arr) {
  let i = arr.length - 1;
  let count = 2;

  while (i > 0) {
    for (let j = 0; j <= arr.length - count; j++) {
      console.log("comparing", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    count++;
    i = i - 1;
    console.log("done");
  }
  return arr;
}

//Optimized

// function bubbleSort(arr) {
//   let i = arr.length - 1;
//   let count = 2;
//   let notSwapped;

//   while (i > 0) {
//     notSwapped = true;
//     for (let j = 0; j <= arr.length - count; j++) {
//       console.log("comparing", arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         notSwapped = false;
//       }
//     }
//     count++;
//     i = i - 1;
//     if (notSwapped === true) {
//       i = 0;
//     }
//     console.log("done");
//   }
//   return arr;
// }

console.log(bubbleSort([1, 2, 7, 8, 34, 45]));

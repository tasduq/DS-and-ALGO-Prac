function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    //0,1,2
    let min = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      //1,2,3,4,5
      console.log("comaring", arr[min], arr[j]);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    console.log("done");
  }
  return arr;
}

console.log(selectionSort([3, 5, 6, 7, 2, 1]));
//0,  1,  2, 3,  4, 5

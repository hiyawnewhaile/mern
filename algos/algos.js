//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
//Ex: [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]

let arr = [5,9,2,7,6];
console.log(arr)
for (var i =0; i < arr.length; i++){
    for(var j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr)

// Selection Sort
let arr2 = [5,9,2,7,6];

for (var i = 0; i < arr2.length; i++){
    let x = arr2[0];
    if(arr2[i] < x){
        x = arr2[i];
    }
    arr
}
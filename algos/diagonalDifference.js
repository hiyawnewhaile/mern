//Diagonal Difference
//Given a squared matrix (2D array) of integers, calculate the absolute difference between the sum of the diagonals (top left to bottom right and top right to bottom left)
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
//const expected1 = 2;
//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2
const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
//const expected2 = 0; 
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

function diagonalDifference(arr){
    var rDiag = 0;
    var lDiag = 0;
    for (let i = 0; i < arr.length; i++){
        lDiag += arr[i][i];
        rDiag += arr[i][arr.length-1-i]
    }
return Math.abs(rDiag-lDiag);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));



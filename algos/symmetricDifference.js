// Symmetric Difference
// Given two arrays of integers, return an array of all the numbers the arrays do NOT have in common
// The arrays may or may not be in order
// If there are duplicates of values that are in one array and not the other, only include the value once
// Ex: given [1,2] and [2,1,3] return [3]
// Ex: given [1,1] and [1] return []
// Ex: given [1,2,3] and [4,5,6] return [1,2,3,4,5,6]
// Ex: given [4,1,2,3,4] and [1,2,3,5,5] return [4,5]

function symmetricDifference(arr1, arr2){
    var combo = [];
    var answer =[];
    for(let i=0; i<arr1.length; i++){
        combo.push(arr1[i])
    }
    for(let i=0; i<arr2.length; i++){
        combo.push(arr2[i])
    }
    for(let i=0; i<combo.length; i++){
        if(!arr1.includes(combo[i])){
            if(answer.includes(combo[i])){
                continue
            }
            answer.push(combo[i])
        }
        if(!arr2.includes(combo[i])){
            if(answer.includes(combo[i])){
                continue
            }
            answer.push(combo[i])
        }
}
console.log(answer)
}

symmetricDifference([1,2], [2,1,3]);
symmetricDifference([1,1], [1]);
symmetricDifference([1,2,3], [4,5,6]);
symmetricDifference([4,1,2,3,4], [1,2,3,5,5]);
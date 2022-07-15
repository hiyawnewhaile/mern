// Given an array of integers, find all non-consecutive integers. Non-consecutive integers are ones in which the number directly following is not exactly 1 larger than the former number. For example, [3,4] are consecutive because 4 is 1 greater than 3, but [3,2] is non-consecutive because 2 is NOT 1 larger than 3
// Return an array of objects where each object contains the number that was non-consecutive and its index
// ex: given [1,2,3,4,6,7,8,10]
// Return: [
// { idx: 4, num: 6},
// { idx: 7, num: 10}
// ]

function consecutive(arr){
    var ans = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] == arr[i+1] -1){
            continue;
        }
        ans.push({idx: i+1, num:arr[i+1]})
    }
    console.log(ans)
    return ans;
}

// Challenge
// Given a list of integers and a sum, find all the consecutive numbers that add up to that sum and return an array of the results
// Note: consecutive in the prior algorithm meant that the number following was +1 larger than the prior number. Consecutive here is just meant to mean one value after another with no relation to how large or small those numbers are
// ex: given [2,5,3,6,7,23,12] and a sum of 16
// Return [ [2,5,3,6], [3,6,7] ] Notice how if you add the values up they equal 16
// If no results are found, return an empty array

function consecutiveSum(arr, sum){
    const sums = sum
    var add = 0
    var ans = []
    var a = []
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length-i; j++){
            add += arr[j]
            if(add == sums){
                for(var k=i; k<=j; k++){
                    a.push(arr[k])
                }
            }
            if(add > sums){
                break
            }
        }
        ans.push(a)
        a=[]
        console.log(ans)
    }
}

// function consecutiveSums(arr, sum) {
//     let answer = [];

//     for (let i = 0; i < arr.length; i++) {
//         let workingSum = 0;
//         let j = i;
//         let workingArr = [];

//         while (workingSum < sum && j <= arr.length) {
//             workingSum += arr[j];
//             workingArr.push(arr[j]);

//             if (workingSum == sum) {
//                 answer.push(workingArr);
//             }

//             j++;
//         }
//     }

//     return answer;
// }

consecutive([1,2,3,4,6,7,8,10]);
consecutiveSum([2,5,3,6,7,23,12], 16);
// Given two strings, return true if the first string can be built from the letters in the 2nd string

const strA1 = "hello world";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

function buildingBlock(str1, str2){
    let comp = []
    for(let i=0; i<str2.length; i++){
        if(str1.includes(str2[i])){
            comp.push(str2[i])
        }
    }
    console.log(comp)
    if(str1.length > comp.length){
        return false;
    }
    if(str1.includes(comp[comp.length-1])){
        comp.pop()
    } else{
        return false
    }
    return true
};

console.log(buildingBlock(strA4, strB4))
// Given a string, find the length of the longest substring of non-repeating characters
// A substring is an unbroken sequence of letters within a larger string

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
// Explanation: The answer is "wke", with the length of 3

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function longestSubstring(str){
    let length = 0;
    for( let i=0; i<str.length; i++){
        let substring = [];
        for(let k=i; k<str.length; k++){
            if(!substring.includes(str[k])){
                substring.push(str[k]);
            } else {
                break;
            }
        }
        if(substring.length > length){
            length = substring.length;
        }
    }
    console.log(length)
    return length
};

longestSubstring(str1)
longestSubstring(str2)
longestSubstring(str3)
longestSubstring(str4)
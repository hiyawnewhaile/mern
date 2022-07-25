// Can string become a palindrome
// Given a string, return true or false whether the letters provided could become a palindrome (they do not already have to be one, they just need the potential to become one)
// Think carefully here about what the rules are for something being a palindrome and see if you can use those rules to create an efficient method!

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

function isPalindrome (str){
    if (str.length == 0) return false;
    if (str.length == 1) return true;
    let ob = {};
    // even number length (no middle letter) need to have even number of each letter found
    if (str.length % 2 == 0){
        for (let i=0; i< str.length; i++){
            !ob[str[i]] ? ob[str[i]] = 1 : ob[str[i]] += 1;
        }
        let arr = Object.values(ob);
        for(let j=0; j< arr.length; j++){
            if (arr[j] % 2 != 0){
                return false;
            } 
        }
        return true;
    }
    else{
        for (let i=0; i< str.length; i++){
            !ob[str[i]] ? ob[str[i]] = 1 : ob[str[i]] += 1;
        }
        let arr = Object.values(ob);
        let counter = 0; 
        for(let j=0; j< arr.length; j++){
            if (arr[j] % 2 != 0){
                counter ++;
            }
        }
        if(counter > 1){
            return false
        }
        return true;
    }
};

console.log(isPalindrome(str1));
// Binary to Decimal
// Given a binary string, return the number it equates to
// Ex: given "1101101" return 109
// Ex: given "100" return 4
// Ex: given "10101" return 21

function binaryToDecimal(binary) {
    let sum = 0;
    let j = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        // i >= 2 if "0b" at the start of the binary string

        if (binary[i] == "1") {
            sum += (2 ** j);
        }

        j++;
    }

    return sum;
}

console.log(binaryToDecimal("1101101"));
console.log(binaryToDecimal("100"));
console.log(binaryToDecimal("10101"));


// There are 10 types of people in this world...those who understand binary and those who don't

// Decimal to Binary
// Given a (whole) number, return the value in binary
function decimalToBinary(dec) {
    let j = 0;

    while ((2 ** j) <= dec) {
        j++;
    }

    j--;

    let answer = "0b";
    let workingDec = dec;

    while (j >= 0) {
        if (workingDec >= (2 ** j)) {
            answer += "1";
            workingDec -= (2 ** j);
        } else {
            answer += "0";
        }

        j--;
    }

    return answer;
}

console.log(decimalToBinary(109));
console.log(decimalToBinary(4));
console.log(decimalToBinary(21));

  // Ex: given 109 return "1101101"
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"

  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work
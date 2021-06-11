let string = "supercalifragilisticexpialidocious";
let palindromes = [];

function palindromeFinder(input) {
  for (let i = 0; i <= input.length; i += 1) {
    for (let j = i + 1; j <= input.length; j += 1 ) {
      let newString = input.slice(i, j + 1);
      let reverseString = newString.split("").reverse().join("");
      if (newString.length > 1) {
        if (newString === reverseString) {
          palindromes.push(newString);
        }
      }
    }
  }
}

palindromeFinder(string);

console.log(palindromes);
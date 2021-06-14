let statement = "The Flintstones Rock";
let chars = statement.split('').filter(char => char !== ' ');
result = {};

// chars.forEach(char => {
// 	result[char] = result[char] || 0;
// 	result[char] += 1;
// });

// console.log(result);

chars.forEach(char => {
	if (Object.keys(result).includes(char)) {
	result[char] += 1;
} else {
	result[char] = 1;
}
});

console.log(result);
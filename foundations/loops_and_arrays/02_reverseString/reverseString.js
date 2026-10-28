const reverseString = function(text) {
	// since split returns an array, this can be done in one line: text.split("").reverse.join("");
	let characters = text.split("");
	return characters.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

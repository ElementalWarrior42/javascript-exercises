//did not have to put the exact variable name as the README said, should put something more descriptive instead like 'word' and 'times'

const repeatString = function(string, num) {
	let output = "";
	if (num < 0) {
		output = "ERROR";
	}
	else {
		for (i = 0; i < num; i++) {
			output += string;
		}
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;

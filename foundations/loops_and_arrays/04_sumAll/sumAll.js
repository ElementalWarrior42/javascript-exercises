const sumAll = function(a, b) {
	let start = 0;
	let end = 0;
	// could be a bit more concise in this portion by using a temp value to switch a and b instead of assinging new start and end values
	if (a < b) {
		start = a;
		end = b;
	}
	else {
		start = b;
		end = a;
	}

	// could separate these into different if statements with different returns so that it could be customized if needed
	if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
		let sum = 0;
		for (i = start; i <= end; i++) {
			sum += i;
		}
		return sum;
	}
	else {
		return "ERROR";
	}
};

// Do not edit below this line
module.exports = sumAll;

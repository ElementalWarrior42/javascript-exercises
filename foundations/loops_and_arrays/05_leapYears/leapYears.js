const leapYears = function(year) {

	// should make the checks be outputted to variables first to make it more readable.

	if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		return true;
	}
	else {
		return false;
	}
};

// Do not edit below this line
module.exports = leapYears;

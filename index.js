'use strict';

var validate = function (value, type) {
	if (value < 0 || typeof value !== "number" || typeof type !== "boolean") {
		return false
	} else {
		return true
	}
}

var formatTime = function() {};

formatTime.prototype.minutes = function(value, type) {
	if(validate(value,type)) {
		if (value < 60 || type === true) {
			return value+" min ";
		} else {
			var minutes = value%60,
				hours = formatTime.prototype.hours(Math.floor(value/60), 'complete');
			return hours+minutes+" min ";
		}
	}
};

formatTime.prototype.seconds = function(value, type) {
	if(validate(value,type)) {
		if (value < 60 || type === true) {
			return value+" sec ";
		} else {
			var seconds = value%60,
				minutes = formatTime.prototype.minutes(Math.floor(value/60), 'complete');
			return minutes+seconds+" sec ";
		}
	}
};

formatTime.prototype.hours = function(value, type) {
	if(validate(value,type)) {
		if (value < 24 || type === true) {
			return value+" hr ";
		} else {
			var hours = value%24,
				days = formatTime.prototype.days(Math.floor(value/24), 'complete');
			return days+hours+" hr ";
		}
	}	
};

formatTime.prototype.days = function(value, type) {
	return value+" day ";
};

module.exports = new formatTime();
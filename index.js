'use strict';

var validate = function (value, type) {
	if (value < 0 || typeof value !== "number" || typeof type !== "boolean") {
		return false
	} else {
		return true
	}
}

var formatDays = function(value, type) {
	if(validate(value,type))
		return value+" d ";
};

var formatTime = function() {};

formatTime.prototype.minutes = function(value, type) {
	if(validate(value,type)) {
		if (value < 60 || type === false) {
			return value+" min ";
		} else {
			var minutes = value%60,
				hours = formatTime.prototype.hours(Math.floor(value/60), true);
			return hours+minutes+" min ";
		}
	}
};

formatTime.prototype.seconds = function(value, type) {
	if(validate(value,type)) {
		if (value < 60 || type === false) {
			return value+" sec ";
		} else {
			var seconds = value%60,
				minutes = formatTime.prototype.minutes(Math.floor(value/60), true);
			return minutes+seconds+" sec ";
		}
	}
};

formatTime.prototype.hours = function(value, type) {
	if(validate(value,type)) {
		if (value < 24 || type === false) {
			return value+" hr ";
		} else {
			var hours = value%24,
				days = formatDays(Math.floor(value/24), true);
			return days+hours+" hr ";
		}
	}	
};


module.exports = new formatTime();
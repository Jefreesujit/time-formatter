'use strict';

var formatTime = function(value, format) {
	if (typeof value === 'number' && value >= 0) {
		if(format === 'minutes') {
			if (value < 60 ) {
				return value+" min";
			} else {
				var minutes = value%60,
					hours = value/60;
				return hours+" hr "+minutes+" min";
			}
		}
	}
};

module.exports = formatTime;
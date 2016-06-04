# time-formatter

A simple code to format decimal numbers with time extensions. 

## Installation

  `npm install time-formatter`

## Usage

    var timeFormatter = require('time-formatter');

    var formattedMin = timeFormatter.minutes(3566, false);
  
  // Output should be `3566 min`

    var formattedMin = timeFormatter.minutes(356, true);
  
  // Output should be `2 d 11 hr 26 min`

  Parameters :

	timeFormatter.function(val1, val2)

	val1 : integer | required
	val2 : boolean | optional 

  available Functions :

  	1) timeFormatter.minutes(val1, val2)
  	2) timeFormatter.seconds(val1, val2)
  	3) timeFormatter.hours(val1, val2)
  	

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

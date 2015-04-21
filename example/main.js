/* use browserify to build your main 

	 first install browserify
    npm install -g browserify

	 then run
	  browserify main.js -o bundle.js
*/

var swipr = require('swipr');

document.addEventListener('DOMContentLoaded', function () {
    var simple = document.querySelector('.swipr_example');
    swipr(simple);
});
var fs = require('fs');
var path = require('path');
var f = function() {
	this.load = function(dirName) {
		var output = {};
		var dir = path.join(path.dirname(require.main.filename), dirName ? dirName : 'require');
		var list = fs.readdirSync(dir).forEach(function(file) {
			var a = file.split('.');
			if (a[1] === 'json' || a[1] === 'js') {
				output[a[0]] = require(dir + '/' + file);
			}
		});

		return output;
	};
};

module.exports = new f();
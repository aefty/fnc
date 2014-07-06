var fs = require('fs');
var f = function () {
	this.load = function (dirName) {
		var list = fs.readdirSync(dirName ? dirName : ('../../require/'));
		for (var i in list) {
			if (list[i] === __filename) break;
			this[list[i].split('.')[0]] = require('./' + list[i]);
		}
		return this;
	};
};

module.exports = new f();
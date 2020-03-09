const fs = require('fs');

const jsonUrl = './comments.json';

module.exports = {
	readJson: function() {
		return JSON.parse(fs.readFileSync(jsonUrl));
	},

	writeJson: function(data) {
		fs.writeFileSync(jsonUrl, data);
	},

	saveJson: function(comment) {
		let data = this.readJson().data;
		data.push(comment);
		this.writeJson(JSON.stringify({data: data}));
	},

	generateId: function() {
		json = this.readJson();
		return '_' + Math.random().toString(36).substr(2, 9);
	}
}

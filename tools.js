const fs = require('fs')

module.exports = {
	loadJson: function (jsonUrl) {
		return JSON.parse(fs.readFileSync(jsonUrl))
	}
}

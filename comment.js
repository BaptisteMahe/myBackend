const tools =  require('./tools');

class Comment {

	constructor(commentProperties) {
		this.id = commentProperties.id ? commentProperties.id : tools.generateId();
		this.label = commentProperties.label;
		this.content = commentProperties.content;
		this.authorName = commentProperties.authorName;
		this.date = commentProperties.date;
		this.isEmailPublic = commentProperties.isEmailPublic;

		this.email = commentProperties.email ? commentProperties.email : null;
	}

	isValid() {
		return true;
	}

	saveInJson() {
		tools.saveJson({
			id: this.id,
			label: this.label,
			content: this.content,
			authorName: this.authorName,
			date: this.date,
			isEmailPublic: this.isEmailPublic,
			email: this.email
		});
	}

	formatForFrontend() {
		return {
			label : this.label,
			content: this.content,
			authorName: this.authorName,
			date: this.date,
			isEmailPublic: this.isEmailPublic,
			email: this.email
		};
	}
}

module.exports = {
	Comment
}


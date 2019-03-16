this.HomePrivateInstructionsIncompleteInsertController = RouteController.extend({
	template: "HomePrivate",
	

	yieldTemplates: {
		'HomePrivateInstructionsIncompleteInsert': { to: 'HomePrivateSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("HomePrivate"); this.render("loading", { to: "HomePrivateSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {


		

		var subs = [
			Meteor.subscribe("lawyers"),
			Meteor.subscribe("instructions_empty")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		var data = {
			params: this.params || {},
			lawyers: Lawyers.find({}, {sort:{name:1}}),
			instructions_empty: Instructions.findOne({_id:null}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});
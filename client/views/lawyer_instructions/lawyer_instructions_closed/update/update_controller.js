this.LawyerInstructionsLawyerInstructionsClosedUpdateController = RouteController.extend({
	template: "LawyerInstructions",
	

	yieldTemplates: {
		'LawyerInstructionsLawyerInstructionsClosedUpdate': { to: 'LawyerInstructionsSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("LawyerInstructions"); this.render("loading", { to: "LawyerInstructionsSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {


		

		var subs = [
			Meteor.subscribe("lawyers"),
			Meteor.subscribe("lawyer_instructions_closed", this.params.lawyerInstructionsClosedId)
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
			lawyer_instructions_closed: Instructions.findOne({_id:this.params.lawyerInstructionsClosedId}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});
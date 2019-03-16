this.ValuerInstructionsValuerInstructionsPendingInsertController = RouteController.extend({
	template: "ValuerInstructions",
	

	yieldTemplates: {
		'ValuerInstructionsValuerInstructionsPendingInsert': { to: 'ValuerInstructionsSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("ValuerInstructions"); this.render("loading", { to: "ValuerInstructionsSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {


		

		var subs = [
			Meteor.subscribe("valuers"),
			Meteor.subscribe("valuer_instructions_pending_null")
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
			valuers: Valuers.find({}, {sort:{name:1}}),
			valuer_instructions_pending_null: ValuerInstructions.findOne({_id:null}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});
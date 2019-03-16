this.DeferralsPendingDeferralsInsertController = RouteController.extend({
	template: "Deferrals",
	

	yieldTemplates: {
		'DeferralsPendingDeferralsInsert': { to: 'DeferralsSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("Deferrals"); this.render("loading", { to: "DeferralsSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {


		

		var subs = [
			Meteor.subscribe("deferrals_empty")
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
			deferrals_empty: Deferrals.findOne({_id:null}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});
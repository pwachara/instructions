this.LogoutController = RouteController.extend({
	template: "Logout",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		App.logout();
		/*ACTION_FUNCTION*/
	},

	isReady: function() {


		

		var subs = [
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
			params: this.params || {}
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});
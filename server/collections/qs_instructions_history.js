QsInstructionsHistory.allow({
	insert: function (userId, doc) {
		return false;
	},

	update: function (userId, doc, fields, modifier) {
		return false;
	},

	remove: function (userId, doc) {
		return false;
	}
});

QsInstructionsHistory.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

QsInstructionsHistory.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

QsInstructionsHistory.before.upsert(function(userId, selector, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	/*BEFORE_UPSERT_CODE*/
});

QsInstructionsHistory.before.remove(function(userId, doc) {
	
});

QsInstructionsHistory.after.insert(function(userId, doc) {
	
});

QsInstructionsHistory.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

QsInstructionsHistory.after.remove(function(userId, doc) {
	
});

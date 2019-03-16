var pageSession = new ReactiveDict();

Template.AuditConfirmationsAuditConfirmationsPendingInsert.onCreated(function() {
	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsert.onDestroyed(function() {
	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsert.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.AuditConfirmationsAuditConfirmationsPendingInsert.events({
	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsert.helpers({
	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsertInsertForm.onCreated(function() {
	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsertInsertForm.onDestroyed(function() {
	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsertInsertForm.onRendered(function() {
	

	pageSession.set("auditConfirmationsAuditConfirmationsPendingInsertInsertFormInfoMessage", "");
	pageSession.set("auditConfirmationsAuditConfirmationsPendingInsertInsertFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
});

Template.AuditConfirmationsAuditConfirmationsPendingInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("auditConfirmationsAuditConfirmationsPendingInsertInsertFormInfoMessage", "");
		pageSession.set("auditConfirmationsAuditConfirmationsPendingInsertInsertFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var auditConfirmationsAuditConfirmationsPendingInsertInsertFormMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(auditConfirmationsAuditConfirmationsPendingInsertInsertFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("auditConfirmationsAuditConfirmationsPendingInsertInsertFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("audit_confirmations.audit_confirmations_pending", mergeObjects(Router.currentRouteParams(), {}));
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("auditConfirmationsAuditConfirmationsPendingInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("auditConfirmationsInsert", values, function(e, r) { if(e) errorAction(e); else submitAction(r); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("audit_confirmations.audit_confirmations_pending", mergeObjects(Router.currentRouteParams(), {}));
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.AuditConfirmationsAuditConfirmationsPendingInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("auditConfirmationsAuditConfirmationsPendingInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("auditConfirmationsAuditConfirmationsPendingInsertInsertFormErrorMessage");
	}
	
});

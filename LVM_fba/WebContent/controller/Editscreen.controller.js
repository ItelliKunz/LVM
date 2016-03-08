sap.ui.define([
	"uni-ulm/lvm/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("uni-ulm.lvm.controller.Editscreen", {

		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("editscreen").attachMatched(this._onRouteMatched, this);

			// Hint: we don't want to do it this way
			/*
			oRouter.attachRouteMatched(function (oEvent){
				var sRouteName, oArgs, oView;

				sRouteName = oEvent.getParameter("name");
				if (sRouteName === "employee"){
					this._onRouteMatched(oEvent);
				}
			}, this);
			*/

		},

		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			this.getView().getModel().attachRejectChange(this,function(oEvent){
			 	alert("You are already editing another Entry! Please submit or reject your pending changes!");
			});
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path : "/EditEventsSet(" + "'" + oArgs.Objid + "'" + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},

		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		
		handleSaveData: function(){
			var oModel = this.getView().getModel();
			oModel.setRefreshAfterChange(false);
			oModel.submitChanges(function(){
 				alert("Update successful");
			},function(){
					alert("Update failed");})
		},
		
		handleResetChanges: function(){
			this.getView().getModel().resetChanges();
		},

	});

});

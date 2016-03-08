sap.ui.define([
	"uni-ulm/lvm/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("uni-ulm.lvm.controller.EmployeeList", {

		onListItemPressed : function(oEvent){
			var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();

			this.getRouter().navTo("employee",{
				employeeId : oCtx.getProperty("EmployeeID")
			});

		}
	});

});

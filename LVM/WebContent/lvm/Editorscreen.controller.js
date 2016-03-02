sap.ui.controller("editorscreen.Editorscreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf editorscreen.Editorscreen
*/
	onInit: function() {
		 
		// set explored app's demo model on this sample
//		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/supplier.json"));
//		this.getView().setModel(oModel);
//
//		this.getView().bindElement("/SupplierCollection/0");
//
//		// Set the initial form to be the display one
//		this._showFormFragment("Display");
	},
	
	/**
	 * Wird beim Klicken des Buttons "Speichern" ausgeführt.
	 */
	handleSaveData: function() {
		alert("Gesichert!");
	},
	
	/**
	 * Wird beim Klicken des Buttons "Verwerfen" aufgerufen und soll alle Felder der Eingabemaske leeren.
	 */
	handleClearFields: function() {
		alert("Alles sauber!");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf editorscreen.Editorscreen
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf editorscreen.Editorscreen
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf editorscreen.Editorscreen
*/
	onExit: function() {
		for(var sPropertyName in this._formFragments) {
			if(!this._formFragments.hasOwnProperty(sPropertyName)) {
				return;
			}

			this._formFragments[sPropertyName].destroy();
			this._formFragments[sPropertyName] = null;
		}
	},
	
//	handleEditPress : function () {
//		 
//		//Clone the data
//		this._oSupplier = jQuery.extend({}, this.getView().getModel().getData().SupplierCollection[0]);
//		this._toggleButtonsAndView(true);
//
//	},
//	handleCancelPress : function () {
//		 
//		//Restore the data
//		var oModel = this.getView().getModel();
//		var oData = oModel.getData();
//
//		oData.SupplierCollection[0] = this._oSupplier;
//
//		oModel.setData(oData);
//		this._toggleButtonsAndView(false);
//
//	},
//
//	handleSavePress : function () {
//
//		this._toggleButtonsAndView(false);
//
//	},
//
//	_formFragments: {},
//
//	_toggleButtonsAndView : function (bEdit) {
//		var oView = this.getView();
//
//		// Show the appropriate action buttons
//		oView.byId("edit").setVisible(!bEdit);
//		oView.byId("save").setVisible(bEdit);
//		oView.byId("cancel").setVisible(bEdit);
//
//		// Set the right form type
//		this._showFormFragment(bEdit ? "Change" : "Display");
//	},
//
//	_getFormFragment: function (sFragmentName) {
//		var oFormFragment = this._formFragments[sFragmentName];
//
//		if (oFormFragment) {
//			return oFormFragment;
//		}
//
//		oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "sap.ui.layout.sample.SimpleForm354." + sFragmentName);
//
//		return this._formFragments[sFragmentName] = oFormFragment;
//	},
//
//	_showFormFragment : function (sFragmentName) {
//		var oPage = this.getView().byId("page");
//
//		oPage.removeAllContent();
//		oPage.insertContent(this._getFormFragment(sFragmentName));
//	}
//
//
//	

});
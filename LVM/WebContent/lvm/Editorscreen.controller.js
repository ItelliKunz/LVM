sap.ui.controller("lvm.Editorscreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf editorscreen.Editorscreen
*/
	onInit: function() {
		 
//		var oRouter = this.getRouter();
//		oRouter.getRoute("Page2").attachMatched(this._onRouteMatched, this);
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
	 * Wird beim Klicken des Buttons "Speichern" ausgefï¿½hrt.
	 */
	handleSaveData: function() {
		if (!this._dialog) {
			this._dialog = sap.ui.xmlfragment("lvm.BusyDialog", this);
			this.getView().addDependent(this._dialog);
		}

		// open dialog
		jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
		this._dialog.open();

		// simulate end of operation
		_timeout = jQuery.sap.delayedCall(3000, this, function () {
			this._dialog.close();
			alert("Test");
		});
// ToDO: erst Danach speichern -> sonst abbruch.
	},
	
	/**
	 * Wird beim Klicken des Buttons "Verwerfen" aufgerufen und soll alle Felder der Eingabemaske leeren.
	 */
	handleClearFields: function() {
		alert("Alles sauber!");
	},

	
	onForward: function () {
		var app = sap.ui.getCore().byId("AppLVM");
        app.to("pageRoomSearch" );
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
	
	onBack: function(){
//		this.getOwnerComponent().getTargets().display("FirstView");
		var app = sap.ui.getCore().byId("AppLVM");
        app.back("page1");
	},
	


});
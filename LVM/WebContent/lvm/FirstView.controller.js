sap.ui.controller("lvm.FirstView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf lvm.FirstView
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData({
            data : [
                { 
                    name  : "node1", 
                    planVariante: "01",
                    objectType : "SM",
                    objectID : "50000121",
                    beginDate : "20160101",
                    endDate : "20160701",
                    iState : "1",
                    histo : "",
                    shortName : "M400000",
                    description : "Prakitkum der Physik",
                    realo: "50000121",
                    akademischesJahr: "2016",
                    akademischePeriode: "SoSe2016",
                    
                },
                
                { 
                    name  : "node1.1", 
                    planVariante: "01",
                    objectType : "SM",
                    objectID : "50000121",
                    beginDate : "20160101",
                    endDate : "20160701",
                    iState : "1",
                    histo : "",
                    shortName : "M400000",
                    description : "Prakitkum der Physik",
                    realo: "50000121",
                    akademischesJahr: "2016",
                    akademischePeriode: "SoSe2016",
                    
                },
                
                { 
                    name  : "node1.1.1", 
                    planVariante: "01",
                    objectType : "SM",
                    objectID : "50000121",
                    beginDate : "2016.01.01",
                    endDate : "01.07.2016",
                    iState : "1",
                    histo : "",
                    shortName : "M400000",
                    description : "Prakitkum der Physik",
                    realo: "50000121",
                    akademischesJahr: "2016",
                    akademischePeriode: "SoSe2016",
                    
                },
                
                { 
                    name  : "node1.2", 
                    planVariante: "01",
                    objectType : "SM",
                    objectID : "50000121",
                    beginDate : "20160101",
                    endDate : "20160701",
                    iState : "1",
                    histo : "",
                    shortName : "M400000",
                    description : "Prakitkum der Physik",
                    realo: "50000121",
                    akademischesJahr: "2015",
                    akademischePeriode: "SoSe2015",
                    
                }
            ]
        });
        this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf lvm.FirstView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf lvm.FirstView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf lvm.FirstView
*/
//	onExit: function() {
//
//	}

	onAfterRendering : function() {
        this._doExpandAll();
    },

    addNode : function(oEvent) {
        var oContext = oEvent.getSource().getBindingContext();
        var obj      = oContext.getObject();

        var oNew = { name : "New node", description : "New description"};

        if (!obj.data) obj.data = []; //if no child array, create empty one

        obj.data.push(oNew);

        this.getView().getModel().setProperty(oContext.getPath(), obj);

        this._doExpandAll();
    },
    
    /**
     * Absprung aus Tabelle in den Editorscreen
     */
    onJumpToEditorScreen: function() {
    	
//    	 this.getView().byId("Editor123");  
//    	this.getApp().byID("idEditorScreen1");
//    	this._showObject(oEvent.getSource());
    	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("Editorscreen");
    },
    
	onPress: function(oEvent) {
		// The source is the list item that got pressed
		this._showObject(oEvent.getSource());
	},
	
	/**
	 * Shows the selected item on the object page
	 * On phones a additional history entry is created
	 * @param {sap.m.ObjectListItem} oItem selected Item
	 * @private
	 */
	_showObject: function(oItem) {
		this.getRouter().navTo("object", {
			objectId: oItem.getBindingContext().getProperty("ProductID")
		});
	},
    
    
	/**
	 * Convenience method for accessing the router.
	 * @public
	 * @returns {sap.ui.core.routing.Router} the router for this component
	 */
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
	},

    
    
    
    
    
    
    
    

    _doExpandAll : function() {
        var oTTbl = this.getView().byId("tbl");
        for (var i=0; i<oTTbl.getRows().length; i++) {
            oTTbl.expand(i);
        }
    },
    
    startSearch: function() {
    	
    	alert("Suche starten");
    	
    },
    
//    onOpenDialog: function (oEvent) {
//		// instantiate dialog
//		if (!this._dialog) {
//			this._dialog = sap.ui.xmlfragment("sap.m.sample.BusyDialog.BusyDialog", this);
//			this.getView().addDependent(this._dialog);
//		}
//
//		// open dialog
//		jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
//		this._dialog.open();
//
//		// simulate end of operation
//		_timeout = jQuery.sap.delayedCall(3000, this, function () {
//			this._dialog.close();
//		});
//	}
	
	
});
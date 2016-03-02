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
                    description : "Lorem ipsum dolor sit amet",
                    data : [
                        { 
                            name : "node1.1", 
                            description : "Cras pretium nisl ac ex congue posuere"
                        },
                        { 
                            name : "node1.2", 
                            description : "Consectetur adipiscing elit",
                            data: [
                                { 
                                    name : "node1.2.1",
                                    description : "Maecenas accumsan ipsum diam"
                                }
                           ]
                        },
                        { 
                            name : "node1.3", 
                            description : "Sed tristique diam non imperdiet commodo"
                        },
                        { 
                            name : "node1.4", 
                            description : "Consectetur adipiscing elit",
                            data: [
                                { 
                                    name : "node1.4.1",
                                    description : "Maecenas accumsan ipsum diam",
                                    data: [
                                        { 
                                            name : "node1.4.1.1",
                                            description : "Maecenas accumsan ipsum diam",
                                            data: [
                                                { 
                                                    name : "node1.4.1.1.1",
                                                    description : "Maecenas accumsan ipsum diam",
                                                    data: [
                                                        { 
                                                            name : "node1.4.1.1.1.1",
                                                            description : "Maecenas accumsan ipsum diam"
                                                        }
                                                   ]
                                                }
                                           ]
                                        }
                                   ]
                                }
                           ]
                        },
                        { 
                            name : "node1.5", 
                            description : "Sed tristique diam non imperdiet commodo"
                        },
                        { 
                            name : "node1.6", 
                            description : "Consectetur adipiscing elit",
                            data: [
                                { 
                                    name : "node1.6.1",
                                    description : "Maecenas accumsan ipsum diam"
                                }
                           ]
                        },
                        { 
                            name : "node1.7", 
                            description : "Sed tristique diam non imperdiet commodo"
                        },

                    ]
                },
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

    _doExpandAll : function() {
        var oTTbl = this.getView().byId("tbl");
        for (var i=0; i<oTTbl.getRows().length; i++) {
            oTTbl.expand(i);
        }
    },
    
    startSearch: function() {
    	
    	alert("Test");
    	
    }
	
	
});
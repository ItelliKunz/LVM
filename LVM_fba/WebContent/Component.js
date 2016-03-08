sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent,  ResourceModel) {
	"use strict";

	return UIComponent.extend("uni-ulm.lvm.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

//			Automatic model instantiation is only available as of SAPUI5 version 1.30. If you are 
//			using an older version, you can manually instantiate the resource bundle and other models 
//			of the app in the init method of the Component.js file as we did in	
						
	         // set data model
		    var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ylvm_test2_srv/");
		    oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
		    var oTreeModel = new sap.ui.model.json.JSONModel();
	        
		    this.setModel(oModel);
		    this.setModel(oTreeModel, "tree");
	         // set i18n model
	         var i18nModel = new ResourceModel({
	            bundleName : "uni-ulm.lvm.i18n.i18n"
	         });
	         this.setModel(i18nModel, "i18n");
			
			
//		    var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ylvm_test2_srv/");
//		    var oTreeModel = new sap.ui.model.json.JSONModel();
//		    sap.ui.getCore().setModel(oModel);
//		    sap.ui.getCore().setModel(oTreeModel, "tree");
		    
		    
			
			// create the views based on the url/hash
			this.getRouter().initialize();
		}

	});

});

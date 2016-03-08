sap.ui.define([
	"uni-ulm/lvm/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("uni-ulm.lvm.controller.Home", {

		onDisplayNotFound : function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onNavToEmployees : function (oEvent){
			this.getRouter().navTo("employeeList");
		},
		
		setVisibilty: function(value){
			
			if (value === 'E'){
				return true;	
			} else{
				return false;
		    }			
		},
		
	    onJumpToEditorScreen: function(oEvent) {
//	        this.getRouter().navTo("editscreen");
			var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("tree");

			this.getRouter().navTo("editscreen",{
				Objid : oCtx.getProperty("Objid")
			});
			
//			this.getRouter().navTo("editsreen",{
//				employeeId : oCtx.getProperty("Objid")
//			});

//	        var app   = sap.ui.getCore().byId("AppLVM");
//	        var oContext = oEvent.getSource().getBindingContext("tree");
//	        var obj      = oContext.getObject();
//	        app.to("pageEditor", obj );
	      },
		
		  onAfterRendering : function() {
//	        this._doExpandAll();
	    },
	    
	    startSearch: function(oEvent) {
	    	
	        var Perid  = this.getView().byId("Perid").getValue();
	        var Peryr =  this.getView().byId("Peryr").getValue();
	        if(this.getView().byId("Perid").getValue() === '' || this.getView().byId("Peryr").getValue() === '') {
	            alert("Bitte Periode und Jahr angeben.");
	        } else {
	        	
//	          var oModel	 = sap.ui.getCore().getModel();
//	          var oTreeModel = sap.ui.getCore().getModel("tree");
//	          this.getView().setModel(oTreeModel, "tree" );
	          var oModel = this.getView().getModel();
	          var oTreeModel = this.getView().getModel("tree");
	          var str = "/EventsSet(Perid='" + Perid + "',Peryr='" + Peryr + "')" ; // 50000121 
//	          oModel.read( str ,null, null, true,   
	          oModel.read( "/EventsSet" ,null, ["$filter=Perid eq '" + Perid + "' and Peryr eq '" + Peryr + "'" ], true,   
	            function(oData, oResponse){

	            // Beginn der Änderung auf flache Hierarchie 4.3.2016

	              // flatten to object with string keys that can be easily referenced later
	              var flat = {};
	              for (var i = 0; i < oData.results.length; i++) {
	                var key = 'id' + oData.results[i].Objid;
	                flat[key] = oData.results[i];
	                flat[key].__metadata = "";
	              }

	              // add child container array to each node
	              for (var i in flat) {
	                flat[i].children = []; // add children container
	              }

	              // populate the child container arrays
	              for (var i in flat) {
	                var parentkey = 'id' + flat[i].Parentid;
	                if (flat[parentkey]) {
	                  flat[parentkey].children.push(flat[i]);
	                }
	              }

	              // find the root nodes (no parent found) and create the hierarchy tree from them
	              var root = [];
	              for (var i in flat) {
	                var parentkey = 'id' + flat[i].Parentid;
	                if (!flat[parentkey]) {
	                    root.push(flat[i]);
	                }
	              } 

	              // to access the JSON via "/root" in bindRows(), could this be a problem?? 
	              var data = {
	                      root  :  root,  
	              };

	              console.log(data);

	              oTreeModel.setData(data);

	              
//	              oTreeTable.setModel(oTreeModel);
//	              oTreeTable.bindRows({
//	                  path : '/root',
//	              });

	              
	            // Ende der Änderung auf flache Hierarchie 4.3.2016
//	              var oJSON = new sap.ui.model.json.JSONModel();
//	              oJSON.setData(oData);
//	              this.getView().setModel(oJSON);


//	              alert("Read successful: " + JSON.stringify(oData));
	              alert("Read successful: ");
	            },function(){
	              alert("Read failed");}

	          );

	          
	        }
	    	
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

	});

});

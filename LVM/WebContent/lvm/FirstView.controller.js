sap.ui.controller("lvm.FirstView",
		{

			/**
			 * Called when a controller is instantiated and its View controls
			 * (if available) are already created. Can be used to modify the
			 * View before it is displayed, to bind event handlers and do other
			 * one-time initialization.
			 * 
			 * @memberOf lvm.FirstView
			 */
			onInit : function() {
				// var oModel = new
				// sap.ui.model.odata.ODataModel("http://sapd04.verwaltung.uni-ulm.de:8000/sap/opu/odata/sap/ylvm_test_srv/SucheSet(Perid='12',Peryr='12')?$expand=toLevel0/toLevel1/toLevel2",
				// "ITL_KUNZ", "fender89");
				// var oModel = new
				// sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ylvm_test_srv/SucheSet(Perid='12',Peryr='12')?$expand=toLevel0/toLevel1/toLevel2",
				// "ITL_KUNZ", "fender89");
				var oModel = new sap.ui.model.odata.ODataModel(
						"/sap/opu/odata/sap/ylvm_test2_srv/");
				var oTreeModel = new sap.ui.model.json.JSONModel();
				// var oModelJSON = new sap.ui.model.json.JSONModel();
				// oModel.setData({
				// data : [
				// {
				// name : "node1",
				// planVariante: "01",
				// objectType : "SM",
				// objectID : "50000121",
				// beginDate : "20160101",
				// endDate : "20160701",
				// iState : "1",
				// histo : "",
				// shortName : "M400000",
				// description : "Prakitkum der Physik",
				// realo: "50000121",
				// akademischesJahr: "2016",
				// akademischePeriode: "SoSe2016",
				//                    
				// },
				//                
				// {
				// name : "node1.1",
				// planVariante: "01",
				// objectType : "SM",
				// objectID : "50000121",
				// beginDate : "20160101",
				// endDate : "20160701",
				// iState : "1",
				// histo : "",
				// shortName : "M400000",
				// description : "Prakitkum der Physik",
				// realo: "50000121",
				// akademischesJahr: "2016",
				// akademischePeriode: "SoSe2016",
				//                    
				// },
				//                
				// {
				// name : "node1.1.1",
				// planVariante: "01",
				// objectType : "SM",
				// objectID : "50000121",
				// beginDate : "2016.01.01",
				// endDate : "01.07.2016",
				// iState : "1",
				// histo : "",
				// shortName : "M400000",
				// description : "Prakitkum der Physik",
				// realo: "50000121",
				// akademischesJahr: "2016",
				// akademischePeriode: "SoSe2016",
				//                    
				// },
				//                
				// {
				// name : "node1.2",
				// planVariante: "01",
				// objectType : "SM",
				// objectID : "50000121",
				// beginDate : "20160101",
				// endDate : "20160701",
				// iState : "1",
				// histo : "",
				// shortName : "M400000",
				// description : "Praktikum der Physik",
				// realo: "50000121",
				// akademischesJahr: "2015",
				// akademischePeriode: "SoSe2015",
				//                    
				// }
				// ]
				// });
				// sap.ui.getCore().setModel(oModel);
				// this.getView().setModel(oModelJSON);
				this.getView().setModel(oModel);
				this.getView().setModel(oTreeModel, "tree");

			},

			/**
			 * Similar to onAfterRendering, but this hook is invoked before the
			 * controller's View is re-rendered (NOT before the first rendering!
			 * onInit() is used for that one!).
			 * 
			 * @memberOf lvm.FirstView
			 */
			onBeforeRendering : function() {
				
			},

			/**
			 * Called when the View has been rendered (so its HTML is part of
			 * the document). Post-rendering manipulations of the HTML could be
			 * done here. This hook is the same one that SAPUI5 controls get
			 * after being rendered.
			 * 
			 * @memberOf lvm.FirstView
			 */
			// onAfterRendering: function() {
			//
			// },
			/**
			 * Called when the Controller is destroyed. Use this one to free
			 * resources and finalize activities.
			 * 
			 * @memberOf lvm.FirstView
			 */
			// onExit: function() {
			//
			// }
			onAfterRendering : function() {
				// this._doExpandAll();
			},

			addNode : function(oEvent) {
				var oContext = oEvent.getSource().getBindingContext();
				var obj = oContext.getObject();

				var oNew = {
					name : "New node",
					description : "New description"
				};

				if (!obj.data)
					obj.data = []; // if no child array, create empty one

				obj.data.push(oNew);

				this.getView().getModel().setProperty(oContext.getPath(), obj);

				this._doExpandAll();
			},

			/**
			 * Absprung aus Tabelle in den Editorscreen
			 */
			onJumpToEditorScreen : function(oEvent) {
				var oApp = sap.ui.getCore().byId("AppLVM");
				// var model = this.getView().getModel("tree");
				// var path =
				// oEvent.getSource().getParent().getBindingContextPath();
				// var path =
				// oEvent.getSource().getParent().getBindingContext();
				// var data = model.getProperty(path) ;

				// var oContext = oEvent.getSource().getBindingContext("tree");
				// var obj = oContext.getObject();
				// o_app.to("pageEditor", obj );
				oApp.to("pageEditor");
			},

			onPress : function(oEvent) {
				// The source is the list item that got pressed
//					 var oEditBtn = this.getView().byId("btn2");
//		        if(oEditBtn.getVisible()) {
//		        	oEditBtn.setVisible(false);


			},

			/**
			 * Shows the selected item on the object page On phones a additional
			 * history entry is created
			 * 
			 * @param {sap.m.ObjectListItem}
			 *            oItem selected Item
			 * @private
			 */
			_showObject : function(oItem) {
				this.getRouter().navTo(
						"object",
						{
							objectId : oItem.getBindingContext().getProperty(
									"ProductID")
						});
			},

			/**
			 * Convenience method for accessing the router.
			 * 
			 * @public
			 * @returns {sap.ui.core.routing.Router} the router for this
			 *          component
			 */
			getRouter : function() {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},

			_doExpandAll : function() {
				var oTTbl = this.getView().byId("tbl");
				for (var i = 0; i < oTTbl.getRows().length; i++) {
					oTTbl.expand(i);
				}
			},

			/**	
			 * start Search and build treetable
			 * @param oEvent
			 */
			startSearch : function(oEvent) {
				// Busy Dialog
				if (!this._dialog) {
					this._dialog = sap.ui.xmlfragment("lvm.BusyDialog", this); // this.getByID("BusyDialogPU"
					this.getView().addDependent(this._dialog);
				}

				
				// open dialog
				jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(),
						this._dialog);
				this._dialog.open();

				
				// simulate end of operation
				_timeout = jQuery.sap.delayedCall(1000, this, function() {
					this._dialog.close();
				});
				var iPerid = this.getView().byId("Perid").getValue();
				var iPeryr = this.getView().byId("Peryr").getValue();
				var afilters = new Array(); // Don't normally do this but
				// just for the example.
				// var lo_peridFilter = new sap.ui.model.Filter({
				// path: "Perid",
				// operator: sap.ui.model.FilterOperator.EQ,
				// value1: Perid
				// });
				// var lo_peryrFilter = new sap.ui.model.Filter({
				// path: "Peryr",
				// operator: sap.ui.model.FilterOperator.EQ,
				// value1: Peryr
				// });
				// afilters.push(lo_peridFilter);
				// afilters.push(lo_peryrFilter);
				afilters.push(new sap.ui.model.Filter("Perid",
						sap.ui.model.FilterOperator.EQ, iPerid));
				afilters.push(new sap.ui.model.Filter("Peryr",
						sap.ui.model.FilterOperator.EQ, iPeryr));

				if (this.getView().byId("Perid").getValue() === ''
						|| this.getView().byId("Peryr").getValue() === '') {
					alert("Bitte Periode und Jahr angeben.");
				} else {
					var oModel = this.getView().getModel();
					var oTreeModel = this.getView().getModel("tree");
					var sURI = "/EventsSet(Perid='" + iPerid + "',Peryr='" + iPeryr + "')"; // 50000121
					// oModel.read( sURI ,null, null, true,
					oModel.read("/EventsSet", null, [ "$filter=Perid eq '" + iPerid + "' and Peryr eq '" + iPeryr + "'" ], true,
							function(oData, oResponse) {

								// Beginn der Änderung auf flache Hierarchie
								// 4.3.2016

								// flatten to object with string keys that can
								// be easily referenced later
								var flat = {};
								for (var i = 0; i < oData.results.length; i++) {
									var key = 'id' + oData.results[i].Objid;
									flat[key] = oData.results[i];
									flat[key].__metadata = "";
								}

								// add child container array to each node
								for ( var i in flat ) {
									flat[i].children = []; // add children
									// container
								}

								// populate the child container arrays
								for ( var i in flat ) {
									var parentkey = 'id' + flat[i].Parentid;
									if (flat[parentkey]) {
										flat[parentkey].children.push(flat[i]);
									}
								}

								// find the root nodes (no parent found) and
								// create the hierarchy tree from them
								var aRoot = [];
								for ( var i in flat ) {
									var parentkey = 'id' + flat[i].Parentid;
									var sChildKey = 'id' + flat[i].children
									if (!flat[parentkey]) {
										aRoot.push(flat[i]);
									}
									//no child found -> leaf -> create Button in Column in Order to Jump to EditorScreen.

//									if(flat[i].Otype == "E") {
//										var oColumn =  oTreeModel.byId("ColumnEditEventButton"); // get Column for Buttons from View  
//										var oBtnEditEvent = new sap.ui.m.Button({ // add editor button to column 
//											text 	: "Edit",
//											enabled : "True" ,
//											press 	: "onJumpToEditorScreen"
//										});
//										oBtnEditEvent.placeAt(oColumn);
////										oColumn.add
//									}
									
								}

								// to access the JSON via "/root" in bindRows(),
								var data = {
									root : aRoot,
								};
								
								console.log(data);
								
								oTreeModel.setData(data);

						
							}, function() {
								alert("Read failed");
							}

					);

				}
			},
			
//			filter: function () {
//				
//				
//			}

		});
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ns.devsapodata.controller.List", {
        onInit: function () {
            
        },

        onPress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var oItem = oEvent.getSource();
            var sObjectId = oItem.getBindingContext().getProperty("ProductID");
            oRouter.navTo("detail", {
                objectId: sObjectId
            });
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue");
            var oTable = this.byId("productTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];

            if (sQuery) {
                aFilters.push(new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery));
            }

            oBinding.filter(aFilters);
        }
    });
});

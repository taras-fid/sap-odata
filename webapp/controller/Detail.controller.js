sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("ns.devsapodata.controller.Detail", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sObjectId = oEvent.getParameter("arguments").objectId;
            this.getView().bindElement({
                path: "/Products(" + sObjectId + ")"
            });
        },

        oNavButton_press: function(oEvent) {
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home");
        }
    });
});

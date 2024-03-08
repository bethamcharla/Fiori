sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("com.sap.project1.controller.Home", {
            onInit: function () {

            },
            onSelectionChange: function (oEvent) {
                //oEvent.getParameters().listItem.getBindingContext().getObject().Name
                //oEvent.getParameters().listItem.getBindingContext().getProperty("Name")
                if (oEvent.getParameters().selected == true) {
                    var msg = oEvent.getParameters().listItem.getProperty("title");
                    MessageToast.show(msg);
                }
            }
        });
    });

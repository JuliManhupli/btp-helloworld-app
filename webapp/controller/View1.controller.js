sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onPress: function () {
            MessageBox.alert("You have been alerted!");
        },
        onCalculate: function () {
            var oInput1 = this.byId("inputNumber1");
            var oInput2 = this.byId("inputNumber2");
            var oSelect = this.byId("operationSelect");
            var oResultText = this.byId("resultText");

            var num1 = parseFloat(oInput1.getValue());
            var num2 = parseFloat(oInput2.getValue());
            var operation = oSelect.getSelectedKey();
            var result;

            if (isNaN(num1) || isNaN(num2)) {
                MessageBox.error("Please enter valid numbers.");
                return;
            }

            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 === 0) {
                        MessageBox.error("Cannot divide by zero.");
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    MessageBox.error("Please select an operation.");
                    return;
            }

            oResultText.setText("Result: " + result);
        }
    });
});

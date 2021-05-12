/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForButtons() {

    this.nextSection = function() {
        gui.results.show();
    }

    this.show = function() {

        this.setLanguageStrings();
        document.getElementById('buttons').style.display = "block";
    }

    this.calculate = function() {

        cc.calculate();

        this.nextSection();

        document.getElementById("button_calculate").value = i18n.get("recalculate");
    }

    this.exportData = function() {

        o_data = cc.generateExportData();

        b64_text = window.btoa(o_data.exportText);

        document.getElementById("buttons_link_export").download = "dsb_ospk_" + o_data.name + ".txt";
        document.getElementById("buttons_link_export").href = "data:text/plain;base64," + b64_text;
        document.getElementById("buttons_link_export").type = "text/plain";
        document.getElementById("buttons_link_export").click();
    }

    // no setup() method

    this.setLanguageStrings = function() {

        document.getElementById('button_calculate').value = i18n.get("calculate");

        document.getElementById('button_export').value = i18n.get("exportData");
    }
}

/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForButtons() {

    this.calculate = function() {

        cc.calculate();
    }

    this.exportData = function() {

        cc.exportData()
    }

    this.setup = function() {

        document.getElementById('button_calculate').value = i18n.get("calculate");

        document.getElementById('button_export').value = i18n.get("exportData");
    }
}

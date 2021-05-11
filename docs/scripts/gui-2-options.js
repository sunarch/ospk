/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForOptions() {

    this.show = function() {

        // What we hide
        document.getElementById('branches_import').style.display = "none";

        switch(cc.student.zweig) {

            case "de":
                document.getElementById('branches_hu').style.display = "none";
                break;

            default:
            case "hu":
                document.getElementById('branches_de').style.display = "none";
                break;
        }

        // What we show
        options_setup();

        // enable first question
        document.getElementById("opts_art").disabled = false

        document.getElementById('options').style.display = "block";
    }
}

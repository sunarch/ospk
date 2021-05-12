/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForBranches() {

    this.choose = function(s_branch) {

        cc.student.set_zweig(s_branch);

        this._hideInactive()

        gui.options.show();
    }

    this.importData = function() {

        s_input = window.prompt('Data String:');
        cc.importData(s_input);

        document.getElementById("loaded_name").innerHTML = cc.student.name;
        document.getElementById("loaded").style.display = "block";

        this._hideInactive()

        gui.options.show();
        gui.grades.show();
        gui.exams.show();
        gui.buttons.show();

        cc.applyValuesToInputFields();

        cc.calculate();

        gui.results.show();
    }

    this._hideInactive = function() {

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
    }
}

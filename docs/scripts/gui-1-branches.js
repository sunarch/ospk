/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForBranches() {

    this.choose = function(s_branch) {
        cc.student.set_zweig(s_branch);
        gui.options.show();
    }

    this.importData = function() {
        gui.options.show();
        gui.grades.show();
        
        s_input = window.prompt('Data String:');
        cc.importData(s_input);

        document.getElementById("loaded_name").innerHTML = cc.student.name;
        document.getElementById("loaded").style.display = "block";
        
        gui.results.show();
    }
}

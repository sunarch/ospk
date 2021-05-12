/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForResults() {

    this.show = function() {

        this.setup();

        gui.grades.clearFieldsBackground();

        // mark Bereich B selections in grades
        for (n = 0; n < cc.bereichB.all.length; n = n + 1) {
            gui.grades.setFieldBgSelected(cc.bereichB.all[n].fachname, cc.bereichB.all[n].halbjahrno)
        }

        document.getElementById('results').style.display = "block";
    }

    this.setup = function() {

        document.getElementById('results_main_sum').innerHTML = cc.ergebnis_gesamt;
        document.getElementById('results_main_avg').innerHTML = cc.ergebnis_durchschnitt;

        document.getElementById('results_a_sum').innerHTML = cc.bereichA.ergebnis;
        document.getElementById('results_b_sum').innerHTML = cc.bereichB.ergebnis;
        document.getElementById('results_c_sum').innerHTML = cc.bereichC.ergebnis;

        var dom_tbody_B = document.getElementById('results_b_tbody');

        for(n1 = 1; n1 < cc.bereichB.all.length; n1 = n1 + 1) {

            var dom_tr_B = document.createElement('tr');

            // cell 1 - subject
            var dom_td_B = document.createElement('td');
            var dom_text = document.createTextNode(cc.bereichB.all[n1].fachname);
            dom_td_B.appendChild(dom_text);
            dom_tr_B.appendChild(dom_td_B);

            // cell 2 - semester
            var dom_td_B = document.createElement('td');
            var dom_text = document.createTextNode("  " + cc.bereichB.all[n1].getName() + "  ");
            dom_td_B.appendChild(dom_text);
            dom_tr_B.appendChild(dom_td_B);

            // cell 3 - grade
            var dom_td_B = document.createElement('td');
            var dom_text = document.createTextNode(cc.bereichB.all[n1].note + ' Punkte')
            dom_td_B.appendChild(dom_text);
            dom_tr_B.appendChild(dom_td_B);

            dom_tbody_B.appendChild(dom_tr_B);
        }
    }
    
    // no setLanguageStrings() method
}

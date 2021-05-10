/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function results_setup() {

    document.getElementById('result_sum').innerHTML = cc.ergebnis_gesamt;
    document.getElementById('result_avg').innerHTML = cc.ergebnis_durchschnitt;

    document.getElementById('result_bereichA').innerHTML = cc.bereichA.ergebnis;
    document.getElementById('result_bereichB').innerHTML = cc.bereichB.ergebnis;
    document.getElementById('result_bereichC').innerHTML = cc.bereichC.ergebnis;

    var dom_tbody_B = document.getElementById('result_B_tbody');

    for(n1 = 1; n1 < cc.bereichB.all.length; n1 = n1 + 1) {

        var dom_tr_B = document.createElement('tr');

        // cell 1 - subject
        var dom_td_B = document.createElement('td');
        var dom_text = document.createTextNode(cc.bereichB.all[n1].fachname);
        dom_td_B.appendChild(dom_text);
        dom_tr_B.appendChild(dom_td_B);

        // cell 1 - semester
        var dom_td_B = document.createElement('td');
        var dom_text = document.createTextNode("  " + cc.bereichB.all[n1].getName() + "  ");
        dom_td_B.appendChild(dom_text);
        dom_tr_B.appendChild(dom_td_B);

        // cell 3 - grade
        var dom_td_B = document.createElement('td');
        dom_td_B.setAttribute("class", "right");
        var dom_text = document.createTextNode(cc.bereichB.all[n1].note + ' Punkte')
        dom_td_B.appendChild(dom_text);
        dom_tr_B.appendChild(dom_td_B);

        // append
        dom_tbody_B.appendChild(dom_tr_B);
    }

}

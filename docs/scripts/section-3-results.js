/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function construct_results() {

    var dom_div = document.createElement('div');
        dom_div.setAttribute("class", "section_title");
        dom_div.appendChild(document.createTextNode("Ergebnisse:"));
    document.getElementById('section_ergebnis').appendChild(dom_div);

    var dom_table = document.createElement('table');
        dom_table.setAttribute("id", "section_ergebnis_content");
        dom_table.setAttribute("class", "ergebnisse");
        var dom_tbody = document.createElement('tbody');
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("colspan", "3");
                    dom_td.appendChild(document.createTextNode('Insgesamt:  ' + cc.ergebnis_gesamt + '  von 900 Punkten erreicht.'));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("colspan", "3");
                    dom_td.appendChild(document.createTextNode('Abiturdurchschnitt:  ' + cc.ergebnis_durchschnitt));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // Reihe Bereich-Titeln
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createTextNode('Bereich A'));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createTextNode('Bereich B'));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createTextNode('Bereich C'));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // Reihe Bereichsergebnisse
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createTextNode(cc.bereichA.ergebnis + '  von 270 Punkten erreicht.'));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createTextNode(cc.bereichB.ergebnis + '  von 330 Punkten erreicht.'));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createTextNode(cc.bereichC.ergebnis + '  von 300 Punkten erreicht.'));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // Reihe Details-Titel
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createElement("br"));
                    dom_td.appendChild(document.createTextNode('Details:'));
                    dom_td.appendChild(document.createElement("br"));
                    dom_td.appendChild(document.createElement("br"));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createElement("br"));
                    dom_td.appendChild(document.createTextNode('Details:'));
                    dom_td.appendChild(document.createElement("br"));
                    dom_td.appendChild(document.createElement("br"));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    dom_td.appendChild(document.createElement("br"));
                    dom_td.appendChild(document.createTextNode('Details:'));
                    dom_td.appendChild(document.createElement("br"));
                    dom_td.appendChild(document.createElement("br"));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // Reihe Details
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    var dom_table_A = document.createElement('table');
                        var dom_tbody_A = document.createElement('tbody');
                            var dom_tr_A = document.createElement('tr');
                                var dom_td_A = document.createElement('td');
                                    dom_td_A.appendChild(document.createTextNode(""));
                                dom_tr_A.appendChild(dom_td_A);
                                var dom_td_A = document.createElement('td');
                                    dom_td_A.appendChild(document.createTextNode(""));
                                dom_tr_A.appendChild(dom_td_A);
                            dom_tbody_A.appendChild(dom_tr_A);
                        dom_table_A.appendChild(dom_tbody_A);
                    dom_td.appendChild(dom_table_A);
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    var dom_table_B = document.createElement('table');
                        var dom_tbody_B = document.createElement('tbody');
                            for(n1=1;n1<cc.bereichB.all.length;n1=n1+1) {
                                var dom_tr_B = document.createElement('tr');
                                    var dom_td_B = document.createElement('td');
                                        dom_td_B.appendChild(document.createTextNode(cc.bereichB.all[n1].fachname));
                                    dom_tr_B.appendChild(dom_td_B);
                                    var dom_td_B = document.createElement('td');
                                        switch (cc.bereichB.all[n1].halbjahrno) {
                                            case 1: dom_td_B.appendChild(document.createTextNode("  11.1  ")); break;
                                            case 2: dom_td_B.appendChild(document.createTextNode("  11.2  ")); break;
                                            case 3: dom_td_B.appendChild(document.createTextNode("  12.1  ")); break;
                                            case 4: dom_td_B.appendChild(document.createTextNode("  12.2  ")); break;
                                            default: dom_td_B.appendChild(document.createTextNode("error")); break;
                                        }
                                    dom_tr_B.appendChild(dom_td_B);
                                    var dom_td_B = document.createElement('td');
                                        dom_td_B.appendChild(document.createTextNode(cc.bereichB.all[n1].note + ' Punkte'));
                                    dom_tr_B.appendChild(dom_td_B);
                                dom_tbody_B.appendChild(dom_tr_B);
                            }
                        dom_table_B.appendChild(dom_tbody_B);
                    dom_td.appendChild(dom_table_B);
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.setAttribute("class", "ergebnisse");
                    var dom_table_C = document.createElement('table');
                        var dom_tbody_C = document.createElement('tbody');
                            var dom_tr_C = document.createElement('tr');
                                var dom_td_C = document.createElement('td');
                                    dom_td_C.appendChild(document.createTextNode(""));
                                dom_tr_C.appendChild(dom_td_C);
                                var dom_td_C = document.createElement('td');
                                    dom_td_C.appendChild(document.createTextNode(""));
                                dom_tr_C.appendChild(dom_td_C);
                            dom_tbody_C.appendChild(dom_tr_C);
                        dom_table_C.appendChild(dom_tbody_C);
                    dom_td.appendChild(dom_table_C);
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);
        dom_table.appendChild(dom_tbody);
    document.getElementById('section_ergebnis').appendChild(dom_table);
}

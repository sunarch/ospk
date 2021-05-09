/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function construct_options() {

    var dom_div = document.createElement('div');
        dom_div.setAttribute("class","section_title");
            dom_div.appendChild(document.createTextNode(cc.text.options_title[cc.student.lang_no]));
    document.getElementById('section_options').appendChild(dom_div);

    var dom_table = document.createElement('table');
        dom_table.setAttribute("id","section_options_content");
        var dom_tbody = document.createElement('tbody');

            // wahlArt (1)
                var dom_tr = document.createElement('tr');
                    var dom_td = document.createElement('td');
                        dom_td.setAttribute("class","questions");
                        dom_td.appendChild(document.createTextNode(cc.text.question_wahlArt[cc.student.lang_no]));
                    dom_tr.appendChild(dom_td);
                    var dom_td = document.createElement('td');
                        var dom_select = document.createElement('select');
                            dom_select.setAttribute("id","wahlArt");
                            dom_select.setAttribute("onChange","cc.useOption(this.id,this.value);");
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","-1");
                                dom_option.appendChild(document.createTextNode(cc.text.answer_toChoose[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","12"); // Bildende Kunst
                                dom_option.appendChild(document.createTextNode(cc.fach[12].fullName[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","13"); // Musik
                                dom_option.appendChild(document.createTextNode(cc.fach[13].fullName[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                        dom_td.appendChild(dom_select);
                    dom_tr.appendChild(dom_td);
                dom_tbody.appendChild(dom_tr);

            // 2 Pflichtwahlen nur für den deutschen Zweig
            if (cc.student.zweig == "de") {

                // deWahlLang (2)
                    var dom_tr = document.createElement('tr');
                        var dom_td = document.createElement('td');
                            dom_td.setAttribute("class","questions");
                            dom_td.appendChild(document.createTextNode(cc.text.question_deWahlLang[cc.student.lang_no]));
                        dom_tr.appendChild(dom_td);
                        var dom_td = document.createElement('td');
                            var dom_select = document.createElement('select');
                                dom_select.setAttribute("id","deWahlLang");
                                dom_select.setAttribute("disabled","true");
                                dom_select.setAttribute("onChange","cc.useOption(this.id,this.value);");
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","-1");
                                    dom_option.appendChild(document.createTextNode(cc.text.answer_toChoose[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","2"); // UZ
                                    dom_option.appendChild(document.createTextNode(cc.fach[2].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","4"); // Französisch
                                    dom_option.appendChild(document.createTextNode(cc.fach[4].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                            dom_td.appendChild(dom_select);
                        dom_tr.appendChild(dom_td);
                    dom_tbody.appendChild(dom_tr);

                // deWahlNatWis (3)
                    var dom_tr = document.createElement('tr');
                        var dom_td = document.createElement('td');
                            dom_td.setAttribute("class","questions");
                            dom_td.appendChild(document.createTextNode(cc.text.question_deWahlNatWis[cc.student.lang_no]));
                        dom_tr.appendChild(dom_td);
                        var dom_td = document.createElement('td');
                            var dom_select = document.createElement('select');
                                dom_select.setAttribute("id","deWahlNatWis");
                                dom_select.setAttribute("disabled","true");
                                dom_select.setAttribute("onChange","cc.useOption(this.id,this.value);");
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","-1");
                                    dom_option.appendChild(document.createTextNode(cc.text.answer_toChoose[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","78"); // Physik und Biologie
                                    dom_option.appendChild(document.createTextNode(cc.fach[7].fullName[cc.student.lang_no]+" und "+cc.fach[8].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","79"); // Physik und Chemie
                                    dom_option.appendChild(document.createTextNode(cc.fach[7].fullName[cc.student.lang_no]+" und "+cc.fach[9].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","89"); // Biologie und Chemie
                                    dom_option.appendChild(document.createTextNode(cc.fach[8].fullName[cc.student.lang_no]+" und "+cc.fach[9].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                            dom_td.appendChild(dom_select);
                        dom_tr.appendChild(dom_td);
                    dom_tbody.appendChild(dom_tr);
            }

            // optionLang (4)
                var dom_tr = document.createElement('tr');
                    var dom_td = document.createElement('td');
                        dom_td.setAttribute("class","questions");
                        dom_td.appendChild(document.createTextNode(cc.text.question_optionLang[cc.student.lang_no]));
                    dom_tr.appendChild(dom_td);
                    var dom_td = document.createElement('td');
                        var dom_select = document.createElement('select');
                            dom_select.setAttribute("id","optionLang");
                            dom_select.setAttribute("disabled","true");
                            dom_select.setAttribute("onChange","cc.useOption(this.id,this.value);");
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","-1");
                                dom_option.appendChild(document.createTextNode(cc.text.answer_toChoose[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","0"); // nicht gewählt
                                dom_option.appendChild(document.createTextNode(cc.text.answer_notChosen[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            if (cc.student.zweig == "hu") {
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value","4"); // Französisch
                                    dom_option.appendChild(document.createTextNode(cc.fach[4].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                            }
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","5"); // Spanisch
                                dom_option.appendChild(document.createTextNode(cc.fach[5].fullName[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                        dom_td.appendChild(dom_select);
                    dom_tr.appendChild(dom_td);
                dom_tbody.appendChild(dom_tr);

            // optionNatWis (5)
                var dom_tr = document.createElement('tr');
                    var dom_td = document.createElement('td');
                        dom_td.setAttribute("class","questions");
                        dom_td.appendChild(document.createTextNode(cc.text.question_optionNatWis[cc.student.lang_no]));
                    dom_tr.appendChild(dom_td);
                    var dom_td = document.createElement('td');
                        var dom_select = document.createElement('select');
                            dom_select.setAttribute("id","optionNatWis");
                            dom_select.setAttribute("disabled","true");
                            dom_select.setAttribute("onChange","cc.useOption(this.id,this.value);");
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","-1");
                                dom_option.appendChild(document.createTextNode(cc.text.answer_toChoose[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","0");
                                dom_option.appendChild(document.createTextNode(cc.text.answer_notChosen[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("id","fluidOptionPhy");
                                dom_option.setAttribute("value","7"); // Physik Grundkurs
                                dom_option.appendChild(document.createTextNode(cc.fach[7].fullName[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","7+"); // Physik Leistungskurs
                                dom_option.appendChild(document.createTextNode(cc.text.answer_physikLk[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            if (cc.student.zweig == "de") {
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("id","fluidOptionBio");
                                    dom_option.setAttribute("value","8"); // Biologie
                                    dom_option.appendChild(document.createTextNode(cc.fach[8].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("id","fluidOptionCh");
                                    dom_option.setAttribute("value","9"); // Chemie
                                    dom_option.appendChild(document.createTextNode(cc.fach[9].fullName[cc.student.lang_no]));
                                dom_select.appendChild(dom_option);
                            }
                        dom_td.appendChild(dom_select);
                    dom_tr.appendChild(dom_td);
                dom_tbody.appendChild(dom_tr);

            // optionGesWis (6)
                var dom_tr = document.createElement('tr');
                    var dom_td = document.createElement('td');
                        dom_td.setAttribute("class","questions");
                        dom_td.appendChild(document.createTextNode(cc.text.question_optionGesWis[cc.student.lang_no]));
                    dom_tr.appendChild(dom_td);
                    var dom_td = document.createElement('td');
                        var dom_select = document.createElement('select');
                            dom_select.setAttribute("id","optionGesWis");
                            dom_select.setAttribute("disabled","true");
                            dom_select.setAttribute("onChange","cc.useOption(this.id,this.value);");
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","-1");
                                dom_option.appendChild(document.createTextNode(cc.text.answer_toChoose[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","0");
                                dom_option.appendChild(document.createTextNode(cc.text.answer_notChosen[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","16"); // Erdkunde
                                dom_option.appendChild(document.createTextNode(cc.fach[16].fullName[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value","17"); // Ethik (oder Religion)
                                dom_option.appendChild(document.createTextNode(cc.fach[17].fullName[cc.student.lang_no]));
                            dom_select.appendChild(dom_option);
                        dom_td.appendChild(dom_select);
                    dom_tr.appendChild(dom_td);
                dom_tbody.appendChild(dom_tr);

            //End of options
        dom_table.appendChild(dom_tbody);

    document.getElementById('section_options').appendChild(dom_table);
}

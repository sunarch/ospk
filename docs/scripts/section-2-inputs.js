/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function construct_inputs() {

    var dom_div = document.createElement('div');
        dom_div.setAttribute("class", "section_title");
            dom_div.appendChild(document.createTextNode(i18n.get("grades1112_title")));
        document.getElementById('section_inputs').appendChild(dom_div);

    var dom_table = document.createElement('table');
        dom_table.setAttribute("class","grades1112");
        var dom_tbody = document.createElement('tbody');
            var dom_tr = document.createElement('tr');
                dom_tr.setAttribute("class", "grades1112");
                for(n1=0;n1<=4;n1=n1+1) {
                    var dom_td = document.createElement('td');
                        dom_td.setAttribute("class", "grades1112_headers");
                        dom_td.appendChild(document.createTextNode(i18n.get("grades1112_headers")[n1]));
                    dom_tr.appendChild(dom_td);
                }
            dom_tbody.appendChild(dom_tr);
            for(n1 = 1; n1 < cc.fach.length; n1 = n1 + 1) {
                if(cc.fach[n1].active) {
                    var dom_tr = document.createElement('tr');
                        dom_tr.setAttribute("class", "grades1112");
                        var dom_td = document.createElement('td');
                            dom_td.setAttribute("class", "grades1112_subjects");
                            dom_td.appendChild(document.createTextNode(cc.fach[n1].getFullName()));
                        dom_tr.appendChild(dom_td);
                            for(n2 = 1; n2 <= 4; n2 = n2 + 1) {
                                var dom_td = document.createElement('td');
                                    var dom_input = document.createElement('input');
                                        dom_input.setAttribute("id", "input_" + cc.fach[n1].name + "_note_" + n2);
                                        dom_input.setAttribute("class", "grades1112");
                                        dom_input.setAttribute("onChange", "if(validate(this,'grade')){tempNum = new Number(this.value); cc.fach[" + n1 + "].note[" + n2 + "] = tempNum.valueOf();}");
                                dom_td.appendChild(dom_input);
                        dom_tr.appendChild(dom_td);
                            }
                    dom_tbody.appendChild(dom_tr);
                }
            }
        dom_table.appendChild(dom_tbody);
    document.getElementById('section_inputs').appendChild(dom_table);

    // ABITURERGEBNISSE

    var dom_div = document.createElement('div');
        dom_div.setAttribute("class", "section_title");
            dom_div.appendChild(document.createTextNode(i18n.get("examresults_title")));
        document.getElementById('section_inputs').appendChild(dom_div);

    var dom_table = document.createElement('table');
        dom_table.setAttribute("class", "exams");
        var dom_tbody = document.createElement('tbody');

            // 1. SCHRIFTLICHE PRÜFUNGSFACH
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode("1."));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(i18n.get("written")));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(cc.fach[1].getFullName()));
                dom_tr.appendChild(dom_td);
                /*var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "3");
                        dom_input.setAttribute("onChange", "");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  %"));
                dom_tr.appendChild(dom_td);*/
                var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("id", "input_abiNote_1");
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "2");
                        dom_input.setAttribute("onChange", "if(validate(this,'grade')){tempNum = new Number(this.value); cc.abiNote[1] = tempNum.valueOf();}");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  NP"));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(i18n.get("obligatory")));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // 2. SCHRIFTLICHE PRÜFUNGSFACH
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode("2."));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(i18n.get("written")));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    switch(cc.student.zweig) {
                        case "de":
                            var dom_select = document.createElement('select');
                                dom_select.setAttribute("id","input_abiFach_2");
                                dom_select.setAttribute("onChange","tempNum = new Number(this.value); cc.abiFach[2] = tempNum.valueOf();");
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value", "0");
                                    dom_option.appendChild(document.createTextNode(i18n.get("answer_toChoose")));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value", "3"); //Englisch
                                    dom_option.appendChild(document.createTextNode(cc.fach[3].getFullName()));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value", "4"); //Französisch
                                    dom_option.appendChild(document.createTextNode(cc.fach[4].getFullName()));
                                dom_select.appendChild(dom_option);
                                var dom_option = document.createElement('option');
                                    dom_option.setAttribute("value", "6"); //Mathematik
                                    dom_option.appendChild(document.createTextNode(cc.fach[6].getFullName()));
                                dom_select.appendChild(dom_option);
                            dom_td.appendChild(dom_select);
                            break;
                        default: case "hu":
                            dom_td.appendChild(document.createTextNode(cc.fach[2].getFullName()));
                            break;
                    }
                dom_tr.appendChild(dom_td);
                /*var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "3");
                        dom_input.setAttribute("onChange", "");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  %"));
                dom_tr.appendChild(dom_td);*/
                var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("id", "input_abiNote_2");
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "2");
                        dom_input.setAttribute("onChange", "if(validate(this,'grade')){tempNum = new Number(this.value); cc.abiNote[2] = tempNum.valueOf();}");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  NP"));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    if(cc.student.zweig=="hu") {dom_td.appendChild(document.createTextNode(i18n.get("obligatory")));}
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // 3. SCHRIFTLICHE PRÜFUNGSFACH
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode("3."));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(i18n.get("written")));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    var dom_select = document.createElement('select');
                        dom_select.setAttribute("id", "input_abiFach_3");
                        dom_select.setAttribute("onChange", "tempNum = new Number(this.value); cc.abiFach[3] = tempNum.valueOf();");
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "0");
                            dom_option.appendChild(document.createTextNode(i18n.get("answer_toChoose")));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "6"); //Mathematik
                            dom_option.appendChild(document.createTextNode(cc.fach[6].getFullName()));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "7"); //Physik
                            dom_option.appendChild(document.createTextNode(cc.fach[7].getFullName()));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "8"); //Biologie
                            dom_option.appendChild(document.createTextNode(cc.fach[8].getFullName()));
                        dom_select.appendChild(dom_option);
                        if(cc.student.zweig == "hu") {
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value", "9"); //Chemie
                                dom_option.appendChild(document.createTextNode(cc.fach[9].getFullName()));
                            dom_select.appendChild(dom_option);
                        }
                    dom_td.appendChild(dom_select);
                dom_tr.appendChild(dom_td);
                /*var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "3");
                        dom_input.setAttribute("onChange", "");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  %"));
                dom_tr.appendChild(dom_td);*/
                var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("id", "input_abiNote_3");
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "2");
                        dom_input.setAttribute("onChange", "if(validate(this,'grade')){tempNum = new Number(this.value); cc.abiNote[3] = tempNum.valueOf();}");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  NP"));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(" "));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);

            // MÜNDLICHES PRÜFUNGSFACH
            var dom_tr = document.createElement('tr');
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode("4."));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(i18n.get("oral")));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    var dom_select = document.createElement('select');
                        dom_select.setAttribute("id", "input_abiFach_4");
                        dom_select.setAttribute("onChange", "tempNum = new Number(this.value); cc.abiFach[4] = tempNum.valueOf();");
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "0");
                            dom_option.appendChild(document.createTextNode(i18n.get("answer_toChoose")));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "3"); //Englisch
                            dom_option.appendChild(document.createTextNode(cc.fach[3].getFullName()));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "6"); //Mathematik
                            dom_option.appendChild(document.createTextNode(cc.fach[6].getFullName()));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "7"); //Physik
                            dom_option.appendChild(document.createTextNode(cc.fach[7].getFullName()));
                        dom_select.appendChild(dom_option);
                        var dom_option = document.createElement('option');
                            dom_option.setAttribute("value", "10"); //Geschichte
                            dom_option.appendChild(document.createTextNode(cc.fach[10].getFullName()));
                        dom_select.appendChild(dom_option);
                    switch(cc.student.zweig) {
                        case "de":
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value", "4"); //Französisch
                                dom_option.appendChild(document.createTextNode(cc.fach[4].getFullName()));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value", "8"); //Biologie
                                dom_option.appendChild(document.createTextNode(cc.fach[8].getFullName()));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value", "9"); //Chemie
                                dom_option.appendChild(document.createTextNode(cc.fach[9].getFullName()));
                            dom_select.appendChild(dom_option);
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value", "14"); //Sozialkunde
                                dom_option.appendChild(document.createTextNode(cc.fach[14].getFullName()));
                            dom_select.appendChild(dom_option);
                            break;
                        default: case "hu":
                            var dom_option = document.createElement('option');
                                dom_option.setAttribute("value", "11"); //Ungarische Geschichte
                                dom_option.appendChild(document.createTextNode(cc.fach[11].getFullName()));
                            dom_select.appendChild(dom_option);
                            break;
                    }
                    dom_td.appendChild(dom_select);
                dom_tr.appendChild(dom_td);
                /*var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "3");
                        dom_input.setAttribute("onChange", "");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  %"));
                dom_tr.appendChild(dom_td);*/
                var dom_td = document.createElement('td');
                    var dom_input = document.createElement('input');
                        dom_input.setAttribute("id", "input_abiNote_4");
                        dom_input.setAttribute("type", "text");
                        dom_input.setAttribute("class", "exam_points");
                        dom_input.setAttribute("maxlength", "3");
                        dom_input.setAttribute("onChange", "if(validate(this,'grade')){tempNum = new Number(this.value); cc.abiNote[4] = tempNum.valueOf();}");
                    dom_td.appendChild(dom_input);
                    dom_td.appendChild(document.createTextNode("  NP"));
                dom_tr.appendChild(dom_td);
                var dom_td = document.createElement('td');
                    dom_td.appendChild(document.createTextNode(" "));
                dom_tr.appendChild(dom_td);
            dom_tbody.appendChild(dom_tr);
        dom_table.appendChild(dom_tbody);
    document.getElementById('section_inputs').appendChild(dom_table);

    dom_input = document.createElement('input');
        dom_input.setAttribute("id", "button_calculate");
        dom_input.setAttribute("type", "button");
        dom_input.setAttribute("value", i18n.get("calculate"));
        dom_input.setAttribute("class", "send");
        dom_input.setAttribute("onClick", "cc.calculate(); cc.display('section_results',true);");
    document.getElementById('section_inputs').appendChild(dom_input);

    dom_a = document.createElement('a');
        dom_a.setAttribute("id", "exportLink");
        dom_input = document.createElement('input');
            dom_input.setAttribute("type", "button");
            dom_input.setAttribute("onClick", "cc.exportData();");
            dom_input.setAttribute("value", i18n.get("exportData"));
        dom_a.appendChild(dom_input);
    document.getElementById('section_inputs').appendChild(dom_a);
}

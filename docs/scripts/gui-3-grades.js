/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForGrades() {

    this.show = function() {

        if(cc.optsready.indexOf(false) == -1) {
            this.setup();
            gui.exams.setup();
            gui.buttons.setup();
            document.getElementById('grades').style.display = "block";
            document.getElementById('exams').style.display = "block";
            document.getElementById('buttons').style.display = "block";
        }
    }

    this.updateGrade = function(s_fach, i_semester) {

        s_id = "grades_" + s_fach + "_sem_" + i_semester
        dom_input = document.getElementById(s_id)
        s_value = dom_input.value

        if (!valid.grade(s_value)) {
            dom_input.value = "";
            return;
        }

        i_fach = cc.fachIdConvert.indexOf(s_fach)
        tempNum = new Number(s_value);
        cc.fach[i_fach].note[i_semester] = tempNum.valueOf();

    }

    this.setup = function() {

        document.getElementById('grades_title').innerHTML = i18n.get("grades1112_title");

        document.getElementById('grades_header').innerHTML = i18n.get("grades1112_header");

        for(n1 = 1; n1 < cc.fach.length; n1 = n1 + 1) {

            document.getElementById("grades_" + cc.fach[n1].name).style.display = "none";

            if(cc.fach[n1].active == true) {
                document.getElementById("grades_" + cc.fach[n1].name).style.display = "table-row";
            }

            document.getElementById("grades_" + cc.fach[n1].name + "_subj").innerHTML = cc.fach[n1].getFullName();
        }
    }
}

/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForGrades() {

    this.show = function() {
        if(cc.optsready.indexOf(false) == -1) {
            inputs_setup();
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
}

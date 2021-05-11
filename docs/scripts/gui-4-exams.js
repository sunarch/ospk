/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForExams() {

    this.updateSubj = function(i_exam) {
        s_id = "ex_" + i_exam + "_subj"
        dom_input = document.getElementById(s_id)
        s_value = dom_input.value

        tempNum = new Number(s_value);
        cc.abiFach[i_exam] = tempNum.valueOf();
    }

    this.updateGrade = function(i_exam) {
        s_id = "exams_" + i_exam + "_grade"
        dom_input = document.getElementById(s_id)
        s_value = dom_input.value

        if (!valid.grade(s_value)) {
            dom_input.value = "";
            return;
        }

        if (cc.abiFach[i_exam] == 0) {
            dom_input.value = "";
            return;
        }

        tempNum = new Number(s_value);
        cc.abiNote[i_exam] = tempNum.valueOf()

    }
}

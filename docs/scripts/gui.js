/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteraction() {

    this.updateGrade = function(s_fach, i_semester) {
        s_id = "input_" + s_fach + "_note_" + i_semester
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

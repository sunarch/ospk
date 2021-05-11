/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractions() {

    this.branches = new GuiInteractionsForBranches();
    this.options = new GuiInteractionsForOptions();
    this.grades = new GuiInteractionsForGrades();
    this.exams = new GuiInteractionsForExams();
    this.buttons = new GuiInteractionsForButtons();
}

function GuiInteractionsForBranches() {

    this.choose = function(s_branch) {
        cc.student.set_zweig(s_branch);
        cc.display('options');
    }

    this.importData = function() {
        s_input = window.prompt('Data String:');
        cc.importData(s_input);

        document.getElementById("loaded_name").innerHTML = cc.student.name;
        document.getElementById("loaded").style.display = "block";
    }
}

function GuiInteractionsForOptions() {
    this.empty = "empty";
}

function GuiInteractionsForGrades() {

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

function GuiInteractionsForButtons() {

    this.calculate = function() {
        cc.calculate();
    }

    this.exportData = function() {
        cc.exportData()
    }
}

/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForGrades() {

    this.getDomId = function(s_subjectCode, i_semester) {
        return "grades_" + s_subjectCode + "_sem_" + i_semester;
    }

    this.show = function() {

        this.setup();
        gui.exams.setup();
        gui.buttons.setup();
        document.getElementById('grades').style.display = "block";
        document.getElementById('exams').style.display = "block";
        document.getElementById('buttons').style.display = "block";
    }

    this.updateGrade = function(s_subjectCode, i_semester) {

        s_domId = this.getDomId(s_subjectCode, i_semester);
        domInput = document.getElementById(s_domId);
        s_value = domInput.value;

        if (!gui.validateGrade(s_value)) {
            domInput.value = "";
            domInput.className = "error";
            return;
        }

        domInput.className = "cleared";
        i_subjectNumber = cc.fachIdConvert.indexOf(s_subjectCode);
        tempNum = new Number(s_value);
        cc.fach[i_subjectNumber].note[i_semester] = tempNum.valueOf();

    }

    this.setFields = function(a_subjects) {

        for (n1 = 0; n1 < a_subjects.length; n1 = n1 + 1) {
            for (n2 = 0; n2 < 4; n2 = n2 + 1) {
                this.setField(a_subjects[n1].code, n2 + 1, a_subjects[n1].grades[n2]);
            }
        }
    }

    this.setField = function(s_subjectCode, i_semester, i_grade) {

        s_domId = this.getDomId(s_subjectCode, i_semester);
        document.getElementById(s_domId).value = i_grade;
    }

    this.clearFieldsBackground = function() {

        for (const s_subjectCode in dataSubjects) {
            for (n2 = 0; n2 < 4; n2 = n2 + 1) {
                i_semester = n2 + 1
                s_domId = this.getDomId(s_subjectCode, i_semester);
                domInput = document.getElementById(s_domId);
                domInput.className = "cleared";
            }
        }
    }

    this.setFieldBgSelected = function(s_subjectCode, i_semester) {
        s_domId = this.getDomId(s_subjectCode, i_semester);
        domInput = document.getElementById(s_domId);
        domInput.className = "selected";
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

/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForExams() {

    this.nextSection = function() {
        gui.buttons.show();
    }

    this.show = function() {

        this.setLanguageStrings();
        this.setup();
        document.getElementById('exams').style.display = "block";

        this.nextSection();
    }

    this.updateSubj = function(i_exam) {
        s_id = "ex_" + i_exam + "_subj"
        domInput = document.getElementById(s_id)
        s_value = domInput.value

        tempNum = new Number(s_value);
        cc.abiFach[i_exam] = tempNum.valueOf();
    }

    this.updateGrade = function(i_exam) {
        s_id = "exams_" + i_exam + "_grade"
        domInput = document.getElementById(s_id)
        s_value = domInput.value

        if (!gui.validateGrade(s_value)) {
            domInput.value = "";
            domInput.className = "error";
            return;
        }

        if (cc.abiFach[i_exam] == 0) {
            domInput.value = "";
            domInput.className = "warning";
            return;
        }

        domInput.className = "cleared";
        tempNum = new Number(s_value);
        cc.abiNote[i_exam] = tempNum.valueOf()

    }

    this.setFields = function(a_exams) {

        this.setFieldSubject(1, a_exams[0].subject);
        this.setFieldSubject(2, a_exams[1].subject);
        this.setFieldSubject(3, a_exams[2].subject);
        this.setFieldSubject(4, a_exams[3].subject);

        this.setFieldGrade(1, a_exams[0].grade);
        this.setFieldGrade(2, a_exams[1].grade);
        this.setFieldGrade(3, a_exams[2].grade);
        this.setFieldGrade(4, a_exams[3].grade);
    }

    this.setFieldSubject = function(i_exam, x_value) {

        if (i_exam == 1) {
            document.getElementById('exams_1_subj').innerHTML = cc.fach[1].getFullName();
            return;
        }

        if (i_exam == 2 && x_value == 2) {
            document.getElementById('exams_2_branch_hu_subj').innerHTML = cc.fach[2].getFullName();
            return;
        }

        if ([2, 3, 4].indexOf(i_exam) != -1) {
            document.getElementById("ex_" + i_exam + "_subj").value = x_value;
            return;
        }

        console.log("invalid i_exam in setFieldSubject");
    }

    this.setFieldGrade = function(i_exam, x_value) {
        document.getElementById("exams_" + i_exam + "_grade").value = x_value;
    }

    this.setup = function() {

        /* ABITURERGEBNISSE ----------------------------------------- */

        /* 1. SCHRIFTLICHE PRÜFUNGSFACH ----------------------------- */
        // no setup

        /* 2. SCHRIFTLICHE PRÜFUNGSFACH ----------------------------- */

        // select top ('choose') entry
        document.getElementById("ex_2_subj").options.selectedIndex = 0

        if (cc.student.zweig == "de") {
            document.getElementById('exams_2_branch_hu_subj').style.display = "none";
            document.getElementById('exams_2_branch_de_subj').style.display = "initial";
        }

        // req for HU only
        if(cc.student.zweig == "hu") {
            document.getElementById('exams_2_req').innerHTML = i18n.get("obligatory");
        }

        /* 3. SCHRIFTLICHE PRÜFUNGSFACH ----------------------------- */

        // Chemie (only HU)
        if(cc.student.zweig == "hu") {
            document.getElementById('ex_3_subj_sel_ch').style.display = "initial";
        }

        // select top ('choose') entry
        document.getElementById("ex_3_subj").options.selectedIndex = 0

        /* MÜNDLICHES PRÜFUNGSFACH ---------------------------------- */

        // DE only: Französisch, Biologie, Chemie, Sozialkunde
        if (cc.student.zweig == "de") {
            document.getElementById('ex_4_subj_sel_frz').style.display = "initial";
            document.getElementById('ex_4_subj_sel_bio').style.display = "initial";
            document.getElementById('ex_4_subj_sel_ch').style.display = "initial";
            document.getElementById('ex_4_subj_sel_soz').style.display = "initial";
        }

        // Ungarische Geschichte (HU only)
        if (cc.student.zweig == "hu") {
            document.getElementById('ex_4_subj_sel_uge').style.display = "initial";
        }

        // select top ('choose') entry
        document.getElementById("ex_4_subj").options.selectedIndex = 0
    }

    this.setLanguageStrings = function() {

        /* ABITURERGEBNISSE ----------------------------------------- */

        document.getElementById('exams_title').innerHTML = i18n.get("examresults_title");

        /* 1. SCHRIFTLICHE PRÜFUNGSFACH ----------------------------- */

        document.getElementById('exams_1_mode').innerHTML = i18n.get("written");
        document.getElementById('exams_1_subj').innerHTML = cc.fach[1].getFullName();

        document.getElementById('exams_1_req').innerHTML = i18n.get("obligatory");

        /* 2. SCHRIFTLICHE PRÜFUNGSFACH ----------------------------- */

        document.getElementById('exams_2_mode').innerHTML = i18n.get("written");

        document.getElementById('exams_2_branch_hu_subj').innerHTML = cc.fach[2].getFullName();

        // DE only
        document.getElementById('ex_2_subj_sel_choose').innerHTML = i18n.get("answer_toChoose");

        // Englisch (DE only)
        document.getElementById('ex_2_subj_sel_eng').innerHTML = cc.fach[3].getFullName();

        // Französisch (DE only)
        document.getElementById('ex_2_subj_sel_frz').innerHTML = cc.fach[4].getFullName();

        // Mathematik (DE only)
        document.getElementById('ex_2_subj_sel_mat').innerHTML = cc.fach[6].getFullName();

        // req: empty, fill in setup if needed
        document.getElementById('exams_2_req').innerHTML = "";

        /* 3. SCHRIFTLICHE PRÜFUNGSFACH ----------------------------- */

        document.getElementById('exams_3_mode').innerHTML = i18n.get("written");

        document.getElementById('ex_3_subj_sel_choose').innerHTML = i18n.get("answer_toChoose");

        // Mathematik
        document.getElementById('ex_3_subj_sel_mat').innerHTML = cc.fach[6].getFullName();

        // Physik
        document.getElementById('ex_3_subj_sel_phy').innerHTML = cc.fach[7].getFullName();

        // Biologie
        document.getElementById('ex_3_subj_sel_bio').innerHTML = cc.fach[8].getFullName();

        // Chemie (HU only)
        document.getElementById('ex_3_subj_sel_ch').innerHTML = cc.fach[9].getFullName();

        // no req
        document.getElementById('exams_3_req').innerHTML = "";

        /* MÜNDLICHES PRÜFUNGSFACH ---------------------------------- */

        document.getElementById('exams_4_mode').innerHTML = i18n.get("oral");

        document.getElementById('ex_4_subj_sel_choose').innerHTML = i18n.get("answer_toChoose");

        // Englisch
        document.getElementById('ex_4_subj_sel_eng').innerHTML = cc.fach[3].getFullName();

        // Mathematik
        document.getElementById('ex_4_subj_sel_mat').innerHTML = cc.fach[6].getFullName();

        // Physik
        document.getElementById('ex_4_subj_sel_phy').innerHTML = cc.fach[7].getFullName();

        // Geschichte
        document.getElementById('ex_4_subj_sel_ge').innerHTML = cc.fach[10].getFullName();

        // Französisch (DE only)
        document.getElementById('ex_4_subj_sel_frz').innerHTML = cc.fach[4].getFullName();

        // Biologie (DE only)
        document.getElementById('ex_4_subj_sel_bio').innerHTML = cc.fach[8].getFullName();

        // Chemie (DE only)
        document.getElementById('ex_4_subj_sel_ch').innerHTML = cc.fach[9].getFullName();

        // Sozialkunde (DE only)
        document.getElementById('ex_4_subj_sel_soz').innerHTML = cc.fach[14].getFullName();

        // Ungarische Geschichte (HU only)
        document.getElementById('ex_4_subj_sel_uge').innerHTML = cc.fach[11].getFullName();

        // no req
        document.getElementById('exams_4_req').innerHTML = "";
    }
}

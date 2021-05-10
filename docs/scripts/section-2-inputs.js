/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function inputs_setup() {

    document.getElementById('grades_title').innerHTML = i18n.get("grades1112_title");

    document.getElementById('grades_header').innerHTML = i18n.get("grades1112_header");

    for(n1 = 1; n1 < cc.fach.length; n1 = n1 + 1) {

        document.getElementById("grades_" + cc.fach[n1].name).style.display = "none";

        if(cc.fach[n1].active == true) {
            document.getElementById("grades_" + cc.fach[n1].name).style.display = "table-row";
        }

        document.getElementById("grades_subj_" + cc.fach[n1].name).innerHTML = cc.fach[n1].getFullName();
    }

    /* ABITURERGEBNISSE --------------------------------------------- */

    document.getElementById('exams_title').innerHTML = i18n.get("examresults_title");

    /* 1. SCHRIFTLICHE PRÜFUNGSFACH --------------------------------- */

    document.getElementById('exams_1_mode').innerHTML = i18n.get("written");
    document.getElementById('exams_1_subj').innerHTML = cc.fach[1].getFullName();

    document.getElementById('exams_1_req').innerHTML = i18n.get("obligatory");

    /* 2. SCHRIFTLICHE PRÜFUNGSFACH --------------------------------- */

    document.getElementById('exams_2_mode').innerHTML = i18n.get("written");

    document.getElementById('exams_2_hu_subj').innerHTML = cc.fach[2].getFullName();

    // DE only

    document.getElementById('opt_ex_2_choose').innerHTML = i18n.get("answer_toChoose");

    // Englisch
    document.getElementById('opt_ex_2_eng').innerHTML = cc.fach[3].getFullName();

    // Französisch
    document.getElementById('opt_ex_2_frz').innerHTML = cc.fach[4].getFullName();

    // Mathematik
    document.getElementById('opt_ex_2_mat').innerHTML = cc.fach[6].getFullName();

    // select top ('choose') entry
    document.getElementById("input_abiFach_2").options.selectedIndex = 0

    if (cc.student.zweig == "de") {
        document.getElementById('exams_2_hu_subj').style.display = "none";
        document.getElementById('exams_2_de_subj').style.display = "initial";
    }

    // req for HU only

    if(cc.student.zweig == "hu") {
        document.getElementById('exams_2_req').innerHTML = i18n.get("obligatory");
    }

    /* 3. SCHRIFTLICHE PRÜFUNGSFACH --------------------------------- */

    document.getElementById('exams_3_mode').innerHTML = i18n.get("written");

    document.getElementById('opt_ex_3_choose').innerHTML = i18n.get("answer_toChoose");

    // Mathematik
    document.getElementById('opt_ex_3_mat').innerHTML = cc.fach[6].getFullName();

    // Physik
    document.getElementById('opt_ex_3_phy').innerHTML = cc.fach[7].getFullName();

    // Biologie
    document.getElementById('opt_ex_3_bio').innerHTML = cc.fach[8].getFullName();

    // Chemie (only HU)
    document.getElementById('opt_ex_3_ch').innerHTML = cc.fach[9].getFullName();

    if(cc.student.zweig == "hu") {
        document.getElementById('opt_ex_3_ch').style.display = "initial";
    }

    // select top ('choose') entry
    document.getElementById("input_abiFach_3").options.selectedIndex = 0

    /* MÜNDLICHES PRÜFUNGSFACH -------------------------------------- */

    document.getElementById('exams_4_mode').innerHTML = i18n.get("oral");

    document.getElementById('opt_ex_4_choose').innerHTML = i18n.get("answer_toChoose");

    // Englisch
    document.getElementById('opt_ex_4_eng').innerHTML = cc.fach[3].getFullName();

    // Mathematik
    document.getElementById('opt_ex_4_mat').innerHTML = cc.fach[6].getFullName();

    // Physik
    document.getElementById('opt_ex_4_phy').innerHTML = cc.fach[7].getFullName();

    // Geschichte
    document.getElementById('opt_ex_4_ge').innerHTML = cc.fach[10].getFullName();

    // DE only

    // Französisch (DE only)
    document.getElementById('opt_ex_4_frz').innerHTML = cc.fach[4].getFullName();

    // Biologie (DE only)
    document.getElementById('opt_ex_4_bio').innerHTML = cc.fach[8].getFullName();

    // Chemie (DE only)
    document.getElementById('opt_ex_4_ch').innerHTML = cc.fach[9].getFullName();

    // Sozialkunde (DE only)
    document.getElementById('opt_ex_4_soz').innerHTML = cc.fach[14].getFullName();

    if (cc.student.zweig == "de") {
        document.getElementById('opt_ex_4_frz').style.display = "initial";
        document.getElementById('opt_ex_4_bio').style.display = "initial";
        document.getElementById('opt_ex_4_ch').style.display = "initial";
        document.getElementById('opt_ex_4_soz').style.display = "initial";
    }

    // HU only

    // Ungarische Geschichte (HU only)
    document.getElementById('opt_ex_4_uge').innerHTML = cc.fach[11].getFullName();

    if (cc.student.zweig == "hu") {
        document.getElementById('opt_ex_4_uge').style.display = "initial";
    }

    // select top ('choose') entry
    document.getElementById("input_abiFach_4").options.selectedIndex = 0

    /* buttons ------------------------------------------------------ */

    document.getElementById('button_calculate').value = i18n.get("calculate");

    document.getElementById('button_export').value = i18n.get("exportData");

}


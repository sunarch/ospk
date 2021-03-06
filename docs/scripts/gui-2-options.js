/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForOptions() {

    this.nextSection = function() {
        gui.grades.show();
    }

    this.show = function() {

        this.setLanguageStrings();
        this.setup();

        document.getElementById("opts_art").disabled = false;
        document.getElementById('options').style.display = "block";
    }

    this.setFields = function(o_values) {
        this.setFieldArt(o_values['art']);
        this.setFieldDeLang(o_values['deLang']);
        this.setFieldDeNatWis(o_values['deNatWis']);
        this.setFieldLang(o_values['lang']);
        this.setFieldNatWis(o_values['natWis']);
        this.setFieldGesWis(o_values['gesWis']);
    }

    // 1

    this.setFieldArt = function(x_value) {

        document.getElementById("opts_art").value = x_value;
        document.getElementById("opts_art").disabled = true;
    }

    this.selectArt = function(s_value) {

        document.getElementById("opts_art").disabled = true;

        cc.student.setOptionArt(s_value);

        // next:

        if (cc.student.zweig == "de") {
            document.getElementById("opts_de_lang").disabled = false;
        }

        if (cc.student.zweig == "hu") {
            document.getElementById("opts_lang").disabled = false;
        }
    }

    // 2

    this.setFieldDeLang = function(x_value) {

        document.getElementById("opts_de_lang").value = x_value;
        document.getElementById("opts_de_lang").disabled = true;
    }

    this.selectDeLang = function(s_value) {

        document.getElementById("opts_de_lang").disabled = true;

        cc.student.setOptionDeLang(s_value);

        // next:
        document.getElementById("opts_de_nat_wis").disabled = false;
    }

    // 3

    this.setFieldDeNatWis = function(x_value) {

        document.getElementById("opts_de_nat_wis").value = x_value;
        document.getElementById("opts_de_nat_wis").disabled = true;
    }

    this.selectDeNatWis = function(s_value) {

        document.getElementById("opts_de_nat_wis").disabled = true;

        cc.student.setOptionDeNatWis(s_value);

        // disable already chosen options in opts_nat_wis

        // Physik (Grundkurs)
        if(cc.fach[7].active) {
            document.getElementById("opts_nat_wis_sel_phy").disabled = true;
        }

        // Biologie
        if(cc.fach[8].active) {
            document.getElementById("opts_nat_wis_sel_bio").disabled = true;
        }

        // Chemie
        if(cc.fach[9].active) {
            document.getElementById("opts_nat_wis_sel_ch").disabled = true;
        }

        // next:
        document.getElementById("opts_lang").disabled = false;
    }

    // 4

    this.setFieldLang = function(x_value) {

        document.getElementById("opts_lang").value = x_value;
        document.getElementById("opts_lang").disabled = true;
    }

    this.selectLang = function(s_value) {

        document.getElementById("opts_lang").disabled = true;

        cc.student.setOptionLang(s_value);

        // next:
        document.getElementById("opts_nat_wis").disabled = false;
    }

    // 5

    this.setFieldNatWis = function(x_value) {

        document.getElementById("opts_nat_wis").value = x_value;
        document.getElementById("opts_nat_wis").disabled = true;
    }

    this.selectNatWis = function(s_value) {

        document.getElementById("opts_nat_wis").disabled = true;

        cc.student.setOptionNatWis(s_value);

        // next:
        document.getElementById("opts_ges_wis").disabled = false;
    }

    // 6

    this.setFieldGesWis = function(x_value) {

        document.getElementById("opts_ges_wis").value = x_value;
        document.getElementById("opts_ges_wis").disabled = true;
    }

    this.selectGesWis = function(s_value) {

        document.getElementById("opts_ges_wis").disabled = true;

        cc.student.setOptionGesWis(s_value);

        // next:
        this.nextSection();
    }

    this.setup = function() {

        /* opts_art (1) --------------------------------------------- */

        // select top (label) entry
        document.getElementById("opts_art").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_art").disabled = true

        /* 2 Pflichtwahlen nur für den deutschen Zweig -------------- */

        if (cc.student.zweig == "de") {

            /* opts_de_lang (2) ------------------------------------- */

            document.getElementById("options_de_lang").style.display = "table-row";

            // select top (label) entry
            document.getElementById("opts_de_lang").options.selectedIndex = 0

            // ensure disabled
            document.getElementById("opts_de_lang").disabled = true

            /* opts_de_nat_wis (3) ---------------------------------- */

            document.getElementById("options_de_nat_wis").style.display = "table-row";

            // select top (label) entry
            document.getElementById("opts_de_nat_wis").options.selectedIndex = 0

            // ensure disabled
            document.getElementById("opts_de_nat_wis").disabled = true

        }

        /* opts_lang (4) -------------------------------------------- */

        // Französisch (hidden by default)
        if (cc.student.zweig == "hu") {
            document.getElementById('opts_lang_sel_frz').style.display = "initial";
        }

        // select top (label) entry
        document.getElementById("opts_lang").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_lang").disabled = true

        /* opts_nat_wis (5) ----------------------------------------- */

        // Biologie
        if (cc.student.zweig == "de") {
            document.getElementById('opts_nat_wis_sel_bio').style.display = "initial";
        }

        // Chemie
        if (cc.student.zweig == "de") {
            document.getElementById('opts_nat_wis_sel_ch').style.display = "initial";
        }

        // select top (label) entry
        document.getElementById("opts_nat_wis").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_nat_wis").disabled = true

        /* opts_ges_wis (6) ----------------------------------------- */

        // select top (label) entry
        document.getElementById("opts_ges_wis").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_ges_wis").disabled = true

    }

    this.setLanguageStrings = function() {

        document.getElementById('options_title').innerHTML = i18n.get("options_title");

        /* opts_art (1) --------------------------------------------- */

        document.getElementById("options_art_label").innerHTML = i18n.get("question_wahlArt");

        document.getElementById("opts_art_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // Bildende Kunst
        document.getElementById("opts_art_sel_arts").innerHTML = cc.fach[12].getFullName();

        // Musik
        document.getElementById("opts_art_sel_music").innerHTML = cc.fach[13].getFullName();

        /* 2 Pflichtwahlen nur für den deutschen Zweig -------------- */

        /* opts_de_lang (2) ------------------------------------- */

        document.getElementById("options_de_lang_label").innerHTML = i18n.get("question_deWahlLang");

        document.getElementById("opts_de_lang_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // UZ
        document.getElementById("opts_de_lang_sel_uz").innerHTML = cc.fach[2].getFullName();

        // Französisch
        document.getElementById("opts_de_lang_sel_fra").innerHTML = cc.fach[4].getFullName();

        /* opts_de_nat_wis (3) ---------------------------------- */

        document.getElementById("options_de_nat_wis_label").innerHTML = i18n.get("question_deWahlNatWis");

        document.getElementById("opts_de_nat_wis_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // Physik und Biologie
        document.getElementById("opts_de_nat_wis_sel_phy_bio").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[8].getFullName();

        // Physik und Chemie
        document.getElementById("opts_de_nat_wis_sel_phy_ch").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[9].getFullName();

        // Biologie und Chemie
        document.getElementById("opts_de_nat_wis_sel_bio_ch").innerHTML = cc.fach[8].getFullName() + " und " + cc.fach[9].getFullName();

        /* opts_lang (4) -------------------------------------------- */

        document.getElementById("options_lang_label").innerHTML = i18n.get("question_optionLang");

        document.getElementById("opts_lang_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // nicht gewählt
        document.getElementById("opts_lang_sel_none").innerHTML = i18n.get("answer_notChosen");

        // Französisch (hidden by default)
        document.getElementById("opts_lang_sel_frz").innerHTML = cc.fach[4].getFullName();

        // Spanisch
        document.getElementById("opts_lang_sel_spa").innerHTML = cc.fach[5].getFullName();

        /* opts_nat_wis (5) ----------------------------------------- */

        document.getElementById("options_nat_wis_label").innerHTML = i18n.get("question_optionNatWis");

        document.getElementById("opts_nat_wis_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // nicht gewählt
        document.getElementById("opts_nat_wis_sel_none").innerHTML = i18n.get("answer_notChosen");

        // Physik Grundkurs
        document.getElementById("opts_nat_wis_sel_phy").innerHTML = cc.fach[7].getFullName();

        // Physik Leistungskurs
        document.getElementById("opts_nat_wis_sel_phy_lk").innerHTML = i18n.get("answer_physikLk");

        // Biologie
        document.getElementById("opts_nat_wis_sel_bio").innerHTML = cc.fach[8].getFullName();

        // Chemie
        document.getElementById("opts_nat_wis_sel_ch").innerHTML = cc.fach[9].getFullName();

        /* opts_ges_wis (6) ----------------------------------------- */

        document.getElementById("options_ges_wis_label").innerHTML = i18n.get("question_optionGesWis");

        document.getElementById("opts_ges_wis_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // nicht gewählt
        document.getElementById("opts_ges_wis_sel_none").innerHTML = i18n.get("answer_notChosen");

        // Erdkunde
        document.getElementById("opts_ges_wis_sel_ek").innerHTML = cc.fach[16].getFullName();

        // Ethik (oder Religion)
        document.getElementById("opts_ges_wis_sel_eth").innerHTML = cc.fach[17].getFullName();

    }
}

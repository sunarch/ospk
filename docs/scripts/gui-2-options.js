/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractionsForOptions() {

    this.show = function() {

        // What we hide
        document.getElementById('branches_import').style.display = "none";

        switch(cc.student.zweig) {

            case "de":
                document.getElementById('branches_hu').style.display = "none";
                break;

            default:
            case "hu":
                document.getElementById('branches_de').style.display = "none";
                break;
        }

        // What we show
        this.setup();

        // enable first question
        document.getElementById("opts_art").disabled = false

        document.getElementById('options').style.display = "block";
    }
    
    this.setup = function() {

        document.getElementById('options_title').innerHTML = i18n.get("options_title");

        /* opts_art (1) ------------------------------------------------- */

        document.getElementById("options_art_label").innerHTML = i18n.get("question_wahlArt");

        document.getElementById("opts_art_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // Bildende Kunst
        document.getElementById("opts_art_sel_arts").innerHTML = cc.fach[12].getFullName();

        // Musik
        document.getElementById("opts_art_sel_music").innerHTML = cc.fach[13].getFullName();

        // select top (label) entry
        document.getElementById("opts_art").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_art").disabled = true

        /* 2 Pflichtwahlen nur für den deutschen Zweig ------------------ */

        if (cc.student.zweig == "de") {

            /* opts_de_lang (2) ----------------------------------------- */

            document.getElementById("options_de_lang").style.display = "table-row";

            document.getElementById("options_de_lang_label").innerHTML = i18n.get("question_deWahlLang");

            document.getElementById("opts_de_lang_sel_choose").innerHTML = i18n.get("answer_toChoose");

            // UZ
            document.getElementById("opts_de_lang_sel_uz").innerHTML = cc.fach[2].getFullName();

            // Französisch
            document.getElementById("opts_de_lang_sel_fra").innerHTML = cc.fach[4].getFullName();

            // select top (label) entry
            document.getElementById("opts_de_lang").options.selectedIndex = 0

            // ensure disabled
            document.getElementById("opts_de_lang").disabled = true

            /* opts_de_nat_wis (3) -------------------------------------- */

            document.getElementById("options_de_nat_wis").style.display = "table-row";

            document.getElementById("options_de_nat_wis_label").innerHTML = i18n.get("question_deWahlNatWis");

            document.getElementById("opts_de_nat_wis_sel_choose").innerHTML = i18n.get("answer_toChoose");

            // Physik und Biologie
            document.getElementById("opts_de_nat_wis_sel_").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[8].getFullName();

            // Physik und Chemie
            document.getElementById("opts_de_nat_wis_sel_phy_ch").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[9].getFullName();

            // Biologie und Chemie
            document.getElementById("opts_de_nat_wis_sel_bio_ch").innerHTML = cc.fach[8].getFullName() + " und " + cc.fach[9].getFullName();

            // select top (label) entry
            document.getElementById("opts_de_nat_wis").options.selectedIndex = 0

            // ensure disabled
            document.getElementById("opts_de_nat_wis").disabled = true

        }

        /* opts_lang (4) ------------------------------------------------ */

        document.getElementById("options_lang_label").innerHTML = i18n.get("question_optionLang");

        document.getElementById("opts_lang_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // nicht gewählt
        document.getElementById("opts_lang_sel_none").innerHTML = i18n.get("answer_notChosen");

        // Französisch (hidden by default)
        document.getElementById("opts_lang_sel_fra").innerHTML = cc.fach[4].getFullName();

        if (cc.student.zweig == "hu") {
            document.getElementById('opts_lang_sel_fra').style.display = "initial";
        }

        // Spanisch
        document.getElementById("opts_lang_sel_spa").innerHTML = cc.fach[5].getFullName();

        // select top (label) entry
        document.getElementById("opts_lang").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_lang").disabled = true

        /* opts_nat_wis (5) --------------------------------------------- */

        document.getElementById("options_nat_wis_label").innerHTML = i18n.get("question_optionNatWis");

        document.getElementById("opts_nat_wis_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // nicht gewählt
        document.getElementById("opts_nat_wis_sel_none").innerHTML = i18n.get("answer_notChosen");

        // Physik Grundkurs
        document.getElementById("opts_nat_wis_sel_phy").innerHTML = cc.fach[7].getFullName();

        // Physik Leistungskurs
        document.getElementById("opts_nat_wis_sel_phy_lk").innerHTML = i18n.get("answer_physikLk");

        // Biologie
        // standard id would be: option_nat_wis_bio

        document.getElementById("opts_nat_wis_sel_bio").innerHTML = cc.fach[8].getFullName();

        if (cc.student.zweig == "de") {
            document.getElementById('opts_nat_wis_sel_bio').style.display = "initial";
        }

        // Chemie
        // standard id would be: option_nat_wis_ch

        document.getElementById("opts_nat_wis_sel_ch").innerHTML = cc.fach[9].getFullName();

        if (cc.student.zweig == "de") {
            document.getElementById('opts_nat_wis_sel_ch').style.display = "initial";
        }

        // select top (label) entry
        document.getElementById("opts_nat_wis").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_nat_wis").disabled = true

        /* opts_ges_wis (6) --------------------------------------------- */

        document.getElementById("options_ges_wis_label").innerHTML = i18n.get("question_optionGesWis");

        document.getElementById("opts_ges_wis_sel_choose").innerHTML = i18n.get("answer_toChoose");

        // nicht gewählt
        document.getElementById("opts_ges_wis_sel_none").innerHTML = i18n.get("answer_notChosen");

        // Erdkunde
        document.getElementById("opts_ges_wis_sel_ek").innerHTML = cc.fach[16].getFullName();

        // Ethik (oder Religion)
        document.getElementById("opts_ges_wis_sel_eth").innerHTML = cc.fach[17].getFullName();

        // select top (label) entry
        document.getElementById("opts_ges_wis").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("opts_ges_wis").disabled = true

    }
}

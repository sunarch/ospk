/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function options_setup() {

    document.getElementById('options_title').innerHTML = i18n.get("options_title");

    /* wahlArt (1) -------------------------------------------------- */

    document.getElementById("label_wahl_art").innerHTML = i18n.get("question_wahlArt");

    document.getElementById("wahl_art_choose").innerHTML = i18n.get("answer_toChoose");

    // Bildende Kunst
    document.getElementById("wahl_art_arts").innerHTML = cc.fach[12].getFullName();

    // Musik
    document.getElementById("wahl_art_music").innerHTML = cc.fach[13].getFullName();

    // select top (label) entry
    document.getElementById("wahlArt").options.selectedIndex = 0

    // ensure disabled
    document.getElementById("wahlArt").disabled = true

    /* 2 Pflichtwahlen nur für den deutschen Zweig ------------------ */

    if (cc.student.zweig == "de") {

        /* deWahlLang (2) ------------------------------------------- */

        document.getElementById("de_wahl_lang").style.display = "table-row";

        document.getElementById("label_de_wahl_lang").innerHTML = i18n.get("question_deWahlLang");

        document.getElementById("de_wahl_lang_choose").innerHTML = i18n.get("answer_toChoose");

        // UZ
        document.getElementById("de_wahl_lang_uz").innerHTML = cc.fach[2].getFullName();

        // Französisch
        document.getElementById("de_wahl_lang_fra").innerHTML = cc.fach[4].getFullName();

        // select top (label) entry
        document.getElementById("deWahlLang").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("deWahlLang").disabled = true

        /* deWahlNatWis (3) ----------------------------------------- */

        document.getElementById("de_wahl_nat_wis").style.display = "table-row";

        document.getElementById("label_de_wahl_nat_wis").innerHTML = i18n.get("question_deWahlNatWis");

        document.getElementById("de_wahl_nat_wis_choose").innerHTML = i18n.get("answer_toChoose");

        // Physik und Biologie
        document.getElementById("de_wahl_nat_wis_phy_bio").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[8].getFullName();

        // Physik und Chemie
        document.getElementById("de_wahl_nat_wis_phy_ch").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[9].getFullName();

        // Biologie und Chemie
        document.getElementById("de_wahl_nat_wis_bio_ch").innerHTML = cc.fach[8].getFullName() + " und " + cc.fach[9].getFullName();

        // select top (label) entry
        document.getElementById("deWahlNatWis").options.selectedIndex = 0

        // ensure disabled
        document.getElementById("deWahlNatWis").disabled = true

    }

    /* optionLang (4) ----------------------------------------------- */

    document.getElementById("label_option_lang").innerHTML = i18n.get("question_optionLang");

    document.getElementById("option_lang_choose").innerHTML = i18n.get("answer_toChoose");

    // nicht gewählt
    document.getElementById("option_lang_none").innerHTML = i18n.get("answer_notChosen");

    // Französisch (hidden by default)
    document.getElementById("option_lang_fra").innerHTML = cc.fach[4].getFullName();

    if (cc.student.zweig == "hu") {
        document.getElementById('option_lang_fra').style.display = "initial";
    }

    // Spanisch
    document.getElementById("option_lang_spa").innerHTML = cc.fach[5].getFullName();

    // select top (label) entry
    document.getElementById("optionLang").options.selectedIndex = 0

    // ensure disabled
    document.getElementById("optionLang").disabled = true

    /* optionNatWis (5) --------------------------------------------- */

    document.getElementById("label_option_nat_wis").innerHTML = i18n.get("question_optionNatWis");

    document.getElementById("option_nat_wis_choose").innerHTML = i18n.get("answer_toChoose");

    // nicht gewählt
    document.getElementById("option_nat_wis_none").innerHTML = i18n.get("answer_notChosen");

    // Physik Grundkurs
    document.getElementById("fluidOptionPhy").innerHTML = cc.fach[7].getFullName();

    // Physik Leistungskurs
    document.getElementById("option_nat_wis_phy_lk").innerHTML = i18n.get("answer_physikLk");

    // Biologie
    // standard id would be: option_nat_wis_bio

    document.getElementById("fluidOptionBio").innerHTML = cc.fach[8].getFullName();

    if (cc.student.zweig == "de") {
        document.getElementById('fluidOptionBio').style.display = "initial";
    }

    // Chemie
    // standard id would be: option_nat_wis_ch

    document.getElementById("fluidOptionCh").innerHTML = cc.fach[9].getFullName();

    if (cc.student.zweig == "de") {
        document.getElementById('fluidOptionCh').style.display = "initial";
    }

    // select top (label) entry
    document.getElementById("optionNatWis").options.selectedIndex = 0

    // ensure disabled
    document.getElementById("optionNatWis").disabled = true

    /* optionGesWis (6) --------------------------------------------- */

    document.getElementById("label_option_ges_wis").innerHTML = i18n.get("question_optionGesWis");

    document.getElementById("option_ges_wis_choose").innerHTML = i18n.get("answer_toChoose");

    // nicht gewählt
    document.getElementById("option_ges_wis_none").innerHTML = i18n.get("answer_notChosen");

    // Erdkunde
    document.getElementById("option_ges_wis_ek").innerHTML = cc.fach[16].getFullName();

    // Ethik (oder Religion)
    document.getElementById("option_ges_wis_eth").innerHTML = cc.fach[17].getFullName();

    // select top (label) entry
    document.getElementById("optionGesWis").options.selectedIndex = 0

    // ensure disabled
    document.getElementById("optionGesWis").disabled = true

}

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
        document.getElementById("opts_art").disabled = false;

        document.getElementById('options').style.display = "block";
    }
    
    // 1
    this.selectArt = function(s_value) {
        
        document.getElementById("opts_art").disabled = true;
        
        cc.student.wahlArt = s_value;
        cc.optsready[1] = true;

        switch(cc.student.wahlArt) {

            case "12": // Bildende Kunst
                cc.fach[13].active = false;
                break;

            case "13": // Musik
                cc.fach[12].active = false;
                break;

            default:
                break;
        }

        if (cc.student.zweig == "de") {
            document.getElementById("opts_de_lang").disabled = false;
        }
        else if (cc.student.zweig == "hu") {
            document.getElementById("opts_lang").disabled = false;

        }
    }
    
    // 2
    this.selectDeLang = function(s_value) {
        
        document.getElementById("opts_de_lang").disabled = true;
        
        cc.student.deWahlLang = s_value;
        cc.optsready[2] = true;

        switch(cc.student.deWahlLang) {

            case "2": // UZ
                cc.fach[4].active = false;
                break;

            case "4": // Französisch
                cc.fach[2].active = false;
                break;

            default:
                break;
        }

        document.getElementById("opts_de_nat_wis").disabled = false;
    }
    
    // 3
    this.selectDeNatWis = function(s_value) {
        
        document.getElementById("opts_de_nat_wis").disabled = true;
        
        cc.student.deWahlNatWis = s_value;
        cc.optsready[3] = true;

        switch(cc.student.deWahlNatWis) {

            case "78": // Physik und Biologie
                cc.fach[9].active = false;
                break;

            case "79": // Physik und Chemie
                cc.fach[8].active = false;
                break;

            case "89": // Biologie und Chemie
                cc.fach[7].active = false;
                break;

            default: break;
        }

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

        document.getElementById("opts_lang").disabled = false;
    }
    
    // 4
    this.selectLang = function(s_value) {
        
        document.getElementById("opts_lang").disabled = true;
        
        cc.student.optionLang = s_value;
        cc.optsready[4] = true;

        switch(cc.student.optionLang) {

            case "4": // Französisch
                cc.fach[5].active = false;
                break;

            case "5": // Spanisch
                if (cc.student.zweig == "hu") {
                    cc.fach[4].active = false;
                }
                break;

            default:
            case "0":
                if (cc.student.zweig == "hu") {
                    cc.fach[4].active = false;
                }
                cc.fach[5].active = false;
                break;
        }

        document.getElementById("opts_nat_wis").disabled = false;
    }
    
    // 5
    this.selectNatWis = function(s_value) {
        
        document.getElementById("opts_nat_wis").disabled = true;
        
        cc.student.optionNatWis = s_value;
        cc.optsready[5] = true;

        switch(cc.student.optionNatWis) {

            case "7": // Physik Grundkurs
                if (cc.student.zweig == "de") {
                    cc.fach[7].active = true;
                }
                break;

            case "7+": // Physik Leistungskurs
                if (cc.student.zweig == "de") {
                    cc.fach[7].active = true;
                }
                cc.student.physikLk = true;
                break;

            case "8": // Biologie
                cc.fach[8].active = true;
                break;

            case "9": // Chemie
                cc.fach[9].active = true;
                break;

            default:
            case "0":
                // Beim deutschen Zweig wird das bereits bei "deWahlNatWis" geregelt
                if (cc.student.zweig == "hu") {
                    cc.fach[7].active = false;
                }
                break;
        }

        document.getElementById("opts_ges_wis").disabled = false;
    }
    
    // 6
    this.selectGesWis = function(s_value) {
        
        document.getElementById("opts_ges_wis").disabled = true;
        
        cc.student.optionGesWis = s_value;
        cc.optsready[6] = true;

        switch(cc.student.optionGesWis) {

            case "16": // Erdkunde
                cc.fach[17].active = false;
                break;

            case "17": // Ethik (oder Religion)
                cc.fach[16].active = false;
                break;

            default:
            case "0":
                cc.fach[16].active = false;
                cc.fach[17].active = false;
                break;
        }
        
        gui.grades.show();
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
            document.getElementById("opts_de_nat_wis_sel_phy_bio").innerHTML = cc.fach[7].getFullName() + " und " + cc.fach[8].getFullName();

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

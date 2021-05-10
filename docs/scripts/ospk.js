/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/* MAIN OBJECT constructor function ----------------------------------*/

function OberstufenPunkteKalkulator() {

    /* properties -*/

    // indicates whether the options have been selected
    this.optsready = ["option_completition", false, false, false, false, false, false];

    this.ergebnis_gesamt = 0;
    this.ergebnis_durchschnitt = "0";

    /* methods */

    this.calculate = function() {

        document.getElementById("button_calculate").value = i18n.get("recalculate");

        // Konvertierung der Notenwerte zu Nummern erfolgt bei der Dateneingabe

        this.bereichA.calculate();
        this.bereichC.calculate();
        this.bereichB.calculate();

        this.mark_results();

        // Gesamtergebnis

        this.ergebnis_gesamt = this.bereichA.ergebnis + this.bereichB.ergebnis + this.bereichC.ergebnis;

        this.ergebnis_durchschnitt = this.calculateAverage(this.ergebnis_gesamt)

        this.display('section_results', true);

    }

    this.calculateAverage = function(n_ergebnis_gesamt) {

        if (n_ergebnis_gesamt >= 823) {return "1.0";}
        if (n_ergebnis_gesamt >= 805) {return "1.1";}
        if (n_ergebnis_gesamt >= 787) {return "1.2";}
        if (n_ergebnis_gesamt >= 769) {return "1.3";}
        if (n_ergebnis_gesamt >= 751) {return "1.4";}
        if (n_ergebnis_gesamt >= 733) {return "1.5";}
        if (n_ergebnis_gesamt >= 715) {return "1.6";}
        if (n_ergebnis_gesamt >= 697) {return "1.7";}
        if (n_ergebnis_gesamt >= 679) {return "1.8";}
        if (n_ergebnis_gesamt >= 661) {return "1.9";}

        if (n_ergebnis_gesamt >= 643) {return "2.0";}
        if (n_ergebnis_gesamt >= 625) {return "2.1";}
        if (n_ergebnis_gesamt >= 607) {return "2.2";}
        if (n_ergebnis_gesamt >= 589) {return "2.3";}
        if (n_ergebnis_gesamt >= 571) {return "2.4";}
        if (n_ergebnis_gesamt >= 553) {return "2.5";}
        if (n_ergebnis_gesamt >= 535) {return "2.6";}
        if (n_ergebnis_gesamt >= 517) {return "2.7";}
        if (n_ergebnis_gesamt >= 499) {return "2.8";}
        if (n_ergebnis_gesamt >= 481) {return "2.9";}

        if (n_ergebnis_gesamt >= 463) {return "3.0";}
        if (n_ergebnis_gesamt >= 445) {return "3.1";}
        if (n_ergebnis_gesamt >= 427) {return "3.2";}
        if (n_ergebnis_gesamt >= 409) {return "3.3";}
        if (n_ergebnis_gesamt >= 391) {return "3.4";}
        if (n_ergebnis_gesamt >= 373) {return "3.5";}
        if (n_ergebnis_gesamt >= 355) {return "3.6";}
        if (n_ergebnis_gesamt >= 337) {return "3.7";}
        if (n_ergebnis_gesamt >= 319) {return "3.8";}
        if (n_ergebnis_gesamt >= 301) {return "3.9";}

        return "4.0";
    }

    this.display = function(what) {

        switch(what) {

            case "options":

                // What we hide
                document.getElementById('td_button_importData').style.display = "none";

                switch(cc.student.zweig) {

                    default: case "hu":
                        document.getElementById('text_zweig_titel_de').style.display = "none";
                        document.getElementById('text_zweig_fahne_de').style.display = "none";
                        break;

                    case "de":
                        document.getElementById('text_zweig_titel_hu').style.display = "none";
                        document.getElementById('text_zweig_fahne_hu').style.display = "none";
                        break;
                }

                // What we show
                options_setup();

                // enable first question
                document.getElementById("wahlArt").disabled = false

                document.getElementById('options').style.display = "block";

                break;

            case "section_inputs":
                if(this.optsready.indexOf(false) == -1) {
                    inputs_setup();
                    document.getElementById('grades').style.display = "block";
                    document.getElementById('exams').style.display = "block";
                    document.getElementById('buttons').style.display = "block";
                }
                break;

            case "section_results":
                results_setup();
                document.getElementById('results').style.display = "block";
                break;

            default:
                break;
        }
    }

    this.useOption = function(optionId,optionValue) {

        document.getElementById(optionId).disabled = true;

        switch(optionId) {

            case "wahlArt": // 1
                this.student.wahlArt = optionValue;
                this.optsready[1] = true;

                switch(this.student.wahlArt) {

                    case "12": // Bildende Kunst
                        this.fach[13].active = false;
                        break;

                    case "13": // Musik
                        this.fach[12].active = false;
                        break;

                    default:
                        break;
                }

                if (this.student.zweig == "de") {
                    document.getElementById("deWahlLang").disabled = false;
                }
                else if (this.student.zweig == "hu") {
                    document.getElementById("optionLang").disabled = false;

                }
                break;

            case "deWahlLang": // 2
                this.student.deWahlLang = optionValue;
                this.optsready[2] = true;

                switch(this.student.deWahlLang) {

                    case "2": // UZ
                        cc.fach[4].active = false;
                        break;

                    case "4": // Französisch
                        cc.fach[2].active = false;
                        break;

                    default:
                        break;
                }

                document.getElementById("deWahlNatWis").disabled = false;
                break;

            case "deWahlNatWis": // 3
                this.student.deWahlNatWis = optionValue;
                this.optsready[3] = true;

                switch(this.student.deWahlNatWis) {

                    case "78": // Physik und Biologie
                        this.fach[9].active = false;
                        break;

                    case "79": // Physik und Chemie
                        this.fach[8].active = false;
                        break;

                    case "89": // Biologie und Chemie
                        this.fach[7].active = false;
                        break;

                    default: break;
                }

                // disable already chosen options in optionNatWis

                // Physik (Grundkurs)
                if(this.fach[7].active) {
                    document.getElementById("fluidOptionPhy").disabled = true;
                }

                // Biologie
                if(this.fach[8].active) {
                    document.getElementById("fluidOptionBio").disabled = true;
                }

                // Chemie
                if(this.fach[9].active) {
                    document.getElementById("fluidOptionCh").disabled = true;
                }

                document.getElementById("optionLang").disabled = false;
                break;

            case "optionLang": // 4
                this.student.optionLang = optionValue;
                this.optsready[4] = true;

                switch(this.student.optionLang) {

                    case "4": // Französisch
                        this.fach[5].active = false;
                        break;

                    case "5": // Spanisch
                        if (this.student.zweig == "hu") {
                            this.fach[4].active = false;
                        }
                        break;

                    default:
                    case "0":
                        if (this.student.zweig == "hu") {
                            this.fach[4].active = false;
                        }
                        this.fach[5].active = false;
                        break;
                }

                document.getElementById("optionNatWis").disabled = false;

                break;

            case "optionNatWis": // 5
                this.student.optionNatWis = optionValue;
                this.optsready[5] = true;

                switch(this.student.optionNatWis) {

                    case "7": // Physik Grundkurs
                        if (cc.student.zweig == "de") {
                            this.fach[7].active = true;
                        }
                        break;

                    case "7+": // Physik Leistungskurs
                        if (cc.student.zweig == "de") {
                            this.fach[7].active = true;
                        }
                        this.student.physikLk = true;
                        break;

                    case "8": // Biologie
                        this.fach[8].active = true;
                        break;

                    case "9": // Chemie
                        this.fach[9].active = true;
                        break;

                    default:
                    case "0":
                        // Beim deutschen Zweig wird das bereits bei "deWahlNatWis" geregelt
                        if (cc.student.zweig == "hu") {
                            this.fach[7].active = false;
                        }
                        break;
                }

                document.getElementById("optionGesWis").disabled = false;
                break;

            case "optionGesWis": // 6
                this.student.optionGesWis = optionValue;
                this.optsready[6] = true;

                switch(this.student.optionGesWis) {

                    case "16": // Erdkunde
                        this.fach[17].active = false;
                        break;

                    case "17": // Ethik (oder Religion)
                        this.fach[16].active = false;
                        break;

                    default:
                    case "0":
                        this.fach[16].active = false;
                        this.fach[17].active = false;
                        break;
                }

                break;

            default:
                break;
        }
        this.display('section_inputs');
    }

    this.importData = function(importText) {

        var importArray = importText.split(",");

        for (n1 = 8; n1 < importArray.length; n1 = n1 + 1) {
            tempNum = new Number(importArray[n1]);
            importArray[n1] = tempNum.valueOf();
        }

        // Importiere Name
        this.student.name = importArray[0];
        document.getElementById("name_title").innerHTML = "Data loaded for: " + this.student.name;

        // Wahl des Zweigs
        this.student.set_zweig(importArray[1]);
        this.display('options');

        // Optionen
        this.useOption("wahlArt", importArray[2]);
        if (this.student.zweig == "de") {
            this.useOption("deWahlLang", importArray[3]);
            this.useOption("deWahlNatWis", importArray[4]);
        }
        this.useOption("optionLang", importArray[5]);
        this.useOption("optionNatWis", importArray[6]);
        this.useOption("optionGesWis", importArray[7]);

        // Inputs

        // Abiturfächer
        for (n1 = 1; n1 <= 4; n1 = n1 + 1) {
            this.abiFach[n1] = importArray[7 + n1];
        }

        // Abiturnoten
        for (n1 = 1; n1 <= 4; n1 = n1 + 1) {
            this.abiNote[n1] = importArray[11 + n1];
        }

        // Noten aller Fächer
        for (n1 = 1; n1 < this.fach.length; n1 = n1 + 1) {
            this.fach[n1].note[1] = importArray[15 + ((n1 - 1) * 4) + 1];
            this.fach[n1].note[2] = importArray[15 + ((n1 - 1) * 4) + 2];
            this.fach[n1].note[3] = importArray[15 + ((n1 - 1) * 4) + 3];
            this.fach[n1].note[4] = importArray[15 + ((n1 - 1) * 4) + 4];
        }
        this.applyValuesToInputFields();

        // Ergebnisse
        this.calculate();
        this.display('section_results',true);
    }

    this.exportData = function() {

        var exportArray = new Array();
        this.student.name = window.prompt(i18n.get("inputName"));

        exportArray.push(this.student.name);
        exportArray.push(this.student.zweig);
        exportArray.push(this.student.wahlArt);
        exportArray.push(this.student.deWahlLang);
        exportArray.push(this.student.deWahlNatWis);
        exportArray.push(this.student.optionLang);
        exportArray.push(this.student.optionNatWis);
        exportArray.push(this.student.optionGesWis);

        // Abiturfächer
        exportArray.push(this.abiFach[1]);
        exportArray.push(this.abiFach[2]);
        exportArray.push(this.abiFach[3]);
        exportArray.push(this.abiFach[4]);

        // Abiturnoten
        exportArray.push(this.abiNote[1]);
        exportArray.push(this.abiNote[2]);
        exportArray.push(this.abiNote[3]);
        exportArray.push(this.abiNote[4]);

        // Noten aller Fächer
        for (n1 = 1; n1 < this.fach.length; n1 = n1 + 1) {
            exportArray.push(this.fach[n1].note[1]);
            exportArray.push(this.fach[n1].note[2]);
            exportArray.push(this.fach[n1].note[3]);
            exportArray.push(this.fach[n1].note[4]);
        }

        // Export
        var exportText = exportArray.join();
        document.getElementById("exportLink").download = "dsb_ospk_" + this.student.name + ".txt";
        document.getElementById("exportLink").href = "data:text/plain;base64," + window.btoa(exportText);
    }

    this.applyValuesToInputFields = function() {

        if (this.student.zweig == "hu") {
            var abiFachWahlMin = 3;
        }
        else if (this.student.zweig == "de") {
            var abiFachWahlMin = 2;
            document.getElementById("deWahlLang").value = this.student.deWahlLang;
            document.getElementById("deWahlNatWis").value = this.student.deWahlNatWis;
        }

        document.getElementById("wahlArt").value = this.student.wahlArt;
        document.getElementById("optionLang").value = this.student.optionLang;
        document.getElementById("optionNatWis").value = this.student.optionNatWis;
        document.getElementById("optionGesWis").value = this.student.optionGesWis;

        for (n1 = abiFachWahlMin; n1 <= 4; n1 = n1 + 1) {
            document.getElementById("input_abiFach_" + n1).value = this.abiFach[n1];
        }

        for (n1 = 1; n1 <= 4; n1 = n1 + 1) {
            document.getElementById("input_abiNote_" + n1).value = this.abiNote[n1];
        }

        for (n1 = 1; n1 < this.fach.length; n1 = n1 + 1) {
            if (this.fach[n1].active) {
                for (n2 = 1; n2 <= 4; n2 = n2 + 1) {
                    document.getElementById("input_" + this.fach[n1].name + "_note_" + n2).value = this.fach[n1].note[n2];
                }
            }
        }
    }

    this.mark_results = function() {
        // reset Bereich B markings
        var field_id = "";

        for (n1 = 1; n1 < this.fach.length; n1 = n1 + 1) {
            if (this.fach[n1].active) {
                for  (n2 = 1; n2 <= 4; n2 = n2 + 1) {
                    field_id = "input_" + this.fach[n1].name + "_note_" + n2;
                    document.getElementById(field_id).style.backgroundColor = "#FFFFFF";
                }
            }
        }

        // set Bereich B markings
            for (n4 = 0; n4 < this.bereichB.all.length; n4 = n4 + 1) {
                field_id = "input_" + this.bereichB.all[n4].fachname + "_note_" + this.bereichB.all[n4].halbjahrno;
                document.getElementById(field_id).style.backgroundColor = "#FFA640";
            }
    }

    /* subobjects */

    this.student = new Student;
    this.bereichA = new BereichA;
    this.bereichB = new BereichB;
    this.bereichC = new BereichC;

    this.fach = [
        "Kursliste", // Fach(Kürzel, Typ)
        /* ID  1 */ new Fach("dt",  "deutsch"),                    /* Deutsch */
        /* ID  2 */ new Fach("ung", "ungarisch"),                  /* Ungarisch */
        /* ID  3 */ new Fach("eng", "fremdsprache"),               /* English */
        /* ID  4 */ new Fach("frz", "fremdsprache"),               /* Französisch */
        /* ID  5 */ new Fach("spa", "fremdsprache"),               /* Spanisch */
        /* ID  6 */ new Fach("mat", "mathematik"),                 /* Mathematik */
        /* ID  7 */ new Fach("phy", "naturwissentschaft"),         /* Physik */
        /* ID  8 */ new Fach("bio", "naturwissentschaft"),         /* Biologie */
        /* ID  9 */ new Fach("ch",  "naturwissentschaft"),         /* Chemie */
        /* ID 10 */ new Fach("ge",  "geschichte"),                 /* Geschichte */
        /* ID 11 */ new Fach("uge", "ung_geschichte"),             /* Ungarische Geschichte */
        /* ID 12 */ new Fach("bk",  "kunst_und_musik"),            /* Bildende Kunst */
        /* ID 13 */ new Fach("mus", "kunst_und_musik"),            /* Musik */
        /* ID 14 */ new Fach("soz", "gesellschaftswissentschaft"), /* Sozialkunde */
        /* ID 15 */ new Fach("spo", "sport"),                      /* Sport */
        /* ID 16 */ new Fach("ek",  "gesellschaftswissentschaft"), /* Erdkunde */
        /* ID 17 */ new Fach("eth", "gesellschaftswissentschaft")  /* Ethik (oder Religion) */
    ]
    this.abiFach = ["Kurs-IDs",0,0,0,0];
    this.abiNote = ["Noten",0,0,0,0];

    this.fachIdConvert = ["Kurs",
                          "dt",  "ung", "eng", "frz", "spa",
                          "mat", "phy", "bio", "ch",  "ge",
                          "uge", "bk",  "mus", "soz", "spo",
                          "ek",  "eth"]
}

/* SUBOBJECTS - constructors -----------------------------------------*/

function BereichA() {

    /* properties */

    this.ergebnis = 0;
    this.fach1Noten = 0;
    this.fach2Noten = 0;
    this.fach3Noten = 0;

    /* methods */

    this.calculate = function() {
        // 3 Noten in den schriftlichen Prüfungsfächern aus 11.1, 11.2 und 12.1
            this.fach1Noten = cc.fach[cc.abiFach[1]].note[1] + cc.fach[cc.abiFach[1]].note[2] + cc.fach[cc.abiFach[1]].note[3];
            this.fach2Noten = cc.fach[cc.abiFach[2]].note[1] + cc.fach[cc.abiFach[2]].note[2] + cc.fach[cc.abiFach[2]].note[3];
            this.fach3Noten = cc.fach[cc.abiFach[3]].note[1] + cc.fach[cc.abiFach[3]].note[2] + cc.fach[cc.abiFach[3]].note[3];
        this.ergebnis = 2 * (this.fach1Noten + this.fach2Noten + this.fach3Noten);
    }

}

function BereichC() {

    /* properties */

    this.ergebnis = 0;
    this.kursNoten = 0;
    this.pruefungsNoten = 0;

    /* methods */

    this.calculate = function() {
        // 4 Noten aus 12.2 in den Prüfungsfächern; Gewichtungsfaktor 1
            this.kursNoten = cc.fach[cc.abiFach[1]].note[4] + cc.fach[cc.abiFach[2]].note[4] + cc.fach[cc.abiFach[3]].note[4] + cc.fach[cc.abiFach[4]].note[4];
        // 4 Noten der Prüfungen; Gewichtungsfaktor 4
            this.pruefungsNoten = cc.abiNote[1] + cc.abiNote[2] + cc.abiNote[3] + cc.abiNote[4];

        this.ergebnis = (4 * this.pruefungsNoten) + this.kursNoten;
    }

}

function BereichB() {

    // init and reset method
    this.reset = function() {

        this.ergebnis = 0;
        this.fach4_3hj = 0;
        this.all = new Array();
        this.mat = new Array();
        this.ung = new Array();
        this.bk_mus = new Array();
        this.ge = [0,0,0,0];
        this.dge = new Array();
        this.uge = new Array();
        this.spo = new Array();
        this.geswis = new Array();
        this.frsp = new Array();
        this.natwis = new Array();
        this.fr_nw = new Array();
        this.rest = new Array();
        this.restCount = 19;
        this.ready_natwis = 0;
    }

    // initialization
    this.reset()

    // holdover from regular property definitions
    // TODO: why 22 and not 19 ?
    this.restCount = 22;

    /* methods */

    this.calculate = function() {

        this.reset();
        this.readValues();
        this.geschichte();
        this.selectGrades();

        // 3 Noten des mündlichen Prüfungsfachs aus 11.1, 11.2, 11.3
        for (n1 = 1; n1 <= 3; n1 = n1 + 1) {
            this.fach4_3hj = this.fach4_3hj + cc.fach[cc.abiFach[4]].note[n1];
        }

        // Summieren der Ergebnisse
        this.ergebnis = this.fach4_3hj;
        for (n3 = 0; n3 < this.all.length; n3 = n3 + 1) {
            this.ergebnis = this.ergebnis + this.all[n3].note;
        }
    }

    this.readValues = function() {

        for (n1 = 1; n1 < cc.fach.length; n1 = n1 + 1) {

            if (cc.abiFach.indexOf(n1) == -1 && cc.fach[n1].active == true) {
                switch (cc.fach[n1].type) {

                    case "mathematik":
                        this.mat.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.mat.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.mat.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.mat.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "ungarisch":
                        this.ung.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.ung.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.ung.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.ung.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "kunst_und_musik":
                        this.bk_mus.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.bk_mus.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.bk_mus.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.bk_mus.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "geschichte":
                        this.dge.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.dge.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.dge.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.dge.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "ung_geschichte":
                        this.uge.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.uge.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.uge.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.uge.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "sport":
                        this.spo.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.spo.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.spo.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.spo.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "fremdsprache":
                        this.frsp.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.frsp.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.frsp.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.frsp.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "naturwissentschaft":
                        this.natwis.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.natwis.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.natwis.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.natwis.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "gesellschaftswissentschaft":
                        this.geswis.push(new BbHalbjahr(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.geswis.push(new BbHalbjahr(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.geswis.push(new BbHalbjahr(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.geswis.push(new BbHalbjahr(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    default:
                        break;
                }
            }
        }
    }

    this.geschichte = function() {

        // Auch im ungarischen Zweig wird ungarische Geschichte für den deutschen Abiturzeugnis nicht beachtet
        this.ge = this.dge;
    }

    this.compareByNote = function(a, b) {

        return b.note - a.note
    }

    this.selectGrades = function() {

        this.bk_mus.sort(this.compareByNote);
        this.ge.sort(this.compareByNote);
        this.spo.sort(this.compareByNote);
        this.geswis.sort(this.compareByNote);
        this.frsp.sort(this.compareByNote);
        this.natwis.sort(this.compareByNote);
        this.fr_nw.sort(this.compareByNote);

        if (cc.fach[cc.abiFach[3]].type == "naturwissentschaft") {
            this.ready_natwis = 1;
            if (cc.fach[cc.abiFach[4]].type == "naturwissentschaft") {
                this.ready_natwis = 2;
            }
        }
        else if (cc.fach[cc.abiFach[4]].type == "naturwissentschaft") {
            this.ready_natwis = 1;
        }

        // 4 | Mathematik
        if (this.mat.length == 4) {
            this.all.push(this.mat[0]);
            this.all.push(this.mat[1]);
            this.all.push(this.mat[2]);
            this.all.push(this.mat[3]);
        }

        // mindestens | 3 | Musik oder Kunst
        this.all = this.all.concat(this.bk_mus.slice(0, 3));
        this.rest.push(this.bk_mus[3]);

        // mindestens | 2 | Geschichte
        this.all = this.all.concat(this.ge.slice(0, 2));
        this.geswis = this.geswis.concat(this.ge.slice(2));

        // mindestens | 2 | zusätzlich aus Geschichte, Sozialkunde, Ethik, Erdkunde
        this.geswis.sort(this.compareByNote);
        this.all = this.all.concat(this.geswis.slice(0, 2));
        this.rest = this.rest.concat(this.geswis.slice(2));

        // DT-ZWEIG: mindestens | 4 | aus Fremdsprachen  ||  UNG-ZWEIG: alle 4 aus Ungarisch: bereits eingerechnet
        if (cc.student.zweig == "de") {
            this.frsp = this.all.concat(this.ung);
            this.frsp.sort(this.compareByNote);
            this.all = this.all.concat(this.frsp.slice(0, 4));
            this.fr_nw = this.fr_nw.concat(this.frsp.slice(4));
        }
        else if (cc.student.zweig == "hu") {
            this.fr_nw = this.fr_nw.concat(this.frsp);
        }

        switch (this.ready_natwis) {

            case 2:
                // mindestens | 4 | aus Naturwissentschaften
                // schon eingerechnet
                this.fr_nw = this.fr_nw.concat(this.natwis);

                // mindestens | 6 | zusätzlich aus Fremdsprachen oder Naturwissentschaften
                // 4 aus Naturwissentschaften schon eingerechnet
                this.fr_nw.sort(this.compareByNote);
                this.all = this.all.concat(this.fr_nw.slice(0, 2));
                this.rest = this.rest.concat(this.fr_nw.slice(2));

                break;

            case 1:
                // mindestens | 4 | aus Naturwissentschaften
                // schon eingerechnet
                this.fr_nw = this.fr_nw.concat(this.natwis);

                // mindestens | 6 | zusätzlich aus Fremdsprachen oder Naturwissentschaften
                this.fr_nw.sort(this.compareByNote);
                this.all = this.all.concat(this.fr_nw.slice(0, 6));
                this.rest = this.rest.concat(this.fr_nw.slice(6));

                break;

            default:
            case 0:
                // mindestens | 4 | aus Naturwissentschaften
                this.all = this.all.concat(this.natwis.slice(0, 4));
                this.fr_nw = this.fr_nw.concat(this.natwis.slice(4));

                // mindestens | 6 | zusätzlich aus Fremdsprachen oder Naturwissentschaften
                this.fr_nw.sort(this.compareByNote);
                this.all = this.all.concat(this.fr_nw.slice(0, 6));
                this.rest = this.rest.concat(this.fr_nw.slice(6));

                break;
        }

        // Restliche Fächer

        // Sport
        this.rest = this.rest.concat(this.spo.slice(0, 3));

        // Auswahl der restlichen Noten
        this.rest.sort(this.compareByNote);
        if (this.all.length < this.restCount) {
            this.restCount = this.restCount - this.all.length;
            this.all = this.all.concat(this.rest.slice(0, this.restCount));
        }
        else {this.restCount = 0;}
    }

}

function Student() {

    /* properties */

    this.name = "";
    this.zweig = "";

    this.physikLk = false;

    this.wahlArt = "0";
    this.deWahlLang = "0";
    this.deWahlNatWis = "0";
    this.optionLang = "0";
    this.optionNatWis = "0";
    this.optionGesWis = "0";

    /* methods */

    this.set_zweig = function(zweig) {
        if(cc.student.zweig == "") {
            cc.abiFach[1] = 1;
            switch(zweig) {

                case "de":
                    cc.student.zweig = "de";
                    i18n.set_lang(cc.student.zweig)
                    cc.fach[11].active = false;
                    break;

                default:
                case "hu":
                    cc.student.zweig = "hu";
                    i18n.set_lang(cc.student.zweig)
                    cc.fach[14].active = false;
                    cc.abiFach[2] = 2;
                    cc.optsready[2] = true;
                    cc.optsready[3] = true;
                    break;
            }
        }
        else {
            return false;
        }
    }
}

function Fach(name, type) {

    /* properties */

    this.name = name;
    this.type = type;
    this.active = true;
    this.note = [0,0,0,0,0];

    /* methods */

    this.getFullName = function() {
        return i18n.getSubject(this.name);
    }

}

function BbHalbjahr(fachname, halbjahrno, note) {

    /* properties */

    this.fachname = fachname;
    this.halbjahrno = halbjahrno;
    this.note = note;

    this.names = ["11.1", "11.2", "12.1", "12.2"]

    /* methods */

    this.getName = function() {
        return this.names[this.halbjahrno - 1];
    }

}

/* deprecated functions ----------------------------------------------*/

/*
function changeinputbg(what, isactive) {
    if (isactive == "active") {
        what.style.backgroundColor='#FFA640';
    }
    else if (isactive == "inactive") {
        what.style.backgroundColor='#FFFFFF';
    }
    else {
        what.style.backgroundColor='#000000';
    }
}
*/

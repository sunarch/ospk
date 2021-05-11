/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/* MAIN OBJECT constructor function ----------------------------------*/

function OberstufenPunkteKalkulator() {

    this.ergebnis_gesamt = 0;
    this.ergebnis_durchschnitt = "0";

    this.calculate = function() {

        document.getElementById("button_calculate").value = i18n.get("recalculate");

        // Konvertierung der Notenwerte zu Nummern erfolgt bei der Dateneingabe

        this.bereichA.calculate();
        this.bereichC.calculate();
        this.bereichB.calculate();

        this.mark_results();

        this.ergebnis_gesamt = this.bereichA.ergebnis + this.bereichB.ergebnis + this.bereichC.ergebnis;

        this.ergebnis_durchschnitt = this.calculateAverage(this.ergebnis_gesamt)

        gui.results.show();

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

    this.importData = function(importText) {

        var importArray = importText.split(",");

        for (n1 = 8; n1 < importArray.length; n1 = n1 + 1) {
            tempNum = new Number(importArray[n1]);
            importArray[n1] = tempNum.valueOf();
        }

        this.student.name = importArray[0];

        this.student.set_zweig(importArray[1]);
        gui.options.show();

        gui.options.selectArt(importArray[2]);
        if (this.student.zweig == "de") {
            gui.options.selectDeLang(importArray[3]);
            gui.options.selectDeNatWis(importArray[4]);
        }
        gui.options.selectLang(importArray[5]);
        gui.options.selectNatWis(importArray[6]);
        gui.options.selectGesWis(importArray[7]);

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

        this.calculate();

        gui.results.show();
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

        var exportText = exportArray.join();
        document.getElementById("buttons_link_export").download = "dsb_ospk_" + this.student.name + ".txt";
        document.getElementById("buttons_link_export").href = "data:text/plain;base64," + window.btoa(exportText);
        document.getElementById("buttons_link_export").type = "text/plain";
        document.getElementById("buttons_link_export").click()
    }

    this.applyValuesToInputFields = function() {
        
        o_options = {
            "art": this.student.wahlArt,
            "de_lang": this.student.deWahlLang,
            "de_nat_wis": this.student.deWahlNatWis,
            "lang": this.student.optionLang,
            "nat_wis": this.student.optionNatWis,
            "ges_wis": this.student.optionGesWis
        }
        
        gui.options.setFields(o_options)

        if (this.student.zweig == "de") {
            document.getElementById("ex_2_subj").value = this.abiFach[2];
        }
        document.getElementById("ex_3_subj").value = this.abiFach[3];
        document.getElementById("ex_4_subj").value = this.abiFach[4];

        for (n1 = 1; n1 <= 4; n1 = n1 + 1) {
            document.getElementById("exams_" + n1 + "_grade").value = this.abiNote[n1];
        }

        for (n1 = 1; n1 < this.fach.length; n1 = n1 + 1) {
            if (this.fach[n1].active) {
                for (n2 = 1; n2 <= 4; n2 = n2 + 1) {
                    document.getElementById("grades_" + this.fach[n1].name + "_sem_" + n2).value = this.fach[n1].note[n2];
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
                    field_id = "grades_" + this.fach[n1].name + "_sem_" + n2;
                    document.getElementById(field_id).style.backgroundColor = "#FFFFFF";
                }
            }
        }

        // set Bereich B markings
        for (n4 = 0; n4 < this.bereichB.all.length; n4 = n4 + 1) {
            field_id = "grades_" + this.bereichB.all[n4].fachname + "_sem_" + this.bereichB.all[n4].halbjahrno;
            document.getElementById(field_id).style.backgroundColor = "#FFA640";
        }
    }

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

    this.ergebnis = 0;
    this.fach1Noten = 0;
    this.fach2Noten = 0;
    this.fach3Noten = 0;

    this.calculate = function() {
        // 3 Noten in den schriftlichen Prüfungsfächern aus 11.1, 11.2 und 12.1
            this.fach1Noten = cc.fach[cc.abiFach[1]].note[1] + cc.fach[cc.abiFach[1]].note[2] + cc.fach[cc.abiFach[1]].note[3];
            this.fach2Noten = cc.fach[cc.abiFach[2]].note[1] + cc.fach[cc.abiFach[2]].note[2] + cc.fach[cc.abiFach[2]].note[3];
            this.fach3Noten = cc.fach[cc.abiFach[3]].note[1] + cc.fach[cc.abiFach[3]].note[2] + cc.fach[cc.abiFach[3]].note[3];
        this.ergebnis = 2 * (this.fach1Noten + this.fach2Noten + this.fach3Noten);
    }
}

function BereichC() {

    this.ergebnis = 0;
    this.kursNoten = 0;
    this.pruefungsNoten = 0;

    this.calculate = function() {
        // 4 Noten aus 12.2 in den Prüfungsfächern; Gewichtungsfaktor 1
            this.kursNoten = cc.fach[cc.abiFach[1]].note[4] + cc.fach[cc.abiFach[2]].note[4] + cc.fach[cc.abiFach[3]].note[4] + cc.fach[cc.abiFach[4]].note[4];
        // 4 Noten der Prüfungen; Gewichtungsfaktor 4
            this.pruefungsNoten = cc.abiNote[1] + cc.abiNote[2] + cc.abiNote[3] + cc.abiNote[4];

        this.ergebnis = (4 * this.pruefungsNoten) + this.kursNoten;
    }
}

function BereichB() {

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

    this.name = "";
    this.zweig = "";

    this.physikLk = false;

    this.wahlArt = "0";
    this.deWahlLang = "0";
    this.deWahlNatWis = "0";
    this.optionLang = "0";
    this.optionNatWis = "0";
    this.optionGesWis = "0";

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
                    break;
            }
        }
        else {
            return false;
        }
    }
}

function Fach(name, type) {

    this.name = name;
    this.type = type;
    this.active = true;
    this.note = [0,0,0,0,0];

    this.getFullName = function() {
        return i18n.getSubject(this.name);
    }
}

function BbHalbjahr(fachname, halbjahrno, note) {

    this.fachname = fachname;
    this.halbjahrno = halbjahrno;
    this.note = note;

    this.names = ["11.1", "11.2", "12.1", "12.2"]

    this.getName = function() {
        return this.names[this.halbjahrno - 1];
    }
}

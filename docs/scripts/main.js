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

        // Konvertierung der Notenwerte zu Nummern erfolgt bei der Dateneingabe

        this.bereichA.calculate();
        this.bereichC.calculate();
        this.bereichB.calculate();

        this.ergebnis_gesamt = this.bereichA.ergebnis + this.bereichB.ergebnis + this.bereichC.ergebnis;

        this.ergebnis_durchschnitt = this.calculateAverage(this.ergebnis_gesamt)
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

        this.student.name = importArray[0];

        this.student.set_zweig(importArray[1]);

        // separate property for "Physik Leistungskurs" in natWis
        if (importArray[6] == "7+") {
            cc.student.physikLk = true;
            importArray[6] = "7";
        }

        for (n1 = 2; n1 < importArray.length; n1 = n1 + 1) {
            tempNum = new Number(importArray[n1]);
            importArray[n1] = tempNum.valueOf();
        }

        this.student.setOption("art", this.fachIdConvert[importArray[2]]);
        this.student.setOption("deLang", this.fachIdConvert[importArray[3]]);
        this.student.setOption("deNatWis", this.fachIdConvert[importArray[4]]);
        this.student.setOption("lang", this.fachIdConvert[importArray[5]]);
        this.student.setOption("natWis", this.fachIdConvert[importArray[6]]);
        this.student.setOption("gesWis", this.fachIdConvert[importArray[7]]);

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
    }

    this.exportData = function() {

        var exportArray = new Array();
        this.student.name = window.prompt(i18n.get("inputName"));

        exportArray.push(this.student.name);
        exportArray.push(this.student.zweig);

        exportArray.push(this.fachIdConvert.indexOf(this.student.getOption("art")));
        exportArray.push(this.fachIdConvert.indexOf(this.student.getOption("deLang")));
        exportArray.push(this.fachIdConvert.indexOf(this.student.getOption("deNatWis")));
        exportArray.push(this.fachIdConvert.indexOf(this.student.getOption("lang")));

        var s_natwis = this.fachIdConvert.indexOf(this.student.getOption("natWis"));
        // "Physik Leistungskurs" addon for "phy"
        if (this.student.getOption("natWis") == "phy" && cc.student.physikLk == true) {
            s_natwis = s_natwis + "+"
        }
        exportArray.push(s_natwis);

        exportArray.push(this.fachIdConvert.indexOf(this.student.getOption("gesWis")));

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

        return {
            name: this.student.name,
            exportText: exportArray.join()
        };

    }

    this.applyValuesToInputFields = function() {

        gui.options.setFields(this.student.getOptions());

        a_exams = [
            {
                subject: this.abiFach[1],
                grade: this.abiNote[1]
            },
            {
                subject: this.abiFach[2],
                grade: this.abiNote[2]
            },
            {
                subject: this.abiFach[3],
                grade: this.abiNote[3]
            },
            {
                subject: this.abiFach[4],
                grade: this.abiNote[4]
            }
        ];

        gui.exams.setFields(a_exams);

        a_subjects = [null, null, null, null, null,
                      null, null, null, null, null,
                      null, null, null, null, null,
                      null, null];

        for (n1 = 0; n1 < (this.fach.length - 1); n1 = n1 + 1) {
            o_subj = {};
            o_subj.code = this.fach[n1 + 1].name;
            o_subj.grades = [0, 0, 0, 0];

            for (n2 = 0; n2 < 4; n2 = n2 + 1) {
                o_subj.grades[n2] = this.fach[n1 + 1].note[n2 + 1];
            }

            a_subjects[n1] = o_subj;
        }

        gui.grades.setFields(a_subjects);
    }

    this.student = new Student();
    this.bereichA = new BereichA();
    this.bereichB = new BereichB();
    this.bereichC = new BereichC();

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
    ];

    this.abiFach = ["Kurs-IDs",0,0,0,0];
    this.abiNote = ["Noten",0,0,0,0];

    this.fachIdConvert = ["none",
                          "dt",  "ung", "eng", "frz", "spa",
                          "mat", "phy", "bio", "ch",  "ge",
                          "uge", "bk",  "mus", "soz", "spo",
                          "ek",  "eth"]
}

dataSubjectTypes = {
    deutsch:                    "deutsch",
    ungarisch:                  "ungarisch",
    fremdsprache:               "fremdsprache",
    mathematik:                 "mathematik",
    naturwissentschaft:         "naturwissentschaft",
    geschichte:                 "geschichte",
    ung_geschichte:             "ung_geschichte",
    kunst_und_musik:            "kunst_und_musik",
    gesellschaftswissentschaft: "gesellschaftswissentschaft",
    sport:                      "sport"
};

dataSubjects = {
    /* Deutsch */
    "dt":  {type: dataSubjectTypes.deutsch},

    /* Ungarisch */
    "ung": {type: dataSubjectTypes.ungarisch},

    /* English */
    "eng": {type: dataSubjectTypes.fremdsprache},

    /* Französisch */
    "frz": {type: dataSubjectTypes.fremdsprache},

    /* Spanisch */
    "spa": {type: dataSubjectTypes.fremdsprache},

    /* Mathematik */
    "mat": {type: dataSubjectTypes.mathematik},

    /* Physik */
    "phy": {type: dataSubjectTypes.naturwissentschaft},

    /* Biologie */
    "bio": {type: dataSubjectTypes.naturwissentschaft},

    /* Chemie */
    "ch":  {type: dataSubjectTypes.naturwissentschaft},

    /* Geschichte */
    "ge":  {type: dataSubjectTypes.geschichte},

    /* Ungarische Geschichte */
    "uge": {type: dataSubjectTypes.ung_geschichte},

    /* Bildende Kunst */
    "bk":  {type: dataSubjectTypes.kunst_und_musik},

    /* Musik */
    "mus": {type: dataSubjectTypes.kunst_und_musik},

    /* Sozialkunde */
    "soz": {type: dataSubjectTypes.gesellschaftswissentschaft},

    /* Sport */
    "spo": {type: dataSubjectTypes.sport},

    /* Erdkunde */
    "ek":  {type: dataSubjectTypes.gesellschaftswissentschaft},

    /* Ethik (oder Religion) */
    "eth": {type: dataSubjectTypes.gesellschaftswissentschaft}
};

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
                        this.mat.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.mat.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.mat.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.mat.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "ungarisch":
                        this.ung.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.ung.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.ung.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.ung.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "kunst_und_musik":
                        this.bk_mus.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.bk_mus.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.bk_mus.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.bk_mus.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "geschichte":
                        this.dge.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.dge.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.dge.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.dge.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "ung_geschichte":
                        this.uge.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.uge.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.uge.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.uge.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "sport":
                        this.spo.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.spo.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.spo.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.spo.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "fremdsprache":
                        this.frsp.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.frsp.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.frsp.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.frsp.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "naturwissentschaft":
                        this.natwis.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.natwis.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.natwis.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.natwis.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
                        break;

                    case "gesellschaftswissentschaft":
                        this.geswis.push(new SemesterBereichB(cc.fach[n1].name, 1, cc.fach[n1].note[1]));
                        this.geswis.push(new SemesterBereichB(cc.fach[n1].name, 2, cc.fach[n1].note[2]));
                        this.geswis.push(new SemesterBereichB(cc.fach[n1].name, 3, cc.fach[n1].note[3]));
                        this.geswis.push(new SemesterBereichB(cc.fach[n1].name, 4, cc.fach[n1].note[4]));
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

    this._options = {
        art: undefined,
        deLang: undefined,
        deNatWis: undefined,
        lang: undefined,
        natWis: undefined,
        gesWis: undefined
    };

    this.getOptions = function() {
        return this._options;
    }

    this.getOption = function(s_key) {
        return this._options[s_key];
    }

    this.setOption = function(s_key, s_value) {
        this._options[s_key] = s_value;
    }

    this.subjects = {};

    for (const s_subjectCode in dataSubjects) {
        this.subjects[s_subjectCode] = new Subject(s_subjectCode);
    }

    this.getSubject = function(s_subjectCode) {

        return this.subjects[s_subjectCode];
    }

    this.setSubjectActive = function(s_subjectCode, b_active) {

        if (b_active === true) {
            this.subjects[s_subjectCode].enable();
            return;
        }

        if (b_active === false) {
            this.subjects[s_subjectCode].disable();
            return;
        }

        console.log("Student.setSubjectActive neither true nor false");
    }

    this.setSubjectGrade = function(s_subjectCode, i_sem, i_grade) {

        this.subjects[s_subjectCode].setGrade(i_sem, i_grade);
    }

    this.exams = [null, null, null, null];

    this.getExam = function(i_exam) {

        return this.exams[i_exam - 1];
    }

    this.setExamSubject = function(i_exam, s_subjectCode) {

        this.exams[i_exam - 1] = new Exam(s_subjectCode);
    }

    this.setExamGrade = function(i_exam, i_grade) {

        this.exams[i_exam - 1].setGrade(i_grade);
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

function Subject(s_code) {

    this._code = s_code;
    this._active = true;
    this._grades = [0, 0, 0, 0];

    this.getCode = function() {

        return this._code;
    }

    this.isActive = function() {

        return this._active;
    }

    this.enable = function() {

        this._active = true;
    }

    this.disable = function() {

        this._active = false;
    }

    this.getName = function() {

        return i18n.getSubject(this._code);
    }

    this.getType = function() {

        return cc.subjects[this._code].type;
    }

    this.getGrade = function(i_sem) {

        return this._grades[i_sem - 1];
    }

    this.setGrade = function(i_sem, i_grade) {

        this._grades[i_sem - 1] = i_grade;
    }
}

function Exam(s_subj) {

    this._subjectCode = s_subj;
    this._grade = i_grade;

    this.getSubjCode = function() {

        return this._subjectCode;
    }

    this.getGrade = function() {

        return this._grade;
    }

    this.setGrade = function(i_grade) {

        this._grade = i_grade;
    }
}

function SemesterBereichB(fachname, halbjahrno, note) {

    this.fachname = fachname;
    this.halbjahrno = halbjahrno;
    this.note = note;

    this.names = ["11.1", "11.2", "12.1", "12.2"]

    this.getName = function() {

        return this.names[this.halbjahrno - 1];
    }
}

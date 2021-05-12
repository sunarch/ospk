/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

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

    this.setOptionArt = function(s_value) {
        this._options['art'] = s_value;

        // Bildende Kunst
        if (s_value == "bk") {
            // Musik
            cc.fach[13].active = false;
            this.setSubjectActive("mus", false);
        }

        // Musik
        if (s_value == "mus") {
            // Bildende Kunst
            cc.fach[12].active = false;
            this.setSubjectActive("bk", false);
        }
    }

    this.setOptionDeLang = function(s_value) {
        this._options['deLang'] = s_value;

        // UZ
        if (s_value == "ung") {
            // Französisch
            cc.fach[4].active = false;
            this.setSubjectActive("frz", false);
        }

        // Französisch
        if (s_value == "frz") {
            // UZ
            cc.fach[2].active = false;
            this.setSubjectActive("ung", false);
        }
    }

    this.setOptionDeNatWis = function(s_value) {
        this._options['deNatWis'] = s_value;

        // not included: Physik
        if (s_value.indexOf("phy") == -1) {
            cc.fach[7].active = false;
            this.setSubjectActive("phy", false);
        }

        // not included: Biologie
        if (s_value.indexOf("bio") == -1) {
            cc.fach[8].active = false;
            this.setSubjectActive("bio", false);
        }

        // not included: Chemie
        if (s_value.indexOf("ch") == -1) {
            cc.fach[9].active = false;
            this.setSubjectActive("ch", false);
        }
    }

    this.setOptionLang = function(s_value) {
        this._options['lang'] = s_value;

        // Französisch
        if (s_value == "frz") {
            // Spanisch
            cc.fach[5].active = false;
            this.setSubjectActive("spa", false);
        }

        // Spanisch
        if (s_value == "spa") {
            // Französisch
            cc.fach[4].active = false;
            this.setSubjectActive("frz", false);
        }

        // none
        if (s_value == "none") {
            if (this.zweig == "hu") {
                // Französisch
                cc.fach[4].active = false;
                this.setSubjectActive("frz", false);
            }
            // Spanisch
            cc.fach[5].active = false;
            this.setSubjectActive("spa", false);
        }
    }

    this.setOptionNatWis = function(s_value) {
        this._options['natWis'] = s_value;

        // Physik Grundkurs
        if (s_value == "phy") {
            if (this.zweig == "de") {
                cc.fach[7].active = true;
                this.setSubjectActive("phy", true);
            }
        }

        // Physik Leistungskurs
        if (s_value == "phy_lk") {
            this.physikLk = true;
            // Physik
            cc.fach[7].active = true;
            this.setSubjectActive("phy", true);
        }

        // Biologie
        if (s_value == "bio") {
            cc.fach[8].active = true;
            this.setSubjectActive("bio", true);
        }

        // Chemie
        if (s_value == "ch") {
            cc.fach[9].active = true;
            this.setSubjectActive("ch", true);
        }

        // none
        if (s_value == "none") {
            // Beim deutschen Zweig wird das bereits bei "deWahlNatWis" geregelt
            if (this.zweig == "hu") {
                cc.fach[7].active = false;
                this.setSubjectActive("phy", false);
            }
        }
    }

    this.setOptionGesWis = function(s_value) {
        this._options['gesWis'] = s_value;

        // Erdkunde
        if (s_value == "ek") {
            // Ethik (oder Religion)
            cc.fach[17].active = false;
            this.setSubjectActive("eth", false);
        }

        // Ethik (oder Religion)
        if (s_value == "eth") {
            // Erdkunde
            cc.fach[16].active = false;
            this.setSubjectActive("ek", false);
        }

        // none
        if (s_value == "none") {

            // Erdkunde
            cc.fach[16].active = false;
            this.setSubjectActive("ek", false);

            // Ethik (oder Religion)
            cc.fach[17].active = false;
            this.setSubjectActive("eth", false);
        }
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

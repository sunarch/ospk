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
    }

    this.setOptionDeLang = function(s_value) {
        this._options['deLang'] = s_value;
    }

    this.setOptionDeNatWis = function(s_value) {
        this._options['deNatWis'] = s_value;
    }

    this.setOptionLang = function(s_value) {
        this._options['lang'] = s_value;
    }

    this.setOptionNatWis = function(s_value) {
        this._options['natWis'] = s_value;
    }

    this.setOptionGesWis = function(s_value) {
        this._options['gesWis'] = s_value;
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

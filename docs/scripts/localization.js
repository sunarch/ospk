/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function language_text() {
    /* properties */
        this._language = "hu";
        this._lang_index = 1;
    
        this.options_title = ["Optionen:","Opciók:"];
        this.question_wahlArt = ["Bildende Kunst oder Musik?","Mûvészeti tantárgy:"];
        this.question_deWahlLang = ["Pflichtwahlsprache:","Kötelezõen választható nyelv:"];
        this.question_deWahlNatWis = ["Pflichtwahl: Naturwissentschaftliches Fach:","Kötelezõen választható természettudományi tárgy:"];
        this.question_optionLang = ["Optional: Zusätzliches sprachliches Fach","Opcionális: További nyelvi tantárgy:"];
        this.question_optionNatWis = ["Optional: Zusätzliches naturwissentschaftliches Fach:","Opcionális: További természettudományi tárgy:"];
        this.question_optionGesWis = ["Optional: Zusätzliches gesellschaftswissentschaftliches Fach:","Opcionális: További társadalomtudományi tárgy:"];
        this.answer_toChoose = ["Wähle!","Válassz!"];
        this.answer_notChosen = ["Nicht gewählt.","Nincs"];
        this.answer_physikLk = ["Physik Leistungskurs","Fizika (fakultációval)"];
        this.grades1112_title = ["Noten aus den Klassen 11 und 12:","Jegyek a 11. és a 12. osztályból:"];
        this.grades1112_headers = [["Fächer","11.1","11.2","12.1","12.2"],
                                    ["Tantárgyak","11.1","11.2","12.1","12.2"]];
        this.examresults_title = ["Abiturfächer und Abiturnoten:","Vizsgatárgyak és a vizsgaeredmények:"];
        this.written = ["schriftlich","írásbeli"];
        this.oral = ["mündlich","szóbeli"];
        this.obligatory = ["vorgeschrieben","kötelezõ"];
        this.calculate = ["Berechnen!","Számítás!"];
        this.recalculate = ["Umrechnen!","Újraszámítás!"];
        this.inputName = ["Namen eingeben:","Adja meg a nevét:"];
        this.exportData = ["Daten exportieren","Adatok exportálása"];

    /* methods */
        this.set_lang = function(s_lang) {
            switch(s_lang) {

                case "de":
                    this._language = "de";
                    this._lang_index = 0;
                    break;

                default:
                case "hu":
                    this._language = "hu";
                    this._lang_index = 1;
                    break;
            }
        }
    
    }

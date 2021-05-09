/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function language_text() {
    /* properties */
        this._langToIndex = {
            "de": 0,
            "hu": 1
        };
    
        this._language = "hu";
        this._langIndex = this._langToIndex[this._language];
        
        
        this._strings = {
            "options_title":         ["Optionen:",
                                      "Opciók:"],
            "question_wahlArt":      ["Bildende Kunst oder Musik?",
                                      "Mûvészeti tantárgy:"],
            "question_deWahlLang":   ["Pflichtwahlsprache:",
                                      "Kötelezõen választható nyelv:"],
            "question_deWahlNatWis": ["Pflichtwahl: Naturwissentschaftliches Fach:",
                                      "Kötelezõen választható természettudományi tárgy:"],
            "question_optionLang":   ["Optional: Zusätzliches sprachliches Fach",
                                      "Opcionális: További nyelvi tantárgy:"],
            "question_optionNatWis": ["Optional: Zusätzliches naturwissentschaftliches Fach:",
                                      "Opcionális: További természettudományi tárgy:"],
            "question_optionGesWis": ["Optional: Zusätzliches gesellschaftswissentschaftliches Fach:",
                                      "Opcionális: További társadalomtudományi tárgy:"],
            "answer_toChoose":       ["Wähle!",
                                      "Válassz!"],
            "answer_notChosen":      ["Nicht gewählt.",
                                      "Nincs"],
            "answer_physikLk":       ["Physik Leistungskurs",
                                      "Fizika (fakultációval)"],
            "grades1112_title":      ["Noten aus den Klassen 11 und 12:",
                                      "Jegyek a 11. és a 12. osztályból:"],
            "grades1112_headers":    [["Fächer","11.1","11.2","12.1","12.2"],
                                      ["Tantárgyak","11.1","11.2","12.1","12.2"]],
            "examresults_title":     ["Abiturfächer und Abiturnoten:",
                                      "Vizsgatárgyak és a vizsgaeredmények:"],
            "written":               ["schriftlich",
                                      "írásbeli"],
            "oral":                  ["mündlich",
                                      "szóbeli"],
            "obligatory":            ["vorgeschrieben",
                                      "kötelezõ"],
            "calculate":             ["Berechnen!",
                                      "Számítás!"],
            "recalculate":           ["Umrechnen!",
                                      "Újraszámítás!"],
            "inputName":             ["Namen eingeben:",
                                      "Adja meg a nevét:"],
            "exportData":            ["Daten exportieren",
                                      "Adatok exportálása"]
        
        }

    /* methods */
        this.set_lang = function(s_lang) {
            switch(s_lang) {

                case "de":
                    this._language = "de";
                    this._langIndex = this._langToIndex[this._language];
                    break;

                default:
                case "hu":
                    this._language = "hu";
                    this._langIndex = this._langToIndex[this._language];
                    break;
            }
        }
        
        this.get = function(s_key) {
            return this._strings[s_key][this._langIndex]
        }
    
    }

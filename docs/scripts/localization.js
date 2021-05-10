/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function Localization() {
    
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
        "grades1112_header":     ["Fächer",
                                  "Tantárgyak"],
        "examresults_title":     ["Abiturfächer und Abiturnoten:",
                                  "Vizsgatárgyak és a vizsgaeredmények:"],
        "written":               ["schriftlich",
                                  "írásbeli"],
        "oral":                  ["mündlich",
                                  "szóbeli"],
        "obligatory":            ["vorgeschrieben",
                                  "kötelező"],
        "calculate":             ["Berechnen!",
                                  "Számítás!"],
        "recalculate":           ["Umrechnen!",
                                  "Újraszámítás!"],
        "inputName":             ["Namen eingeben:",
                                  "Adja meg a nevét:"],
        "exportData":            ["Daten exportieren",
                                  "Adatok exportálása"]
    };

    this._subjects = {
        "dt"  : [ "Deutsch",               "Német"               ],
        "ung" : [ "UZ",                    "Magyar"              ],
        "eng" : [ "Englisch",              "Angol"               ],
        "frz" : [ "Französisch",           "Francia"             ],
        "spa" : [ "Spanisch",              "Spanyol"             ],
        "mat" : [ "Mathematik",            "Matematika"          ],
        "phy" : [ "Physik",                "Fizika"              ],
        "bio" : [ "Biologie",              "Biológia"            ],
        "ch"  : [ "Chemie",                "Kémia"               ],
        "ge"  : [ "Geschichte",            "Német történelem"    ],
        "uge" : [ "Ungarische Geschichte", "Történelem"          ],
        "bk"  : [ "Bildende Kunst",        "Rajz"                ],
        "mus" : [ "Musik",                 "Ének-zene"           ],
        "soz" : [ "Sozialkunde",           "Társadalomismeret"   ],
        "spo" : [ "Sport",                 "Sport"               ],
        "ek"  : [ "Erdkunde",              "Földrajz"            ],
        "eth" : [ "Ethik (oder Religion)", "Etika (vagy Hittan)" ]
    };

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
        return this._strings[s_key][this._langIndex];
    }

    this.getSubject = function(s_name) {
        return this._subjects[s_name][this._langIndex];
    }

}

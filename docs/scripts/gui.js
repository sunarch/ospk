/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

function GuiInteractions() {

    this.branches = new GuiInteractionsForBranches();
    this.options = new GuiInteractionsForOptions();
    this.grades = new GuiInteractionsForGrades();
    this.exams = new GuiInteractionsForExams();
    this.buttons = new GuiInteractionsForButtons();
    this.results = new GuiInteractionsForResults();

    this.validate_grade = function(n_grade) {

        var gradesAllowed = ["0",
                             "1",   "2",  "3",
                             "4",   "5",  "6",
                             "7",   "8",  "9",
                             "10", "11", "12",
                             "13", "14", "15"
                            ]


        if (gradesAllowed.indexOf(n_grade) == -1) {
            return false;
        }

        return true;
    }
}

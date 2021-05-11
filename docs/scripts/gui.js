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
}

/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

valid = {

    grade: function(n_grade) {
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

function validateGradeField(o_domInput) {
    if (!valid.grade(o_domInput.value)) {
        o_domInput.value = "";
    }
}

/* adapted functions (Nspire Basic) ----------------------------------*/

/*
function sum(lista) {
    var x = 0;
    function sumelements(cv,ci,ca) {
        x = x + cv;
    };
    lista.forEach(sumelements);
    return x;
}

function SortD(lista) {
    function sortNumber(a,b) {return b - a;}
    lista.sort(sortNumber);
    lista.reverse();
    lista.push(undefined);
    lista.reverse();
}

function left(lista,n) {
    return lista.slice(1,n+1);
}

function right(lista,n) {
    lista.reverse();
    var ujlista = lista.slice(1,n+1);
    lista.reverse();
    ujlista.concat([undefined]);
    ujlista.reverse();
    return ujlista;
}

function mid(lista,itol,n) {
    return lista.slice(itol,n+1);
}
*/

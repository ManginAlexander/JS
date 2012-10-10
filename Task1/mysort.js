/*jslint nomen: true*/
/*global alert: true*/
/*global _testElAscending: true*/
/*global _testElNotAscending: true*/
/*global _testElAscendingAndEqualsElement: true*/
/*global _runTestSortArray: true*/
/*global _testElNotAscendingAndEqualsElement: true*/
function bubbleSort(arr) {
    "use strict";
    if (!((typeof (arr) === 'object') && (arr instanceof Array))) {
        throw "You get me not array";
    }
    var i = 0, j = 0, temp;
    for (i = 0; i < arr.length; i += 1) {
        for (j = 0; j < arr.length; j += 1) {
            if (arr[i] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}
//Ниже функции для проверки сортировки
//За эталонную сортировку я взял  Sort
//Да для этого лучше всего использовать библиотеку для Unit тестирования.
//Но мне было лениго в ней разбираться. ПОэтому написан небольшой свой велосипед

function runTestsSort() {
    "use strict";
    var numberTest;
    try {
        numberTest = 1;
        _testElAscending();
        numberTest += 1;
        _testElNotAscending();
        numberTest += 1;
        _testElAscendingAndEqualsElement();
        numberTest += 1;
        _testElNotAscendingAndEqualsElement();
        numberTest += 1;
        //_testNoArray();
        //numberTest++;
    } catch (e) {
  //Это конечно лучше писать в лог
        alert("Тест " + numberTest + " упал");
        return;
    }
 //И это тоже
    alert("Тесты пройдены успешно");
}

function _testElAscending() {
    "use strict";
    var array = [1, 2, 3, 4, 5];
    _runTestSortArray(array, bubbleSort);
}
function _testElNotAscending() {
    "use strict";
    var array = [5, 4, 3, 2, 1];
    _runTestSortArray(array, bubbleSort);
}
function _testElAscendingAndEqualsElement() {
    "use strict";
    var array = [1, 2, 3, 4, 4, 5];
    _runTestSortArray(array, bubbleSort);
}
function _testElNotAscendingAndEqualsElement() {
    "use strict";
    var array = [5, 4, 3, 2, 2, 1];
    _runTestSortArray(array, bubbleSort);
}
function _testNoArray() {
    "use strict";
    var array = 124;
    _runTestSortArray(array, bubbleSort);
}
function _runTestSortArray(arr, algorithm) {
    "use strict";
    var copy = [], i = 0;
    for (i = 0; i < arr.length; i += 1) {
        copy[i] = arr[i];
    }
    copy.sort();
    algorithm(arr);
    if (copy.length !== arr.length) {
        throw "Your algorithm dont work!";
    }
    for (i = 0; i < copy.length; i += 1) {
        if (copy[i] !== arr[i]) {
            throw "Your algorithm dont work!";
        }
    }
}
}
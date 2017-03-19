/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var TableDrawer = {

    insertAfter: function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    },

    drawTable: function drawTable(matrix) {
        var tableNode = document.createElement('table');
        tableNode.className = 'table';
        for (var i = 0; i < matrix.length; i++) {
            var row = matrix[i];
            var rowNode = document.createElement('tr');
            rowNode.className = 'table-row row-number-' + i;
            for (var j = 0; j < row.length; j++) {
                var cellNode = document.createElement('td');
                cellNode.className = 'cell row-' + i + ' column-' + j;
                cellNode.id = row[j].id;
                cellNode.innerText = row[j].amount;
                rowNode.appendChild(cellNode);
            }
            tableNode.appendChild(rowNode);
        }
        return tableNode;
    },
    drawRowSums: function drawRowSums(sumValues) {
        sumValues.forEach(function (i) {
            var row = document.querySelector('.row-number-' + i.rowId);
            var sumCell = document.createElement('td');
            sumCell.className = 'row-sum';
            sumCell.id = 'row-' + i.rowId + '-sum';
            sumCell.innerText = i.value;
            row.appendChild(sumCell);
        });
    },
    drawColAverages: function drawColAverages(averageValues) {
        var table = document.querySelector('.table');
        var averagesRow = table.insertRow(-1);
        averagesRow.className = 'averages-row';
        averageValues.forEach(function (i) {
            var averageValueCell = averagesRow.insertCell(-1);
            averageValueCell.className = 'column-average';
            averageValueCell.id = 'column-' + i.colId + '-average';
            averageValueCell.innerText = i.value;
        });
    },
    redrawCell: function redrawCell(id) {
        var cell = document.getElementById(id);
        cell.innerHTML++;
    },
    redrawSums: function redrawSums(rowNum, value) {
        var rowSum = document.getElementById('row-' + rowNum + '-sum');
        rowSum.innerHTML = value;
    },
    redrawAverages: function redrawAverages(colNum, value) {
        var colAverage = document.getElementById('column-' + colNum + '-average');
        colAverage.innerHTML = value;
    },
    drawNewRow: function drawNewRow(newRow, rowSum, columns) {

        var tableRows = document.getElementsByClassName('table-row');

        var lastRow = tableRows[tableRows.length - 1];

        var appendedRow = document.createElement('tr');

        appendedRow.className = 'table-row row-number-' + tableRows.length;

        for (var i = 0; i < newRow.length; i++) {
            var newRowTd = document.createElement('td');
            newRowTd.id = newRow[i].id;
            newRowTd.innerHTML = newRow[i].amount;
            newRowTd.className = 'cell row-' + tableRows.length;
            appendedRow.appendChild(newRowTd);
        }

        var newRowSumTd = document.createElement('td');

        newRowSumTd.innerHTML = rowSum.value;
        newRowSumTd.className = 'row-sum';
        newRowSumTd.id = 'row-' + rowSum.rowId + '-sum';

        appendedRow.appendChild(newRowSumTd);

        this.insertAfter(appendedRow, lastRow);

        for (var j = 0; j < columns.length; j++) {
            var changedColAverage = document.getElementById('column-' + columns[j].colId + '-average');
            changedColAverage.innerHTML = columns[j].value;
        }
    },
    highLightPercentage: function highLightPercentage(hoveredCellId) {
        console.log(hoveredCellId);
    }
};

exports.default = TableDrawer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TableDrawer = __webpack_require__(0);

var _TableDrawer2 = _interopRequireDefault(_TableDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableDiv = document.getElementsByClassName('row')[0];

var helperFunctions = {
    randomInt: function randomInt() {
        return parseInt(Math.floor(100 + Math.random() * 900));
    }
};

var regExp = {
    row: /row-\d+/,
    column: /column-\d+/
};

var TableGenerator = {
    matrix: [],
    increment: 0,
    rowSums: [],
    colAverages: [],

    init: function init(rows, cols) {
        this.matrix = this.generateMatrix(rows, cols);
    },
    generateMatrix: function generateMatrix(rows, cols) {
        var arr = [];
        for (var i = 0; i < rows; i++) {
            arr[i] = [];
            for (var j = 0; j < cols; j++) {
                arr[i][j] = {
                    id: this.increment++,
                    amount: helperFunctions.randomInt()
                };
            }
        }
        return arr;
    },
    calculateRowSum: function calculateRowSum() {
        for (var i = 0; i < this.matrix.length; i++) {
            var currentRowSum = {};
            currentRowSum.rowId = i;
            for (var j = 0; j < this.matrix[i].length; j++) {
                if (currentRowSum.value) {
                    currentRowSum.value += this.matrix[i][j].amount;
                } else {
                    currentRowSum.value = this.matrix[i][j].amount;
                }
            }
            this.rowSums.push(currentRowSum);
        }
    },
    calculateColAverage: function calculateColAverage() {
        var columns = this.matrix[0].length;
        for (var i = 0; i < columns; i++) {
            var currentColAverage = {};
            currentColAverage.colId = i;
            var columnTotal = 0;
            for (var j = 0; j < this.matrix.length; j++) {
                columnTotal += this.matrix[j][i].amount;
            }
            currentColAverage.value = (columnTotal / this.matrix.length).toFixed(2);
            this.colAverages.push(currentColAverage);
        }
    },
    recalculateRowSum: function recalculateRowSum(rowNum) {
        for (var i = 0; i < this.rowSums.length; i++) {
            if (rowNum == this.rowSums[i].rowId) {
                this.rowSums[i].value++;
            }
        }
    },
    recalculateColAverage: function recalculateColAverage(colNum) {
        var colCellsAmount = this.matrix.length;
        var newColSum = 0;
        for (var i = 0; i < colCellsAmount; i++) {
            newColSum += this.matrix[i][colNum].amount;
        }
        var newColAverage = (newColSum / colCellsAmount).toFixed(2);
        this.colAverages.map(function (i) {
            i.colId == colNum && (i.value = newColAverage);
        });
    },
    incrementCell: function incrementCell(row, col, id) {
        this.matrix[row][col].amount++;
        this.recalculateRowSum(row);
        this.recalculateColAverage(col);
        _TableDrawer2.default.redrawCell(id);
        _TableDrawer2.default.redrawSums(row, this.rowSums[row].value);
        _TableDrawer2.default.redrawAverages(col, this.colAverages[col].value);
    },
    addRow: function addRow() {
        var newRow = [];
        for (var i = 0; i < this.matrix[0].length; i++) {
            newRow.push({
                id: this.increment++,
                amount: helperFunctions.randomInt()
            });
        }
        this.matrix.push(newRow);
        this.rowSums = [];
        this.colAverages = [];
        this.calculateRowSum();
        this.calculateColAverage();
        _TableDrawer2.default.drawNewRow(newRow, this.rowSums[this.rowSums.length - 1], this.colAverages);
    }
};

TableGenerator.init(3, 2);
TableGenerator.calculateRowSum();
TableGenerator.calculateColAverage();

var drawnTable = _TableDrawer2.default.drawTable(TableGenerator.matrix);

tableDiv.appendChild(drawnTable);

var addButton = document.createElement('button');
addButton.className = 'btn btn-default add-button';
addButton.innerHTML = 'Add';
addButton.id = 'add-row';
tableDiv.appendChild(addButton);

window.onload = function () {
    _TableDrawer2.default.drawRowSums(TableGenerator.rowSums);
    _TableDrawer2.default.drawColAverages(TableGenerator.colAverages);
    document.getElementById('add-row').addEventListener('click', function () {
        TableGenerator.addRow();
    });
};

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'cell')) {
        var colNum = e.target.cellIndex;
        var rowNum = e.target.parentNode.rowIndex;
        var cellId = e.target.id;
        e.target.addEventListener('click', function () {
            TableGenerator.incrementCell(rowNum, colNum, cellId);
        });
    }
}, false);

/***/ })
/******/ ]);
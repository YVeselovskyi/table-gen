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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helperFunctions = {
    randomInt: function randomInt() {
        return parseInt(Math.floor(100 + Math.random() * 900));
    }
};

var TableConstructor = {
    increment: 0,
    init: function init(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.matrix = this.generateMatrix();
    },
    generateMatrix: function generateMatrix() {
        var arr = [];
        for (var i = 0; i < this.rows; i++) {
            arr[i] = [];
            for (var j = 0; j < this.columns; j++) {
                arr[i][j] = { id: this.increment++, amount: helperFunctions.randomInt() };
            }
        }
        return arr;
    },
    drawTable: function drawTable(table) {
        var tableContainer = document.getElementsByClassName('row')[0];
        var drawnTable = document.createElement('table');
        var sumOfRow = 0;
        var tableRow = void 0;
        var tableData = void 0;
        var textNode = void 0;
        var row = void 0,
            col = void 0;

        drawnTable.className = 'table';

        for (row = 0; row < table.length; row++) {
            tableRow = document.createElement('tr');
            for (col = 0; col < table[row].length; col++) {
                tableData = document.createElement('td');
                tableData.id = table[row][col].id;
                textNode = document.createTextNode(table[row][col].amount);
                tableData.appendChild(textNode);
                tableRow.appendChild(tableData);
            }
            drawnTable.appendChild(tableRow);
        }
        tableContainer.appendChild(drawnTable);
    }
};

TableConstructor.init(4, 4);

var table = TableConstructor.matrix;

TableConstructor.drawTable(table);

/***/ })
/******/ ]);
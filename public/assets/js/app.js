import TableDrawer from './TableDrawer.js';

console.log(TableDrawer);
const helperFunctions = {
    randomInt: function () {
        return parseInt(Math.floor(100 + Math.random() * 900));
    }
};

const regExp = {
    row: /row-\d+/,
    column: /column-\d+/
};

const tableDiv = document.getElementsByClassName('row')[0];

const TableGenerator = {
    matrix: [],
    increment: 0,
    rowSums: [],
    colAverages: [],

    init(rows,cols){
        this.matrix = this.generateMatrix(rows, cols);
    },

    generateMatrix(rows, cols){
        let arr = [];
        for(let i=0; i<rows; i++){
            arr[i] = [];
            for(let j=0; j<cols; j++){
                arr[i][j] = {
                    id: this.increment++,
                    amount: helperFunctions.randomInt()
                };
            }
        }
        return arr;
    },

    calculateRowSum(){
      for(let i=0; i<this.matrix.length; i++){
          let currentRowSum = {};
          currentRowSum.rowId = i;
          for(let j = 0; j<this.matrix[i].length; j++){
              if(currentRowSum.value){
                  currentRowSum.value += this.matrix[i][j].amount;
              } else {
                  currentRowSum.value = this.matrix[i][j].amount;
              }
          }
          this.rowSums.push(currentRowSum);
      }
    },

    calculateColAverage(){
        const columns = this.matrix[0].length;
        for (let i = 0; i < columns; i++) {
            let currentColAverage = {};
            currentColAverage.colId = i;
            let columnTotal = 0;
            for (let j = 0; j < this.matrix.length; j++) {
                columnTotal += this.matrix[j][i].amount
            }
            currentColAverage.value = +(columnTotal / this.matrix.length).toFixed(2);
            this.colAverages.push(currentColAverage);
        }
    },

    recalculateRowSum(rowNum){
        for(let i=0; i<this.rowSums.length; i++){
            if(rowNum == this.rowSums[i].rowId){
                this.rowSums[i].value++;
            }
        }
    },

    recalculateColAverage(colNum){
        const colCellsAmount = this.matrix.length;
        let newColSum = 0;
        for(let i=0; i<colCellsAmount; i++){
            newColSum+=this.matrix[i][colNum].amount;
        }
        let newColAverage = +(newColSum/colCellsAmount).toFixed(2);
        this.colAverages.map(i => {
            i.colId == colNum && (i.value = newColAverage );
        });
    },

    incrementCell(row, col){
        this.matrix[row][col].amount++;
        this.recalculateRowSum(row);
        this.recalculateColAverage(col);
    }

};

TableGenerator.init(3, 3);
TableGenerator.calculateRowSum();
TableGenerator.calculateColAverage();

let drawnTable = TableDrawer.drawTable(TableGenerator.matrix);

tableDiv.appendChild(drawnTable);


window.onload = function () {
    TableDrawer.drawRowSums(TableGenerator.rowSums);
    TableDrawer.drawColAverages(TableGenerator.colAverages);
};


let events = {
    addCellHandler: function () {
        let allTd = [...document.querySelectorAll('td')];
        for(let i=0; i<allTd.length; i++){
            let colNum = allTd[i].cellIndex;
            let rowNum = allTd[i].parentNode.rowIndex;
            allTd[i].addEventListener('click', () =>  { TableGenerator.incrementCell(rowNum,colNum) });
        }
    }
};

events.addCellHandler();
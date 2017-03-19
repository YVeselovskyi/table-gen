import TableDrawer from './TableDrawer.js';

const tableDiv = document.getElementsByClassName('row')[0];


const helperFunctions = {
    randomInt: function () {
        return parseInt(Math.floor(100 + Math.random() * 900));
    }
};

const regExp = {
    row: /row-\d+/,
    column: /column-\d+/
};

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
            currentColAverage.value = (columnTotal / this.matrix.length).toFixed(2);
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
        let newColAverage = (newColSum/colCellsAmount).toFixed(2);
        this.colAverages.map(i => {
            i.colId == colNum && (i.value = newColAverage );
        });
    },

    incrementCell(row, col, id){
        this.matrix[row][col].amount++;
        this.recalculateRowSum(row);
        this.recalculateColAverage(col);
        TableDrawer.redrawCell(id);
        TableDrawer.redrawSums(row, this.rowSums[row].value);
        TableDrawer.redrawAverages(col, this.colAverages[col].value);
    },

    addRow(){
        let newRow = [];
        for(let i=0; i<this.matrix[0].length; i++){
            newRow.push({
                id: this.increment++,
                amount: helperFunctions.randomInt()
            })
        }
        this.matrix.push(newRow);
        this.rowSums = [];
        this.colAverages = [];
        this.calculateRowSum();
        this.calculateColAverage();
        TableDrawer.drawNewRow(newRow, this.rowSums[this.rowSums.length-1] , this.colAverages);
    }

};

TableGenerator.init(3,2);
TableGenerator.calculateRowSum();
TableGenerator.calculateColAverage();


let drawnTable = TableDrawer.drawTable(TableGenerator.matrix);

tableDiv.appendChild(drawnTable);

let addButton = document.createElement('button');
addButton.className = 'btn btn-default add-button';
addButton.innerHTML = 'Add';
addButton.id = 'add-row';
tableDiv.appendChild(addButton);


window.onload = function () {
    TableDrawer.drawRowSums(TableGenerator.rowSums);
    TableDrawer.drawColAverages(TableGenerator.colAverages);
    document.getElementById('add-row').addEventListener('click', ()=> {TableGenerator.addRow()})
};


function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'cell')) {
        let colNum = e.target.cellIndex;
        let rowNum = e.target.parentNode.rowIndex;
        let cellId = e.target.id;
        e.target.addEventListener('click', () =>  { TableGenerator.incrementCell(rowNum,colNum, cellId) });
    }
}, false);
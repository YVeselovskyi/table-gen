const helperFunctions = {
    randomInt: function () {
        return parseInt(Math.floor(100 + Math.random() * 900));
    }
};

let TableConstructor = {
    increment: 0,
    init(rows,columns){
        this.rows = rows;
        this.columns = columns;
        this.matrix = this.generateMatrix();
    },
    generateMatrix(){
        let arr = [];
        for(let i=0; i<this.rows; i++){
            arr[i] = [];
            for(let j=0; j<this.columns; j++){
                arr[i][j] = {id: this.increment++, amount: helperFunctions.randomInt()};
            }
        }
        return arr;
    },
    drawTable(table){
        let tableContainer = document.getElementsByClassName('row')[0];
        let drawnTable = document.createElement('table');
        let sumOfRow = 0;
        let tableRow;
        let tableData;
        let textNode;
        let row, col;

        drawnTable.className = 'table';

        for (row = 0; row < table.length; row++){
            tableRow = document.createElement('tr');
            for (col = 0; col < table[row].length; col++){
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

let table = TableConstructor.matrix;

TableConstructor.drawTable(table);


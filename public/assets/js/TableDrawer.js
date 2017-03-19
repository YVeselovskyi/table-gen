

const TableDrawer = {

    insertAfter: function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    },

    drawTable(matrix) {
        let tableNode = document.createElement('table');
        tableNode.className = 'table';
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let rowNode = document.createElement('tr');
            rowNode.className = `table-row row-number-${i}`;
            for (let j = 0; j < row.length; j++) {
                let cellNode = document.createElement('td');
                cellNode.className = `cell row-${i} column-${j}`;
                cellNode.id = row[j].id;
                cellNode.innerText = row[j].amount;
                rowNode.appendChild(cellNode)
            }
            tableNode.appendChild(rowNode)
        }
        return tableNode;
    },

    drawRowSums(sumValues){
        sumValues.forEach(i =>{
            let row = document.querySelector(`.row-number-${i.rowId}`);
            let sumCell = document.createElement('td');
            sumCell.className = 'row-sum';
            sumCell.id = `row-${i.rowId}-sum`;
            sumCell.innerText = i.value;
            row.appendChild(sumCell);
        })
    },

    drawColAverages(averageValues){
        let table = document.querySelector('.table');
        let averagesRow = table.insertRow(-1);
        averagesRow.className = 'averages-row';
        averageValues.forEach(i =>{
            let averageValueCell = averagesRow.insertCell(-1);
            averageValueCell.className = 'column-average';
            averageValueCell.id = `column-${i.colId}-average`;
            averageValueCell.innerText = i.value;
        })
    },

    redrawCell(id){
        let cell = document.getElementById(id);
        cell.innerHTML++;
    },

    redrawSums(rowNum, value){
        let rowSum = document.getElementById(`row-${rowNum}-sum`);
        rowSum.innerHTML = value;
    },

    redrawAverages(colNum, value){
        let colAverage = document.getElementById(`column-${colNum}-average`);
        colAverage.innerHTML = value;
    },

    drawNewRow(newRow, rowSum, columns){

        let tableRows = document.getElementsByClassName('table-row');

        let lastRow = tableRows[tableRows.length - 1];

        let appendedRow = document.createElement('tr');

        appendedRow.className = `table-row row-number-${tableRows.length}`;

        for(let i=0; i<newRow.length;i++){
            let newRowTd = document.createElement('td');
            newRowTd.id = newRow[i].id;
            newRowTd.innerHTML = newRow[i].amount;
            newRowTd.className = `cell row-${tableRows.length}`;
            appendedRow.appendChild(newRowTd);
        }

        let newRowSumTd = document.createElement('td');

        newRowSumTd.innerHTML = rowSum.value;
        newRowSumTd.className = 'row-sum';
        newRowSumTd.id = `row-${rowSum.rowId}-sum`;

        appendedRow.appendChild(newRowSumTd);

        this.insertAfter(appendedRow, lastRow);

        for(let j=0; j<columns.length; j++){
            let changedColAverage = document.getElementById(`column-${columns[j].colId}-average`);
            changedColAverage.innerHTML = columns[j].value;
        }
    },

    highLightPercentage(hoveredCellId){
        console.log(hoveredCellId);
    }
};

export default TableDrawer;

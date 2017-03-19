const TableDrawer = {

    drawTable(matrix) {
        let tableNode = document.createElement('table');
        tableNode.className = 'table';
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let rowNode = document.createElement('tr');
            rowNode.className = `row-number-${i}`;
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
    highLightPercentage(hoveredCellId){
        console.log(hoveredCellId);
    }
};

export default TableDrawer;
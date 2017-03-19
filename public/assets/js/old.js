// calculateRowSum(){
//     let res = [];
//     for (let i = 0; i < this.matrix.length; i++) {
//         let row = this.matrix[i];
//         let resRow = [];
//         let rowSum = 0;
//         for (let j = 0; j < row.length; j++) {
//             resRow.push(row[j]);
//             rowSum += row[j].amount
//         }
//         resRow.push({
//             id: this.increment++,
//             amount: rowSum
//         });
//         res.push(resRow)
//     }
//     return res;
// },
//
// calculateColumnMid() {
//     let resRow = [];
//     const columns = this.matrix[0].length;
//
//     for (let j = 0; j < columns; j++) {
//         let columnTotal = 0;
//         for (let i = 0; i < this.matrix.length; i++) {
//             columnTotal += this.matrix[i][j].amount
//         }
//         let columnAverage = columnTotal / this.matrix.length;
//         resRow.push({
//             id: this.increment++,
//             amount: columnAverage
//         })
//     }
//     this.matrix.push(resRow);
//     return this.matrix;
// },
//
// function incrementCell(event){
//     console.log(event);
//     let id = event.target.id;
//     for(let i=0; i<TableGenerator.matrix.length; i++){
//         TableGenerator.matrix[i].forEach(cell=>{
//             if(cell.id == id){
//                 cell.amount = cell.amount+1;
//             }
//         });
//     }
//     console.log(TableGenerator.matrix);
// }

window.onload = function () {
    TableDrawer.drawRowSums(TableGenerator.rowSums);
    TableDrawer.drawColAverages(TableGenerator.colAverages);
};

class TableMethodsCreator {
    constructor(){
        this.incrementCell = this.incrementCell.bind(this);
        this.changeRowSum = this.changeRowSum.bind(this);
        this.changeColAverage = this.changeColAverage.bind(this);
    }

    incrementCell(cell){
        let cellId = cell.target.id;
        let clickedCell = document.getElementById(cellId);
        let clickedCellRow = cell.target.className.match(regExp.row)[0];
        let clickedCellCol = cell.target.className.match(regExp.column)[0];
        clickedCell.innerHTML++;
        this.changeRowSum(clickedCellRow);
        this.changeColAverage(clickedCellCol);
    }

    changeRowSum(className){
        let sumCell = document.getElementsByClassName(`${className}-sum`)[0];
        sumCell.innerHTML++;
    }

    changeColAverage(className){
        let columnsArr = [...document.querySelectorAll(`.${className}`)];
        let colSum = 0;
        let columnValues = columnsArr.map(i=> colSum+= parseInt(i.innerHTML));
        let newAverage = colSum/columnsArr.length.toFixed(2);
        document.querySelector(`.${className}-average`).innerHTML = newAverage.toFixed(2);
    }
}

const TableMethods = new TableMethodsCreator();

// let events = {
//     addCellHandler: function () {
//         let allTd = [...document.querySelectorAll('td')];
//         for(let i=0; i<allTd.length; i++){
//             let colNum = allTd[i].cellIndex;
//             let rowNum = allTd[i].parentNode.rowIndex;
//             let cellId = allTd[i].id;
//             allTd[i].addEventListener('click', () =>  { TableGenerator.incrementCell(rowNum,colNum, cellId) });
//             //allTd[i].addEventListener('mouseover', () =>  { TableDrawer.highLightPercentage(cellId) });
//         }
//     }
// };
//
// events.addCellHandler();
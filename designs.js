//select id for submit button
const sizePicker = document.getElementById('sizePicker');

//function to color the cell when user clicks on cell
function respondToClick(event) {
    event.preventDefault();
    //verifies target is desired element
    if (event.target.nodeName.toLowerCase() === 'td'){
        // Select color input
        const color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color;
    }
}

//function to call makeGrid when user submits the form
function respondToSubmit(event) {
    event.preventDefault();
    makeGrid();
}

//make grid with height and width submitted by user
function makeGrid() {
    // Select canvas
    const canvas = document.getElementById('pixelCanvas');
    // Select size input
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    //clear table if user select different canvas size in next attempt
    canvas.innerHTML = "";
    //create table with submitted height and width,append table data to table row and append table row to table element(canvas)
    for (let i = 0; i < height; i++ ){
        const tableRow = document.createElement('tr');
        canvas.appendChild(tableRow);
        for (let j = 0; j < width; j++){
            const tableData = document.createElement('td');
            tableRow.appendChild(tableData);
        }
    }
    //color the cell when user clicks on the cell with selected color
    canvas.addEventListener('click', respondToClick);   
}
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', respondToSubmit); 
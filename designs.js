// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

// Your code goes here!
function makeGrid() {

    //storing variables and values from my elements
    const color = document.getElementById('colorPicker');
    const table = document.getElementById('pixelCanvas');
    const sizePicker = document.getElementById('sizePicker');
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;

    //delete rows
    table.innerHTML = '';

    //adding a for loop to create rows and cells
    for (let i = 0; i <= height; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j <= width; j++) {
            const cell = row.insertCell(j);
            cell.addEventListener('click', function (evt) {
                cell.style.backgroundColor = color.value;
            });
        }
    }


}

sizePicker.addEventListener('click', function (evt) {
    evt.preventDefault();

    makeGrid();
});



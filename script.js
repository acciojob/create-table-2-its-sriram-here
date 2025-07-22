function createTable() {
  const table = document.getElementById('myTable');
  // Clear existing table content
  table.innerHTML = '';

  const rowsInput = prompt("Input number of rows");
  const colsInput = prompt("Input number of columns");

  // Parse inputs to integers
  const rn = parseInt(rowsInput, 10);
  const cn = parseInt(colsInput, 10);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    // Ignore if inputs are not numbers
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be positive integers");
    return;
  }

  // Create table rows and cells
  for (let i = 0; i < rn; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cn; j++) {
      const td = document.createElement('td');
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

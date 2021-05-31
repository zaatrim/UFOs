// import the data from data.js
const tableData = data;
console.log("tableData")
console.log(tableData)
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// In Python, a simple print statement looks like this:
    //  # Simple Python print statement
    // def print_hello():
    //     print("Hello there!")
// In JS a simple print statement looks like this:
    // // Simple JavaScript console.log statement
    // function printHello() {
    //     console.log("Hello there!");
    //   }
// console.log is JavaScript’s version of a print statement. Then you pass in the name of the function and the numbers.
// Functions can call other functions
    // function doubleAddition(c, d) {
    //     var total = addition(c, d) * 2;
    //     return total;
    // }
// If the code and output in your console is getting cluttered, type clear() and press Enter to clear the working area of your console.
// The line we'll use to clear the data is tbody.html("");. tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data
function buildTable(mydata) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    mydata.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
 
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    console.log("date")
    console.log(date)
    
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
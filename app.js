// from data.js
var tableData = data;

// YOUR CODE HERE!


tableData.forEach(function (sighting) {
    console.log(sighting);
    });function renderTable() {

        var tbody = d3.select("tbody");
    // tbody.select("#delete").remove()
    console.log(tableData.length)
    tableData.forEach(function (sighting) {
        console.log(sighting);
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(function ([key, value ]) {
        console.log(key, value);

        var cell = tbody.append("td"); 
        cell.text(value);
    });
 });
};

// trying to writer fiter code

// Select the filter button

var submit = d3.select ("#filter-btn");

submit.on("click", function () {

    // Prevent the page from refreshing 
    d3.event.preventDefault();
    d3.select("tbody").html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datatime");

    // Get the value property of the input element
    var inputValue = inputElement.propety("value");

    console.log(inputValue); 

    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

    console.log(filteredData);
    TableData = filteredData;
    renderTable();
});

renderTable();

# **The Facts about UFOs**

## _Project Overview_

In this project, I will help Dana in writing her article about UFOs in McMinnville, Oregon. Data Have a JS Data file that Includes sightings about UFOs. Since the Data Is lengthy, I will build a table using data stored in a JavaScript array. and I will also Build a Dynamic Webpage to Hold and display the table in an HTML file for easy viewing. Then I will create filters (i.e. The Table Displayed in the webPage will react to user input) to let users refine their search based on more than one level (such as Date, City, State, County, or shape) ). In this project, I will use Bootstrap and CSS. As well I will build the dynamic webpage by inserting JavaScript into an HTML page. I will add the Article title section to this WebPage. I will use a background image and format the WebPage to make it look nice and professional.

## _Analysis & Results_

### Analysis

All Data is stored in a data.js file and it's stored in JS format. 1st Step in the process of creating HTML table from js.Data

1.  will start the process by defining functions to create the Table and import the Raw data from the data.js file.
<!--     // from data.js
    const tableData = data;
    console.log("tableData")
    console.log(tableData)
 -->
                // get table references
                var tbody = d3.select("tbody");

                function buildTable(data) {
                // First, clear out any existing data
                tbody.html("");

                // Next, loop through each object in the data
                // and append a row and cells for each value in the row
                data.forEach((dataRow) => {
                // Append a row to the table body
                let row = tbody.append("tr");

                    // Loop through each field in the dataRow and add
                    // each value as a table cell (td)
                    Object.values(dataRow).forEach((val) => {
                    let cell = row.append("td");
                    cell.text(val);
                    });

                });
                }

2.  Then I will create a filter to Track the changes per filter field, Once the field is Updated the outcome will display the table based on the filter criteria. To do So, I will define functions.
    // 1. Create a variable to keep track of all the filters as an object.
    var filters = {};

                // 3. Create a function that updates the filters.

                function updateFilters() {

                // 4a. Create a variable that saves the element that was changed using d3.select().
                let changedElement = d3.select(this);
                // 4b. Save the value that was changed as a variable.
                let elementValue = changedElement.property("value");
                // 4c. Save the id of the filter that was changed as a variable.
                let filterId = changedElement.attr("id");

                console.log("elementValue= ", elementValue)
                console.log("filterId= ", filterId)

                // 5. If a filter value was entered then add that filterId and value
                // to the filters list. Otherwise, clear that filter from the filters object.
                if (elementValue) {
                filters[filterId] = elementValue;
                }
                else {
                delete filters[filterId];
                }

                // 6. Call function to apply all filters and rebuild the table
                filterTable();
                }

                // 7. Create a function that filters the table when data is entered.
                function filterTable() {

                // 8. Set the filtered data to the tableData.
                let filteredData = tableData;

                // 9. Loop through all of the filters and keep any data that
                // matches the filter values
                Object.entries(filters).forEach(([key, value]) => {
                filteredData = filteredData.filter(row => row[key] === value);
                });

3.  The last step in the App.JS file is to call the functions to build the empty table and then rebuild the table again based on the filter criteria.

                // 10. Finally, rebuild the table using the filtered data
                buildTable(filteredData);
                }

                // 2. Attach an event to listen for changes to each filter
                d3.selectAll("input").on("change", updateFilters);

                // Build the table when the page loads
                buildTable(tableData);
4. In parallel to the app.js file, I will start creating the webPage. I will use HTML Basic format and then start enhancing it using Bootstrap and CSS.
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>UFO Finder</title>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"/>
            <link rel="stylesheet" href="static/css/style.css" />
        </head>
5. The next step is to build the dynamic webpage functionality, I will form to create the field that allows the user to input his selection criteria for the different 5 parameters ( Date, City, State, County & Shape). the filters and the Data will be displayed in columns formats                <div class="container-fluid">
            <div class="row">
            <div class="col-md-4 article-title">
                <h3>UFO Sightings: Fact or Fancy? <small>Ufologists weigh in</small></h3>
            </div>
            <div class="col-md-8 article-p">
                <p>
                Are we alone in the universe?
                </p>
            </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
                <div class="filters">
                <form class="bg-dark">
                    <p>Filter Search</p>
                    <ul class="list-group">
                    <li class="list-group-item bg-dark">
                        <label for="date">Enter Date</label>
                        <input type="text" placeholder="1/10/2010" id="datetime" />
                    </li>
                    <li class="list-group-item bg-dark">
                        <label for="city">Enter a City</label>
                        <input type="text" id="city" class="form-control" placeholder="roswell" />
                    </li>
                    <li class="list-group-item bg-dark">
                        <label for="state">Enter a State</label>
                        <input type="text" id="state" class="form-control" placeholder="ca" />
                    </li>
                    <li class="list-group-item bg-dark">
                        <label for="country">Enter a Country</label>
                        <input type="text" id="country" class="form-control" placeholder="us" />
                    </li>
                    <li class="list-group-item bg-dark">
                        <label for="shape">Enter a Shape</label>
                        <input type="text" id="shape" class="form-control" placeholder="circle" />
                    </li>
                    </ul>
                </form>
                </div>
            </div>
6. Next I will create the Table that reacted to the selection criteria
             <div class="col-md-9">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Shape</th>
                  <th>Duration</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script> 

7. Last step is define the source of our HTML 
       <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
       <script src="static/js/data.js"></script>
       <script src="static/js/app.js"></script> 

### Results
I built a Dynamic Webpage to help Dana display her article findings. This Page is user friendly UFO's sightings  will be displayed based on the selection Criteria 
   ![UFOs_webpage](https://user-images.githubusercontent.com/80013773/120154730-02763d00-c1a5-11eb-920a-a457796a3296.PNG)

## _Summary_

### Advantages
The webPage Is well designed and It's Dynamic allowing users to smartly focus on the UFOs of interest for them. 

### Recommendations for further development 
1. Create Dynamic filtering i.e. Once we select the 1st filtering criteria then the Values for the 2nd criteria will be filter based on available values under the condition of the 1st filter. 
2. Create filter with autocomplete option, to allow more user-friendly filters.  

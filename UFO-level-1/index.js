var tableData = data;

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//append a table to your web page
data.forEach(function(UFOSightings){
    console.log(UFOSightings)
    var row = tbody.append('tr');

    Object.entries(UFOSightings).forEach(function([key, value]){
        console.log(key, value)
        var cell = tbody.append("td");
        cell.text(value);
        
    });
});

//add new rows of data for each UFO sighting (make sure you have a column for date/time,
//city,state, country, shapre, comment)



//use a date form in your HTML document and write JavaScript //code that will listen for events
//and search through the date/time column to find rows that match user input 












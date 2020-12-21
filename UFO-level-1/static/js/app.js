// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(WR){
    console.log(WR)
    var row = tbody.append('tr');
   

    Object.entries(WR).forEach(function([x,y]){
        console.log(`x is ${x} y is ${y}`)
        row.append('td').text(y);
        row.append('td').text('')
        
    })
});


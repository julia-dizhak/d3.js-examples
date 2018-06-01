(function() {
    let dataset;
    dataset = [ 5, 10, 15, 20, 25 ];
    
    d3.select('#food')
        .selectAll('p')
        .data(dataset)
        .enter()
        .append('p')
        .text(function(datum) {
            return 'I can count up to ' + datum;
        })
        .style('color', function(datum) {
            if (datum > 15) { 
                return 'red'; 
            } else {
                return 'black' 
            }
        });

    d3.csv('static/csv/food.csv', function(error, data) {
        if (error) { 

        } else { 
            dataset = data; 
            console.log(data);
            
            generateVisualization(); 
            makeAwesomeCharts(); 
            makeEvenAwesomerCharts(); 
            thankAwardsCommittee();
        } 
    });

   //console.log(dataset);
})();


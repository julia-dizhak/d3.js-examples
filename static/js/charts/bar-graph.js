(function() {
    const margin = {top: 20, right: 10, bottom: 20, left: 40},
        width = 760 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;
        
    const xScale = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
    
    const yScale = d3.scaleLinear()
          .range([height, 0]);

    const svg = d3.select("#barGraph")
        .append('svg:svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");      
    
    d3.csv('static/csv/swiss-cities-population.csv').then(function(data) {
        data.forEach(function(d) {
            d.population = +d.population;
        });

        data.sort(function(a, b) {
            return a.population - b.population;
        });
       
        xScale.domain(data.map(function(d) { 
            return d.city; 
        }));

        yScale.domain([0, d3.max(data, function(datum) { 
            return datum.population; 
        })]);

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")   
            .attr("x", function(d) { 
                return xScale(d.city); 
            })
            .attr("width", xScale.bandwidth())
            .attr("y", function(d) { 
                return yScale(d.population); 
            })
            .attr("height", function(datum) { 
                return height - yScale(datum.population); 
            })
            //.append('svg:title')
            .append("svg:title")
.text("hai");
            // .append('title')
            // .text((datum, index) => 'this key is ' + index);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(xScale));
    
            svg.append("g").call(d3.axisLeft(yScale));

    }).catch(function(error) {
        console.log(error);
    }); 

})();           
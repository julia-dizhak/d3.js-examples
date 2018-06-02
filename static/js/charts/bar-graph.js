(function() {
    const margin = {top: 20, right: 10, bottom: 20, left: 40},
        width = 760 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
        
    const x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
    
    const y = d3.scaleLinear()
          .range([height, 0]);

    const svg = d3.select("#barGraph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");      
    
    d3.csv('static/csv/sales.csv').then(function(data) {
        data.forEach(function(d) {
            d.population = +d.population;
        });

        x.domain(data.map(function(d) { 
            return d.city; 
        }));

        y.domain([0, d3.max(data, function(d) { 
            return d.population; 
        })]);

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")   
            .attr("x", function(d) { 
                return x(d.city); 
            })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { 
                return y(d.population); 
            })
            .attr("height", function(d) { 
                return height - y(d.population); 
            });

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
    
            svg.append("g").call(d3.axisLeft(y));

    }).catch(function(error) {
        console.log(error);
    })   
})();           
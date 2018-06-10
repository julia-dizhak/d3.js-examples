(function() {
    const margin = {top: 20, right: 20, bottom: 30, left: 40}, 
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        padding = 20, 
        leftPadding = 100; // allow for labels
        

    // define a horizontal scale
    const xRange = d3.scaleBand()
      .range([leftPadding, width - padding])
      .padding([0.1]);

    // define a vertical scale
    const yRange = d3.scaleLinear()
       .range([height - padding, padding]);


    var xAxis = d3.axisBottom(xRange);
    var yAxis = d3.axisLeft(yRange);

    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  

    $.getJSON('histogram_hours.json', function(data, error) {
        // if (error) {
        //     throw error;
        // }
        
        // format the data
        data = d3.keys(data).map(function(key) {
            return {
                bucket: Number(key),
                N: data[key]
            }
        });

        xRange.domain(data.map((datum) => datum.bucket));
        yRange.domain([0, d3.max(data, (datum) => datum.N )]);
        
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0, "+ (height - padding) +")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate("+ (leftPadding - padding)  +", 0)")
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', ((datum) => xRange(datum.bucket)))
            .attr('width', xRange.bandwidth())
            .attr('y', height - padding)
            .transition()
            .delay((datum) => datum.bucket * 20)
            .duration(800)
            .attr('y', (datum) => yRange(datum.N))
            .attr('height', (datum) => height - padding - yRange(datum.N));
    });

 
   

    

})();     
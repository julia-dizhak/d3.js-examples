(function() {
    const width = 300,
        height = 150;

    const dataset = [5, 10, 15, 20, 25];    

    const svg = d3.select('#circle')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const circles = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle");   
        
    circles.attr("cx", function(d, i) { 
        return (i * 50) + 25;
    })
    .attr("cy", height/2)
    .attr("r", function(d) {
        return d; 
    })
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", (datum) => datum/2);
})();        

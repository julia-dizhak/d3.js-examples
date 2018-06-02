(function() {
    const dataset = [
                        [ 5,     20 ],
                        [ 480,   90 ],
                        [ 250,   50 ],
                        [ 100,   33 ],
                        [ 330,   95 ],
                        [ 410,   12 ],
                        [ 475,   44 ],
                        [ 25,    67 ],
                        [ 85,    21 ],
                        [ 220,   88 ],
                        [ 10,   18 ]
                    ];
    
    const margin = {top: 20, right: 10, bottom: 20, left: 10}; 

    const width = 400 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
                
    const svg = d3.select('#scatterPlot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')'); 
    
    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, datum => datum[0])])
                    .range([0, width]);
        
    svg.selectAll('circle')  
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', function(datum) {
            return xScale(datum[0]);
        }) 
        .attr('cy', function(datum) {
            return datum[1];
        })         
        .attr('r', 5); 

    svg.selectAll('text') 
        .data(dataset)
        .enter()
        .append('text') 
        .text(function(datum) {
            return datum[0] + ',' + datum[1]
        })   
        .attr('x', function(datum) {
            return datum[0];
        }) 
        .attr('y', function(datum) {
            return datum[1];
        })  
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "red") 
                    
})();  
        
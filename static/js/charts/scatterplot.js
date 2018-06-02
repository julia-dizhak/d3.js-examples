(function() {
    const dataset = [
                        [ 5,     20 ],
                        [ 180,   190 ],
                        [ 250,   50 ],
                        [ 100,   33 ],
                        [ 30,   195 ],
                        [ 310,   12 ],
                        [ 275,   144 ],
                        [ 25,    67 ],
                        [ 85,    121 ],
                        [ 115,    10 ],
                        [ 120,   188 ],
                        [ 220,   288 ],
                        [ 15,   260 ]
                    ];
    
    const margin = {top: 20, right: 30, bottom: 20, left: 40},
        padding = 20;

    const width = 500 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
                
    const svg = d3.select('#scatterPlot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')'); 
    
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, datum => datum[0])])
        .range([0, width - padding]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, datum => datum[1])])
        .range([height - padding, padding]);   
        
    const rScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, datum => datum[1])])
        .range([2, 5]);      
        
    svg.selectAll('circle')  
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', function(datum) {
            return xScale(datum[0]);
        }) 
        .attr('cy', function(datum) {
            return yScale(datum[1]);
        })         
        .attr('r',  function(datum) {
            return rScale(datum[1]);
        }); 

    svg.selectAll('text') 
        .data(dataset)
        .enter()
        .append('text') 
        .text(function(datum) {
            return datum[0] + ',' + datum[1]
        })   
        .attr('x', function(datum) {
            return xScale(datum[0]);
        }) 
        .attr('y', function(datum) {
            return yScale(datum[1]);
        })  
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "red") 

    const xAxis = d3.axisBottom(xScale)
        .ticks(8);
    
    const yAxis = d3.axisLeft(yScale)
        .ticks(7);  

    svg.append("g")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .attr('class', 'axis')
        .call(xAxis);

    svg.append("g")
        .attr("transform", "translate(" + 0 + ", 0)")
        .attr('class', 'axis')
        .call(yAxis)    
                    
})();  
        
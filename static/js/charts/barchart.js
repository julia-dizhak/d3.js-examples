(function() {
    
    const dataset = [5, 25, 7, 24, 9, 8, 18, 23, 19, 14, 22, 20, 11, 13, 12];

    const width = 500,
      height = 200,
      barPadding = 0.05,
      padding = 20,
      multiplier = 7,
      margin = {top: 0, right: 10, bottom: 10, left: 10};

    const svg = d3.select('#barChart')  
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .range([0, width])
      .padding(barPadding)

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset) * 1.1])
      .range([height, 0]);  

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function(datum, index) {
        return xScale(index);  
      })
      .attr('y', function(datum) {
        return yScale(datum);
      })
      .attr("width", xScale.bandwidth())
      .attr('height', function(datum) {
        return height - yScale(datum)
      })
      .attr("fill", function(datum) {
        return "rgb(0, 0, " + (datum * 10) + ")";
      });

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append('text')
      .text(function(datum) {
        return datum;
      })
      .attr("text-anchor", "middle")
      .attr("x", function(datum, index) {
        return index * (width / dataset.length) + 15;
      })
      .attr("y", function(datum, index) {
        return yScale(datum) + 15;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white");
      
})();  
    
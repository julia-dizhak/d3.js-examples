(function() {

    const w = 500,
      h = 150,
      barPadding = 1,
      multiplier = 7;

    const dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12];

    //const svg = d3.select('#barArea')
      // .selectAll('div')
      // .data(dataset)
      // .enter()
      // .append('div')
      // .attr('class', 'barElement')
      // .style('height', function(datum, index) {
      //   let barHeight = datum * 5;
      //   return barHeight + 'px';
      // });
    
    const svg = d3.select('#barArea')  
      .append('svg')
      .attr("width", w)
      .attr("height", h);

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function(datum, index) {
        return index * (w / dataset.length);  
      })
      .attr('y', function(datum) {
        return h - (datum * multiplier);
      })
      .attr("width", w / dataset.length - barPadding)
      .attr('height', function(datum) {
        return datum * multiplier;
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
        return index * (w / dataset.length) + 8;
      })
      .attr("y", function(datum) {
        return h - (datum * multiplier) + 22;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white");
      

})();  
    
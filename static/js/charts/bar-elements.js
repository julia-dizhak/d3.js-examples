(function() {

    const dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18];

    d3.select('#barArea')
      .selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'barElement')
      .style('height', function(datum, index) {
        let barHeight = datum * 5;
        return barHeight + 'px';
      });
})();  
    
(function() {

    const margin = {top: 20, right: 10, bottom: 20, left: 40},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
    
    const y = d3.scaleLinear().domain([15, 90]).range([height, 0]);
    // y(15) --> 250
    // y(90) --> 0
    // y(52.5) --> 125

    const x = d3.scaleLog().domain([250, 100000]).range([0, width]);

    const r = d3.scaleSqrt().domain([52070, 1380000000]).range([10, 50]);
  
    console.log(y(77), x(13330), r(1380000000)); // China life expetency, income, popupation
    // --> 43.33333333333334 398.1976156961322 50

    console.log(y(72.3), x(8330), r(440000000));

    const svg = d3.select("#health-of-nations")
        .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr('fill', '#ccc');  
    
    const circle1 = svg.append('circle')
        .attr('fill', 'red')
        .attr('r', r(1380000000))
        .attr('cx', x(13330))
        .attr('cy', y(77))

    const circle2 = svg.append('circle')
        .attr('fill', 'yellow')
        .attr('r', r(44000000))
        .attr('cx', x(8330))
        .attr('cy', y(72.3));

    const circleRussia = svg.append('circle')
        .attr('fill', 'yellow')
        .attr('r', r(144000000))
        .attr('cx', x(24800))
        .attr('cy', y(71.1));    

})();           
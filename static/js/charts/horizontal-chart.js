(function () {
    //const data = [4, 8, 15, 16, 23, 42];

    const width = 420,
        height = 120,
        barHeight = 20;

    const x = d3.scaleLinear()
        //.domain([0, d3.max(data)])
        .range([0, width]);

    const chart = d3.select('#horizontalBarChart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    d3.csv('static/csv/auto.csv').then(function(data) {
        data.forEach(function(d) {
            d.value = +d.value;
        });
        console.log(data);
        
        x.domain([0, d3.max(data, datum => datum.value)]);
        

        //console.log(Object.keys(data).length);
        chart.attr('height', barHeight * data.length);

        const bar = chart.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

        bar.append("rect")
            .attr("width", (datum) => x(datum.value))
            .attr("height", barHeight - 1);

        bar.append("text")
            .attr("x", (datum) => x(datum.value) - 3)
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text((datum) => datum.value);

    }).catch(function(error) {
        console.log(error);
    });

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }
})();
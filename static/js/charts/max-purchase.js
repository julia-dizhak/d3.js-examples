(function () {

    const margin = { top: 20, right: 10, bottom: 20, left: 40 },
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // own funds
    const y = d3.scaleLinear().domain([10000, 500000]).range([height, 0]);

    // gross income
    //const x = d3.scaleLog().domain([24000, 350000]).range([0, width]);

    // max purchase
    const x = d3.scaleLog().domain([50000, 50000000]).range([0, width]);

    //a = pi* r^2
    //const r = d3.scaleSqrt().domain([500000, 5000000]).range([10, 50]);

    // gross income
    //const r = d3.scaleSqrt().domain([24000, 350000]).range([10, 50]);


    const svg = d3.select("#max-purchase")
        .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr('fill', '#ccc');

    const circle1 = svg.append('circle')
        .attr('fill', 'grey')
        //.attr('r', r(10))
        .attr('r', 10)
        .attr('cx', x(100000))
        .attr('cy', y(100000))

    const circle2 = svg.append('circle')
        .attr('fill', 'black')
        //.attr('r', r(20))
        .attr('r', 10)
        .attr('cx', x(150000))
        .attr('cy', y(100000));

    const circleRussia = svg.append('circle')
        .attr('fill', 'green')
        //.attr('r', r(30))
        .attr('r', 10)
        .attr('cx', x(200000))
        .attr('cy', y(100000));

})();           
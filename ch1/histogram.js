const width = 900,
    height = 300,
    pad = 20, // padding from edge
    left_pad = 100; // allow for labels

// define a horizontal scale
const xRange = d3.scaleBand()
  .range([left_pad, width-pad])
  .padding([0.1]);
console.log(xRange.range());  
//const x = d3.scaleOrdinal().range([left_pad, width - pad], 0.1);
//console.log(xRange);

// define a vertical scale
const yRange = d3.scaleLinear().range([height - pad, pad]);
//console.log(yRange);

var xAxis = d3.axisBottom(xRange);
var yAxis = d3.axisLeft(yRange);

const svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json('histogram-hours.json', function (data) {
    data = d3.keys(data).map(function (key) {
        return {
            bucket: Number(key),
            N: data[key]
        };
    });
    console.log(data);

    x.domain(data.map(function (d) { return d.bucket; }));
    y.domain([0, d3.max(data, function (d) { return d.N; })]);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0, "+(height-pad)+")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+(left_pad-pad)+", 0)")
        .call(yAxis);

    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function (d) { return x(d.bucket); })
        .attr('width', x.rangeBand())
        .attr('y', height-pad)
        .transition()
        .delay(function (d) { return d.bucket*20; })
        .duration(800)
        .attr('y', function (d) { return y(d.N); })
        .attr('height', function (d) { return height-pad - y(d.N); });

});

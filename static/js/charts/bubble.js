// draw the bars
const dataset = _.map(_.range(25), function(index) {
    return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 30  
    }
});

const margin = {top: 0, right: 10, bottom: 10, left: 10}; 

const multiplier = 7,
  width = 400 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

const svg = d3.select('#scatterPlot')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, width])  

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(data) {
      return data.y;
  })])
  .range([height, 0]);

//const colorScale = d3.scaleLinear()  
//const colorScale = d3.scaleQuantize()
const colorScale = d3.scaleQuantile()
  //.domain([0, d3.max(dataset)])
  //.domain([0, dataset.length])
  .domain([0, 10, dataset.length - 10, dataset.length])
  .range(['yellow', 'orange', 'green']);  // smallest will be orange -> biggest is purple

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('class', 'bubble')
  .attr('cx', function(data) {
      return xScale(data.x)
  })
  .attr('cy', function(data) {
      return yScale(data.y)
  })
  .attr('r', function(data) {
      return data.r;
  })
  .attr('fill', function(item, index) {
    return colorScale(index)
  });
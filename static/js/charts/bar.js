// draw the bars
//const dataset = [5, 10, 15, 25, 30, 20, 35];
const dataset = _.map(_.range(20), function(index) {
    return Math.random() * 50;
});

const margin = {top: 0, right: 10, bottom: 10, left: 10}; 

const multiplier = 7,
  width = 400 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

const svg = d3.select('#chartArea')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

// horizontal scale 
const xScale = d3.scaleBand()
  .domain(dataset)
  .range([0, width])
  .padding([0.1])  

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset) * 1.1])
  .range([0, height]);

//const colorScale = d3.scaleLinear()  
//const colorScale = d3.scaleQuantize()
const colorScale = d3.scaleQuantile()
  //.domain([0, d3.max(dataset)])
  //.domain([0, dataset.length])
  .domain([0, 10, dataset.length - 10, dataset.length])
  .range(['yellow', 'orange', 'purple', 'green']);  // smallest will be orange -> biggest is purple

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (item, index) => xScale(item))
  .attr('y', item => height - yScale(item))
  .attr('width', 20)
  .attr('height', (item) => yScale(item))
  //.attr('fill', colorScale)
//   .attr('fill', function(item) {
//       return colorScale(item)
//   })
  .attr('fill', function(item, index) {
    return colorScale(index)
  });
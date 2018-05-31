(function() {
    const dataset = _.map(_.range(25), function(index) {
        return {
            x: Math.random() * 100,
            y: Math.random() * 100,
            r: Math.random() * 30  
        }
    });
    //console.log(dataset);

    const margin = {top: 20, right: 20, bottom: 60, left: 60}; 

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
        .range([0, width]);

    const xAxis = d3.axisBottom(xScale)
        .ticks(10)
        .tickSizeInner(6)
        .tickSizeOuter(8)
        .tickPadding(10);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, '+ (height + 30) + ')')
        .call(xAxis);  

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function(data) {
            return data.y;
        })])
        .range([height, 0]);

    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(0,0)')
        .call(yAxis);     

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
        .attr('cx', function(datum) {
            return xScale(datum.x)
        })
        .attr('cy', function(datum) {
            return yScale(datum.y)
        })
        .attr('r', function(datum) {
            return datum.r;
        })
        .attr('fill', function(datum, index) {
            return colorScale(index);
        })
        .on('mouseover', function(datum) {
            d3.select(this).classed('active', true);
        })
        .on('mouseout', function(data) {
            d3.select(this).classed('active', false);
        })
        .on('mousedown', function(datum) {
            d3.select(this).attr('r', datum.r * 2)
        })
        .on('mouseout', function(datum) {
            d3.select(this).attr('r', datum.r)
        });

    document.getElementById("update").onclick =  function update() {
        _.each(dataset, function(data) {
            data.x = Math.round(Math.random() * 100);
            data.y = Math.round(Math.random() * 100);
            data.r = Math.round(Math.random() * 10);
        });

        svg.selectAll('circle')
            .transition()
            .duration(500)
            .ease(d3.easeBounce)
            //.delay(150)
            // .delay(function(data, index) {
            //     return index * 25;
            // })
            .attr('cx', function(data) {
                return xScale(data.x)
            })

            .transition()
            .duration(500)
            .attr('cy', function(data) {
                return yScale(data.y)
            })
            .style('fill', 'blue')

            .transition()
            .duration(500)
            .attr('r', function(data) {
                return data.r;
            })
            .style('fill', 'purple');
    }

})();

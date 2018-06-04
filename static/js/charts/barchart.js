(function () {
    //const dataset = [5, 25, 7, 24, 9, 8, 18, 23, 19, 14, 22, 20, 11, 13, 12];

    let dataset = [
        { key: 0, value: 5 },
        { key: 1, value: 10 },
        { key: 2, value: 13 },
        { key: 3, value: 19 },
        { key: 4, value: 21 },
        { key: 5, value: 25 },
        { key: 6, value: 22 },
        { key: 7, value: 18 },
        { key: 8, value: 15 },
        { key: 9, value: 13 },
        { key: 10, value: 11 },
        { key: 11, value: 12 },
        { key: 12, value: 15 },
        { key: 13, value: 20 },
        { key: 14, value: 18 },
        { key: 15, value: 17 },
        { key: 16, value: 16 },
        { key: 17, value: 18 },
        { key: 18, value: 23 },
        { key: 19, value: 25 }
    ];

    const width = 500,
        height = 200,
        barPadding = 0.05,
        padding = 20,
        multiplier = 7,
        margin = { top: 0, right: 10, bottom: 10, left: 10 };

    const svg = d3.select('#barChart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    let xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))
        .range([0, width])
        .padding(barPadding)

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (datum) { return datum.value }) * 1.1])
        .range([height, 0]);

    const key = function(datum) {
        return datum.key;
    };

    svg.selectAll('rect')
        .data(dataset, key)
        .enter()
        .append('rect')
        .attr('x', function (datum, index) {
            return xScale(index);
        })
        .attr('y', function (datum) {
            return yScale(datum.value);
        })
        .attr("width", xScale.bandwidth())
        .attr('height', function (datum) {
            return height - yScale(datum.value)
        })
        .attr("fill", function (datum) {
            return "rgb(0, 0, " + (datum.value * 10) + ")";
        });

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append('text')
        .attr('class', 'text')
        .text(function (datum) {
            return datum.value;
        })
        .attr("text-anchor", "middle")
        .attr("x", function (datum, index) {
            return index * (width / dataset.length) + 15;
        })
        .attr("y", function (datum, index) {
            return yScale(datum.value) + 15;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");


    // on click, update with new data    
    d3.selectAll('button').on('click', function () {
        let paragraphID = d3.select(this).attr('id');
        
        if (paragraphID === 'addValue') {
            const maxValue = 25,
                newNumber = Math.floor(Math.random() * maxValue),
                lastKeyValue = dataset[dataset.length - 1].key;

            let obj =  {
                key: lastKeyValue + 1,
                value: newNumber
            }   

            //dataset = [{dataset, ...obj}];    
            dataset.push({
                key: lastKeyValue + 1,
                value: newNumber
            });
        } else {
            dataset.shift();
        }

        xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .range([0, width])
            .padding(barPadding)

        yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, function (datum) { return datum.value }) * 1.1])
            .range([height, 0]);

        const bars = svg.selectAll('rect')
            .data(dataset, key);
            
        bars.enter()
            .append("rect")
            .attr('x', function (datum, index) {
                return xScale(index);
            })
            .attr("y", function(datum) {
                return height - yScale(datum.value);
            })
            .attr("width", xScale.bandwidth())
            .attr("height", function(datum) {
                return yScale(datum.value);
            })
            .attr("fill", function(datum) {
                return "rgb(0, 0, " + (datum.value * 10) + ")";
            });

        // update    
        bars.transition()
        .duration(500)
        .attr("x", function(d, index) {
            return xScale(index);
        })
        .attr("y", function(datum) {
            return height - yScale(datum.value);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function(datum) {
            return yScale(datum.value);
        });

        bars.exit()
            .transition()
			.duration(500)
            .attr("x", -xScale.bandwidth())
            .remove();
        
        d3.select('text').exit().remove();   

        svg.selectAll("text")
            .data(dataset, key)
            .transition()
            .duration(500)
            .text(function(datum) {
                return datum.value;
            })
            .attr("x", function(datum, index) {
                return xScale(index) + xScale.bandwidth() / 2;
             })
           .attr("y", function(datum) {
                return height - yScale(datum.value) + 14;
            });
    });
    
})();

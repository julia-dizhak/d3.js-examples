(function () {

    const w = 500,
        h = 200,
        barPadding = 0.05,
        padding = 20,
        multiplier = 7,
        margin = { top: 0, right: 10, bottom: 10, left: 10 };
        
    const dataset = [ 
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
    const len = dataset.length;
			
	let xScale = d3.scaleBand()
        .domain(d3.range(len))
        .range([0, w])
        .padding(barPadding);
    
	let yScale = d3.scaleLinear()
		.domain([0, d3.max(dataset, (datum) => datum.value)])
		.range([0, h]);
			
	const key = function(d) {
        return d.key;	
    };
            
    const svg = d3.select('#barChart')
        .append('svg')
        .attr('width', w + margin.left + margin.right)
        .attr('height', h + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
	
    svg.selectAll('rect')
        .data(dataset, key)
		.enter()
        .append('rect')
        .on('click', function(datum) {
            console.log(datum)
        })
        .attr("x", function(d, i) {
            return xScale(i);
        })
        .attr("y", function(d) {
            return h - yScale(d.value);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) {
            return yScale(d.value);
        })
        .attr("fill", function(d) {
            return "rgb(0, 0, " + (d.value * 10) + ")";
        });

    svg.selectAll("text")
        .data(dataset, key)
        .enter()
        .append("text")
        .text(function(d) {
            return d.value;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
        .attr("y", function(d) {
            return h - yScale(d.value) + 14;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");
        
        d3.selectAll("button").on("click", function() {
            let paragraphID = d3.select(this).attr("id");
					
            if (paragraphID == "addValue") {
                const maxValue = 25,
                newNumber = Math.floor(Math.random() * maxValue),
                lastKeyValue = dataset[dataset.length - 1].key;

                dataset.push({
                    key: lastKeyValue + 1,
                    value: newNumber
                });
            } else {
                dataset.shift();	
            }
					
			xScale.domain(d3.range(dataset.length));
			yScale.domain([0, d3.max(dataset, function(d) { return d.value; })]);
	
            const bars = svg.selectAll("rect")
                .data(dataset, key);
					
            bars.enter()
                .append("rect")
                .attr("x", w)
                .attr("y", function(d) {
                    return h - yScale(d.value);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function(d) {
                    return yScale(d.value);
                })
                .attr("fill", function(d) {
                    return "rgb(0, 0, " + (d.value * 10) + ")";
                });

            bars.transition()
                .duration(500)
                .attr("x", function(d, index) {
                    return xScale(index);
                })
                .attr("y", function(d) {
                    return h - yScale(d.value);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function(d) {
                    return yScale(d.value);
                });

            bars.exit()
                .transition()
                .duration(500)
                .attr("x", -xScale.bandwidth())
                .remove();
            
            // update all labels
            const labels = svg.selectAll("text")
                .data(dataset, key);
					
            labels.enter()
                .append("text")
                .text(function(d) {
                    return d.value;
                })
                .attr("text-anchor", "middle")
                .attr("x", w)
                .attr("y", function(d) {
                    return h - yScale(d.value) + 14;
                })						
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");

            labels.transition()
                .duration(500)
                .attr("x", function(d, i) {
                    return xScale(i) + xScale.bandwidth() / 2;
                });

            labels.exit()
                .transition()
                .duration(500)
                .attr("x", -xScale.bandwidth())
                .remove();

        });
        
})();

(function () {
    //const dataset = [5, 25, 7, 24, 9, 8, 18, 23, 19, 14, 22, 20, 11, 13, 12];

    // let dataset = [
    //     { key: 0, value: 5 },
    //     { key: 1, value: 10 },
    //     { key: 2, value: 13 },
    //     { key: 3, value: 19 },
    //     { key: 4, value: 21 },
    //     { key: 5, value: 25 },
    //     { key: 6, value: 22 },
    //     { key: 7, value: 18 },
    //     { key: 8, value: 15 },
    //     { key: 9, value: 13 },
    //     { key: 10, value: 11 },
    //     { key: 11, value: 12 },
    //     { key: 12, value: 15 },
    //     { key: 13, value: 20 },
    //     { key: 14, value: 18 },
    //     { key: 15, value: 17 },
    //     { key: 16, value: 16 },
    //     { key: 17, value: 18 },
    //     { key: 18, value: 23 },
    //     { key: 19, value: 25 }
    // ];

    const w = 500,
        h = 200,
        barPadding = 0.05,
        padding = 20,
        multiplier = 7,
        margin = { top: 0, right: 10, bottom: 10, left: 10 };

    // const svg = d3.select('#barChart')
    //     .append('svg')
    //     .attr('width', width + margin.left + margin.right)
    //     .attr('height', height + margin.top + margin.bottom)
    //     .append('g')
    //     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    // let xScale = d3.scaleBand()
    //     .domain(d3.range(dataset.length))
    //     .range([0, width])
    //     .padding(barPadding);

    // let yScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, function (datum) { return datum.value }) * 1.1])
    //     .range([height, 0]);

    // const key = function(datum) {
    //     return datum.key;
    // };

    // svg.selectAll('rect')
    //     .data(dataset, key)
    //     .enter()
    //     .append('rect')
    //     .attr('x', function (datum, index) {
    //         return xScale(index);
    //     })
    //     .attr('y', function (datum) {
    //         return yScale(datum.value);
    //     })
    //     .attr("width", xScale.bandwidth())
    //     .attr('height', function (datum) {
    //         return height - yScale(datum.value)
    //     })
    //     .attr("fill", function (datum) {
    //         return "rgb(0, 0, " + (datum.value * 10) + ")";
    //     });

    // svg.selectAll("text")
    //     .data(dataset)
    //     .enter()
    //     .append('text')
    //     .attr('class', 'text')
    //     .text(function (datum) {
    //         return datum.value;
    //     })
    //     .attr("text-anchor", "middle")
    //     .attr("x", function (datum, index) {
    //         return index * (width / dataset.length) + 15;
    //     })
    //     .attr("y", function (datum, index) {
    //         return yScale(datum.value) + 15;
    //     })
    //     .attr("font-family", "sans-serif")
    //     .attr("font-size", "11px")
    //     .attr("fill", "white");

    // // on click, update with new data    
    // d3.selectAll('button').on('click', function () {
    //     let paragraphID = d3.select(this).attr('id');
        
    //     if (paragraphID === 'addValue') {
    //         const maxValue = 25,
    //             newNumber = Math.floor(Math.random() * maxValue),
    //             lastKeyValue = dataset[dataset.length - 1].key;

    //         let obj =  {
    //             key: lastKeyValue + 1,
    //             value: newNumber
    //         }   

    //         //dataset = [{dataset, ...obj}];    
    //         dataset.push({
    //             key: lastKeyValue + 1,
    //             value: newNumber
    //         });
    //     } else {
    //         dataset.shift();
    //     }

    //     xScale = d3.scaleBand()
    //         .domain(d3.range(dataset.length))
    //         .range([0, width])
    //         .padding(barPadding)

    //     yScale = d3.scaleLinear()
    //         .domain([0, d3.max(dataset, function (datum) { return datum.value }) * 1.1])
    //         .range([height, 0]);

    //     const bars = svg.selectAll('rect')
    //         .data(dataset, key);
            
    //     bars.enter()
    //         .append("rect")
    //         .attr('x', function (datum, index) {
    //             return xScale(index);
    //         })
    //         .attr("y", function(datum) {
    //             return height - yScale(datum.value);
    //         })
    //         .attr("width", xScale.bandwidth())
    //         .attr("height", function(datum) {
    //             return yScale(datum.value);
    //         })
    //         .attr("fill", function(datum) {
    //             return "rgb(0, 0, " + (datum.value * 10) + ")";
    //         });

    //     // update    
    //     bars.transition()
    //     .duration(500)
    //     .attr("x", function(d, index) {
    //         return xScale(index);
    //     })
    //     .attr("y", function(datum) {
    //         return height - yScale(datum.value);
    //     })
    //     .attr("width", xScale.bandwidth())
    //     .attr("height", function(datum) {
    //         return yScale(datum.value);
    //     });

    //     bars.exit()
    //         .transition()
	// 		.duration(500)
    //         .attr("x", -xScale.bandwidth())
    //         .remove();
        
    //     // dynamic labels    
    //     const labels = svg.selectAll("text")
    //         .data(dataset, key);

    //     // enter    
    //     labels.enter()
    //         .append("text")
    //         .text(function(datum) {
    //             return datum.value;
    //         })
    //         .attr("text-anchor", "middle")
    //         //.attr("x", width)
    //         .attr("x", function (datum, index) {
    //             return index * (width / dataset.length) + 15;
    //         })
    //         .attr("y", function(datum) {
    //             return height - yScale(datum.value) + 15;
    //            // return yScale(datum.value) + 15;
    //         })						
    //         .attr("font-family", "sans-serif")
    //         .attr("font-size", "11px")
    //         .attr("fill", "white");

    //     // update
    //     labels.transition()
    //         .duration(500)
    //         .attr("x", function(datum, index) {
    //             return xScale(index) + xScale.bandwidth() / 2;
    //         });

    //      // exit
    //     labels.exit()
    //         .transition()
    //         .duration(500)
    //         .attr("x", -xScale.bandwidth())
    //         .remove();
    // });
    
    // var w = 600;
	// 		var h = 250;
			
			var dataset = [ { key: 0, value: 5 },		//dataset is now an array of objects.
							{ key: 1, value: 10 },		//Each object has a 'key' and a 'value'.
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
							{ key: 19, value: 25 } ];
			
		
                            let xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))
        .range([0, w])
        .padding(barPadding);
    
			var yScale = d3.scaleLinear()
							.domain([0, d3.max(dataset, function(d) { return d.value; })])
							.range([0, h]);
			
			//Define key function, to be used when binding data
			var key = function(d) {
				return d.key;
			};
			
            //Create SVG element
            const svg = d3.select('#barChart')
            .append('svg')
            .attr('width', w + margin.left + margin.right)
            .attr('height', h + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

			

			//Create bars
			svg.selectAll("rect")
			   .data(dataset, key)
			   .enter()
			   .append("rect")
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

			//Create labels
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




			//On click, update with new data			
			d3.selectAll("button")
				.on("click", function() {

					//See which p was clicked
					var paragraphID = d3.select(this).attr("id");
					
					//Decide what to do next
					if (paragraphID == "addValue") {
						//Add a data value
						var maxValue = 25;
						var newNumber = Math.floor(Math.random() * maxValue);
						var lastKeyValue = dataset[dataset.length - 1].key;
						console.log(lastKeyValue);
						dataset.push({
							key: lastKeyValue + 1,
							value: newNumber
						});
					} else {
						//Remove a value
						dataset.shift();	//Remove one value from dataset
					}
					
					//Update scale domains
					xScale.domain(d3.range(dataset.length));
					yScale.domain([0, d3.max(dataset, function(d) { return d.value; })]);

					//Select…
					var bars = svg.selectAll("rect")
						.data(dataset, key);
					
					//Enter…
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

					//Update…
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

					//Exit…
					bars.exit()
						.transition()
						.duration(500)
						.attr("x", -xScale.bandwidth())
						.remove();



					//Update all labels
	
					//Select…
					var labels = svg.selectAll("text")
						.data(dataset, key);
					
					//Enter…
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

					//Update…
					labels.transition()
						.duration(500)
						.attr("x", function(d, i) {
							return xScale(i) + xScale.bandwidth() / 2;
						});

					//Exit…
					labels.exit()
						.transition()
						.duration(500)
						.attr("x", -xScale.bandwidth())
						.remove();

				});


})();

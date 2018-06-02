(function() {

    const w = 300,
        h = 200;

    let path,
        subjects;

    $.getJSON('static/json/math.json', function (json) {
        subjects = json;
    
        _.keys(subjects).forEach(function(subject) {
            subjects[subject].forEach(function(datum) {
                datum.date = d3.timeParse('%Y%m%d')(datum.date);
            });
        });

        path = d3.select('#line')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .append('g')
            .append('path');
            
        updateChart('science');

        document.getElementById('math').onclick = updateChart('math');
        document.getElementById('science').onclick = updateChart('science');
        document.getElementById('reading').onclick = updateChart('reading');
    });    

    function updateChart(subject) {
        let data = subjects[subject],
        dates = _.map(data, 'date'),
        counts = _.map(data, 'count');

        const x = d3.scaleTime()
            .domain(d3.extent(dates))
            .range([0, w]);
         
        const y = d3.scaleLinear()
            .domain(d3.extent(counts))
            .range([h, 0]);    
        
        const line = d3.line()
            .x(function(datum) {
                return x(datum.date);
            })
            .y(function(datum) {
                return y(datum.count);
            })
            .curve(d3.curveBasis);
        
        path
            .datum(data)
            .transition()
            .duration(450)
            .attr('d', line);     
    }
})(); 
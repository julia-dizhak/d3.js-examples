This is just a haphazard collection of code examples for a d3.js book.

# References
* [Use D3 to build interactive charts](https://egghead.io/courses/use-d3-v3-to-build-interactive-charts-with-javascript)
* [Interactive Data Visualization for the web (Orelly) by Scott Murray](http://shop.oreilly.com/product/0636920026938.do)


## D3.js
* creating a histogram indicationg when the Github users commit code.
* .classed()
* d3.max

### Variety of charts
* bar charts
* scatter plot (bubble chart)


### Scaling types
* scaling basics: .domain() - input domain, .range() - maximum output ranges; color scale; 
* scaling types: .scaleLinear(), .scaleOrdinal(), .scaleBand(), .scaleQuantize(), .scaleQuantile()


### Transitions
* transtitions - interactivity, smooth animatoin to your charts
* .transition() - apply a transition
* .duration()
* .ease(d3.easeBounce) - control the speed of the transition
* .delay()


### Debug
* $0
* $0.__data__

### Todo
* labels 
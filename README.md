This is a just collection of code examples from D3.js books (references below).

demo is https://julia-dizhak.github.io/d3.js-examples/index.html

# References

Videos
* [Use D3 to build interactive charts](https://egghead.io/courses/use-d3-v3-to-build-interactive-charts-with-javascript)

Books
* [Interactive Data Visualization for the web (Orelly) by Scott Murray](http://shop.oreilly.com/product/0636920026938.do)
* [Data Visualization with d3.js by Swizec Teller](https://www.packtpub.com/web-development/data-visualization-d3js)


## D3.js
* creating a histogram indicationg when the Github users commit code.
* .classed()
* d3.max

### Build charts
* bar charts
* scatter plot (or bubble chart)
* line chart 
* area chart 


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
* making a scatter plot (arra of arrays)
* using call() created stepped transition
* margins convention add link

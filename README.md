# event-filter.js
Filter handling by specified function


# Example
```javascript
// create filter
var handlerFn = createFilter(renderFn, filterFn);

// perform Some repaints or/and calculations
function renderFn(value) {
  // value - results of filterFn 
}

// if returned value not equal previous value, renderFn will called
function filterFn() {
  return document.body.clientWidth > 1024;
}

// assign listener to event
window.onresize = handlerFn;
```

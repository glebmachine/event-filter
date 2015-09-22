# event-filter
Filter handling by specified function

// create filter
var handlerFn = createFilter(renderFn, filterFn);

// perform Some repaints or/and calculations
function renderFn(value) {
  // value - results of filterFn 
}

// if return value changed, renderFn called
function filterFn() {
  return document.body.clientWidth > 1024;
}

window.onresize = handlerFn;

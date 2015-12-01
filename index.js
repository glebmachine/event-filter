
function createFilter(fn, getter, initial){
  var _value = initial;

  if (getter) {
    return function(){
      var value = getter();
      if (_value === value) return;
      _value = value;
      fn(value);
    }
  }

  return function(value){
    if (_value === value) return;
    _value = value;
    fn(value); 
  }
}

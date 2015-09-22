
function createFilter(fn, getter){
  var _value;

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

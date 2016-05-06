// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null){
  	return String(null);
  }else if(typeof obj === 'boolean'){
  	return String(obj);
  }else if(typeof obj === 'number'){
  	return String(obj);
  }else if(typeof obj === 'string'){
  	//strings should get redundent quotes when stringified (necessary for object keys)
    return '"' + obj + '"';
  }else if(typeof obj === 'undefined' || typeof obj === 'function'){
    //'functions' and 'undefined' objects are not stringifiable, they should return undefined
    return undefined;
  }else if(typeof obj === 'object'){
  	if(Array.isArray(obj)){
      //arrays
      var arrString = _.map(obj, function(item){
  	  	if(typeof obj === 'undefined' || typeof obj === 'function'){
  	  	  //*special behavior: unstringifiable objects should return 'null' instead of undefined when inside Arrays
          item = null;
  	  	}
  	  	return stringifyJSON(item); //recursive call the stringifyJSON 
  	  }).join(',');
  	  return '[' + arrString + ']';
  	}else{
      //plain objects
  	  for(var i in obj){
  	  	if(typeof obj[i] === 'function'){
  	  	  //*special behavior: if an object has a function inside of it, drop everything and return an empty object
          //note: 'undefined' does not trigger a similar behavior when inside an object
          return '{}';
  	  	}
  	  }
  	  var objString = _.map(obj, function(item, key){
  	  	return stringifyJSON(key) + ':' + stringifyJSON(item); //recursive call the stringifyJSON 
  	  }).join(',');
  	  return '{' + objString + '}';
  	}
  }
};

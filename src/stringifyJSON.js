// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null){
  	return 'null';
  }else if(typeof obj === 'boolean'){
  	return String(obj);
  }else if(typeof obj === 'number'){
  	return String(obj);
  }else if(typeof obj === 'string'){
  	return '"' + obj + '"';
  }else if(typeof obj === 'object'){
  	if(Array.isArray(obj)){
      var arrString = _.map(obj, function(item){
  	  	if(typeof obj === 'undefined' || typeof obj === 'function'){
  	  	  item = null;
  	  	}
  	  	return stringifyJSON(item);
  	  }).join(',');
  	  return '[' + arrString + ']';
  	}else{
  	  for(var i in obj){
  	  	if(typeof obj[i] === 'function'){
  	  	  return '{}';
  	  	}
  	  }
  	  var objString = _.map(obj, function(item, key){
  	  	return stringifyJSON(key) + ':' + stringifyJSON(item);
  	  }).join(',');
  	  return '{' + objString + '}';
  	}
  }else if(typeof obj === 'undefined' || typeof obj === 'function'){
  	return undefined;
  }
};

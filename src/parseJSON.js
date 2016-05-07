// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var isNum = _.every(json.split(""),function(item){
  	return item >= '0' && item <= '9';
  });
  var isString = (json[0] === '"' && json[json.length-1] === '"');
  var isArray = (json[0] === '[' && json[json.length-1] === ']');
  var isObject = (json[0] === '{' && json[json.length-1] === '}');

  var escapes = ['\"','\\','\/','\b','\f','\n','\r','\t']; //missing '\u'

  if(json === 'null'){
  	return null;
  }else if(json === 'true'){
  	return true;
  }else if(json === 'false'){
  	return false;
  }else if(isNum){
  	return Number(json);
  }else if(isString){
  	//handle escapements
  	var str = json.slice(1,json.length-1)
  	return str.split("").map(function(item){
      var isEscape = false;
      escapes.forEach(function(a){
        if(a === item){
          isEscape = true;
        }
      });
      if(isEscape){
        return '\\' + item;
      }else{
        return item;
      }
    }).join("");
  }else if(isArray){

  }else if(isObject){

  }else{
  	//bad value
  }
};

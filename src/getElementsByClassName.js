// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];

  function recursiveHelper(node){
  	var bool = false;
  	if(node.classList){
  	  for(var i=0; i<node.classList.length; i++){
  	    if(node.classList[i] == className){
  	  	  bool = true;
  	    }
  	  }
  	}
  	if(bool){
  	  results.push(node);
  	}
  	for(var i=0; i<node.childNodes.length; i++){
  	    recursiveHelper(node.childNodes[i]);	
  	  }
  }
  recursiveHelper(document.documentElement);
  return results;
};

















// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

var getElementsByClassName = function(className){
	var body = document.body; 
	var children = body.childNodes; // all direct nodes of body in array
	var elements = [];

	//recursive function
	var checkChild = function(array){
	  for(var i=0; i<array.length; i++){
	    var node = array[i];
	    var list = node.classList;
	      for(var key in list){
		    if(list[key] === className){
		      elements.push(node)
		    }
		  }
	    if(node.childNodes){
	      checkChild(node.childNodes);
	    }
	  }
    }
    //check body element first then send everything else into the recursive function
	var arr = body.classList
	for(var i=0; i<arr.length; i++){
		if(arr[i] === className){
			elements.push(body);
		}
	}
	//use the recursive function for all the child nodes of body and rest of DOM 
	var nodes = body.childNodes
	if(nodes.length > 0){
	  checkChild(nodes);
	}
	return elements;
};

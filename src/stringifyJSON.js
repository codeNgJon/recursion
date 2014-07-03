// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
 // account for obj isn't an object (string, number, boolean)
	if(typeof obj !== "object" || obj === null){
	  if(typeof obj === "string"){
	    obj = '"'+obj+'"';
	  }
	  return String(obj);
    }
    
	// if obj is an array 
	else if(Array.isArray(obj)){
	  var arr = [];
	    for(var i=0; i<obj.length;i++){
		  var item = obj[i];
		  if(typeof item !== "object" || item === null){
		    if(typeof item === "string"){
		      item = '"' + item + '"';
		    }
		    else if(typeof item === undefined || typeof item === "function")
		    item = String(item);
		  }

		  else if(typeof item !== null && typeof item === "object"){
		    item = stringifyJSON(item);
		  }
		  arr.push(item);
		}
		return "[" + arr + "]";
	} 
	// if obj is an object
	else {
	  var newObj = [];
	  for(var key in obj){
	    var value = obj[key];
	    if(typeof value !== "object" || value === null){
		  if(typeof value === "string"){
		    value = '"'+value+'"';
		  }
		  else if(typeof value === undefined || typeof value === "function"){
		    return "{}";
		  }
		  value = String(value);
		}
		else if(typeof value === "object" && value !== null){
		  value = stringifyJSON(value);
		}
		newObj.push('"'+key+'":'+value);
	  }
	  return "{" + newObj + "}";
	}
};  






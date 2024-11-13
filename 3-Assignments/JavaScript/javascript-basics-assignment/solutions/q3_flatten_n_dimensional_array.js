/* Write a Program to Flatten a given n-dimensional array */



const flatten = (arr) => {
	// Write your code here

	     if(typeof arr === "string"){
			return null;
		 }

	
		let result = [];
	  
		for (let i = 0; i < arr.length; i++) {
		  if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]));
		  } else {
			result.push(arr[i]);
		  }
		}
	  
		return result;
	  
	
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

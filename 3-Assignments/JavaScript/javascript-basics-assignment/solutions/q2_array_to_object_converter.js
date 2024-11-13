/* Write a Program to convert an array of objects to an object
	based on a given key */


	const convert = (arr,key) => {
		// Write your code here
		let obj = {}
		let isValid = true;
		for( let objEle of arr){
			if(!objEle[key]){
				isValid = false;
				break;
			}
	
		}
	
		if(isValid){
			for( let objEle of arr){
				obj[objEle[key]] = objEle;
			}
			return obj;
	
		}else{
			return null;
		}
	
	
	};
	
	/* For example,
	INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
	OUTPUT - {
				'1': {id: 1, value: 'abc'},
				'2': {id: 2, value: 'xyz'}
			 }
	
	
	*/
	
	module.exports = convert;
	
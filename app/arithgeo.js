'use strict'

module.exports = {
	arithGeo :(arr) => {
	const diff = arr[1] - arr[0];
	const ratio = arr[1]/arr[0];
	let sequenceType = '';
	if(arr.length === 0){
		return 0;
	}
	else{
		for(let counter = 0; counter < arr.length; counter++){
			if(arr[counter + 2] - arr[counter + 1] === diff){
				sequenceType = 'Arithmetic';
			}
			else if(arr[counter + 2]/arr[counter + 1] === ratio){
				sequenceType = 'Geometric';
			}
		}
	return sequenceType ? sequenceType : -1 ;
}
}
}
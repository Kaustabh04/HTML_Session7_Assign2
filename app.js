
// Function findSum will return the sum of the nos  passed to it using arguments array

function findSum(){
	var i, sum = 0;
	for (i = 0; i<arguments.length; i= i + 1){
		sum += arguments[i];
	}
	return sum;
}

// Print the sum in the console

console.log("The Sum of the numbers is " + findSum(10,20,30,40,50));
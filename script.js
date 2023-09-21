function firstNonRepeatedChar(str) {
 // Write your code here
	const frequency={};
	for(const char of str){
		frequency[char]=(frequency[char]|| 0)+1;
	}
	for(const char of str){
		if(frequency[char]==1){
			return char;
		}
	}return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

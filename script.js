// complete the given function

function palindrome(str){	
	let rev=str.split(" ").reverse().join(" ");
	return rev===str;
}
module.exports = palindrome

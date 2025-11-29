// complete the given function

function palindrome(str){	
	str=str.toLowerCase();
	let rev=str.split("").reverse().join("");
	return rev===str;
}
module.exports = palindrome

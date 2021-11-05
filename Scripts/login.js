// Loop through Array of Objects
var loginData = [
	{ // Object @ 0 index
		email: "danni@gmail.com",
		password: "12345"
	},
	{ // Object @ 1 index
		email: "random@gmail.com",
		password: "i love pizza"
	},
	{ // Object @ 2 index
		email: "chris@hotmail.com",
		password: "yah!"
	}

];

function getInfo() {
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	for(var i = 0; i < loginData.length; i++) {
		// check is user input matches email and password of a current index of the array
		if(email == loginData[i].email && password == loginData[i].password) {
			// stop the function if this is found to be true
			return
		}
	}
	window.alert("incorrect email or password");
    return false;
}
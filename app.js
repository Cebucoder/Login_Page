let success = document.getElementById("success");
let error = document.getElementById("error");
let empty = document.getElementById("empty");


function login(){
	let user = document.getElementById("username").value;
	let pass = document.getElementById("password").value;

	let Defuser = "dan";
	let Defpass = "123";

	// let matcheduser = user == Defuser;
	// let matchedpass = pass == Defpass;

	if((user == Defuser) && (pass == Defpass )){

		success.classList.add("toggle-success");
		error.classList.remove("toggle-error");
		empty.classList.remove("toggle-empty");



	}else if((user != Defuser) && (pass != Defpass )){
		error.classList.add("toggle-error");
		empty.classList.remove("toggle-empty");
		success.classList.remove("toggle-success");

	}

}
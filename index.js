'use strict';

// Validate e-mail address
function validateEmail() {
	if ( /.+@.+\..+/.test(document.querySelector("#email-input").value) ) {
		return true;
	} else {
		document.querySelector("main").appendChild(document.createElement("small"));
		document.querySelector("main :last-child").innerHTML = "Please provide a valid email";
		document.querySelector("main :last-child").style.color = "var(--soft-red)";
		document.querySelector("main form input[type=email]")
			.style.backgroundImage = 'url("images/icon-error.svg")';
		console.log("hi");
	}
}

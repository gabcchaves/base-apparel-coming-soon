'use strict';

// Validate e-mail address
function validateEmail() {

	if ( /.+@.+\..+/.test(document.querySelector("#email-input").value) ) {
		if (document.querySelector("main small") !== null) {
			document.querySelector("main").removeChild(document.querySelector("main small"));
			document.querySelector("main form input[type=email]").style.background = "none";
		}
		return true;
	} else {
		let errorMsg = document.createElement("small");
		errorMsg.innerHTML = "Please provide a valid email";
		errorMsg.style.color = "var(--desaturated-red)";
		errorMsg.style.width = "100%";
		errorMsg.style.padding = "4% 5%";
		errorMsg.style.display = "block";
		document.querySelector("main").appendChild(errorMsg);
		document.querySelector("main form input[type=email]")
			.style.backgroundImage = 'url("images/icon-error.svg")';
		document.querySelector("main form input[type=email]")
			.style.backgroundRepeat = "no-repeat";
		document.querySelector("main form input[type=email]")
			.style.backgroundPosition = "78% center";
	}
}

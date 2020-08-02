// Enable Tooltips
$(() => {
  $('[data-toggle="tooltip"]').tooltip()
});

document.forms["contactForm"].addEventListener("submit", e => {
	e.preventDefault();
	if (e.srcElement[1].value.match(/@\w/)) {
		// Close Popup and Submit form
		e.srcElement[1].classList.remove("is-invalid");
		$("#contact-modal").modal("hide");
		e.target.reset();
	} else {
		// Add is-invalid class to emailInout
		e.srcElement[1].classList.add("is-invalid");
	}


	
});

// Copy Post link to Clipboard
function sharePost() {
	navigator.clipboard.writeText(document.URL).then(() => {
		addAlert("success", "Copied Successfully!", document.querySelector("#alert-area"));
	}, () => {
		addAlert("danger", "Failed to Copy!", document.querySelector("#alert-area"));
	});
}

// Add alert to the given parent
function addAlert(type, message, parent) {
	let alertDiv = document.createElement("div");
	alertDiv.setAttribute("role", "alert");
	alertDiv.classList.add(...["alert", `alert-${type}`, "alert-dissmissable", "fade", "show", "mb-0"]);

	alertDiv.innerHTML = `${message}
	<button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;

	parent.appendChild(alertDiv);
}

function validateEmail(element) {
	let target = document.querySelector(element.dataset.emailInput);
	let email = target.value;

	if(!email.match(/@\w/)) {
		target.classList.add("is-invalid");
		addAlert("danger", "Invalid Email!", document.querySelector("#alert-area"));
	} else {
		target.classList.remove("is-invalid");
		addAlert("success", "You have successfully signed up for our newsletter. Confirm your email to start receiving emails!", document.querySelector("#alert-area"));
	}
}
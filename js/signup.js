document.getElementById("signup-form").addEventListener("submit", async function(e) {
	e.preventDefault();

	const username = document.getElementById("username").value;
	const email = document.getElementById("email").value;
	const name = document.getElementById("name").value;
	const phone = document.getElementById("phone").value;
	const password = document.getElementById("password").value;

	const userData = {
		emailId: email,
		dob: name,
		phone,
		password
	};

	console.log(userData);

	const apiBaseUrl = window.location.hostname === 'localhost'
		? 'http://localhost:8080'
		: 'https://portfolio-service-production.up.railway.app';

	const res = await fetch(`${apiBaseUrl}/auth/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userData)
	});

	if (res.ok) {
		alert("Signup successful!");
		window.location.href = "signin.html";
	} else {
		const error = await res.json();
		console.error("Signup failed:", error);
		alert("Signup failed. See console.");
	}
});
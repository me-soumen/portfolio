document.getElementById("signin-form").addEventListener("submit", async function(e) {
	e.preventDefault();
	const email = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const userData = {
		emailId: email,
		password
	};

	console.log(userData);

	const apiBaseUrl = window.location.hostname === 'localhost'
		? 'http://localhost:8080'
		: 'https://portfolio-service-production.up.railway.app';

	const res = await fetch(`${apiBaseUrl}/auth/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userData)
	});

	if (res.ok) {
		const data = await res.json()
		sessionStorage.setItem("username", username);
		sessionStorage.setItem("token", data.token);
		console.log("SignIn successful!");
		window.location.href = "home.html";
	} else {
		const error = await res.json();
		console.error("Signin failed:", error);
		alert("Signip failed. See console.");
	}
});
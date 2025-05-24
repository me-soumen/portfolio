document.getElementById("investment-form").addEventListener("submit", function(e) {
	e.preventDefault();

	const username = sessionStorage.getItem("username");
	const password = sessionStorage.getItem("password");

	if (!username || !password) {
		window.location.href = "signin.html";
		return;
	}

	const investment = {
		type: document.getElementById("inv-type").value,
		date: document.getElementById("inv-date").value,
		amount: parseFloat(document.getElementById("inv-amount").value),
		interest: parseFloat(document.getElementById("inv-interest").value || 0),
		tenure: parseInt(document.getElementById("inv-tenure").value || 0)
	};

	// Simulate portfolio fetch and encryption
	let portfolio = [investment];
	const encryptedPortfolio = btoa(JSON.stringify(portfolio));

	console.log(`Saving portfolio for ${username}:`, encryptedPortfolio);

	alert("Investment added successfully.");
	window.location.href = "home.html";
});

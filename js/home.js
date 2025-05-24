document.addEventListener("DOMContentLoaded", function () {
	const username = sessionStorage.getItem("username");
	const token = sessionStorage.getItem("token");
	if (!token) {
		window.location.href = "signin.html";
		return;
	}

	document.getElementById("user-name").textContent = username;

	// Simulate fetch from GitHub and decrypt portfolio
	const encryptedPortfolio = btoa(JSON.stringify({ MF: 5000, FD: 2000 })); // fake data
	const decryptedData = JSON.parse(atob(encryptedPortfolio));

	const labels = Object.keys(decryptedData);
	const data = Object.values(decryptedData);

	new Chart(document.getElementById("portfolioChart"), {
		type: "pie",
		data: {
			labels,
			datasets: [{ data, backgroundColor: ["#4caf50", "#2196f3"] }]
		}
	});

	const list = document.getElementById("portfolio-list");
	labels.forEach((label, i) => {
		const li = document.createElement("li");
		li.className = "list-group-item";
		li.textContent = `${label}: ₹${data[i]}`;
		list.appendChild(li);
	});
});

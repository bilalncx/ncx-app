// api url
const api_url =
	"https://b2t-api-cmc-ncxdigital.flexprotect.org/marketdata/cmc/v1/summary";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	
    console.log(data);
    
    console.log(data.AAVE_USDT);


	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loadingssss').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.AAVE_USDT} </td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

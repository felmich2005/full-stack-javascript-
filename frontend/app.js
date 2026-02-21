// URL of your backend
const backendURL = "http://localhost:3000/users";

// Elements
const displayDiv = document.getElementById("backend-data");
const form = document.getElementById("customer-form");
const nameInput = document.getElementById("name");

// Function to fetch and render users
function loadUsers() {
  fetch(backendURL)
    .then(res => res.json())
    .then(users => {
      displayDiv.innerHTML = "";
      users.forEach(user => {
        const p = document.createElement("p");
        p.innerText = `${user.id}: ${user.name}`;
        displayDiv.appendChild(p);
      });
    })
    .catch(err => {
      displayDiv.innerText = "Error fetching data";
      console.error(err);
    });
}

// Handle form submission to add a new user
form.addEventListener("submit", e => {
  e.preventDefault();
  const newUser = { id: Date.now(), name: nameInput.value };
  
  fetch(backendURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      nameInput.value = "";
      loadUsers(); // Refresh the list
    })
    .catch(err => console.error(err));
});

// Load users on page load
loadUsers();
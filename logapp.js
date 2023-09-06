document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Implement your login logic here
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Example: Check if the username and password are correct (replace with your actual authentication logic)
    if (username === "your_username" && password === "your_password") {
        // Redirect to the Facebook Messenger integration page
        window.location.href = "index.html";
    } else {
        alert("Login failed. Please check your username and password.");
    }
});

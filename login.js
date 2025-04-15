// login.js
document.getElementById('loginBtn').addEventListener('click', () =>{
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Retrieve stored username and password from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('loggedInUsername', enteredUsername);
        // Redirect to main.html
        window.location.href = 'main.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

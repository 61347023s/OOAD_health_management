// register.js
document.getElementById('registerBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username == "" || password == ""){
        alert("Username or Password can not be empty!");
        return;
    }

    // Store user data in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert("Registration Success!");
    window.location.href = 'login.html';
});

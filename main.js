const loggedInUsername = localStorage.getItem('loggedInUsername');
if (loggedInUsername) {
    document.getElementById('welcomeMsg').textContent = `Your Grace, ${loggedInUsername}!`;
} else {
    console.log('User not logged in.');
}

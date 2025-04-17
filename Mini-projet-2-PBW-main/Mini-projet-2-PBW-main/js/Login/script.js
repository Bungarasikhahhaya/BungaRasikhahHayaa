document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    // Validate inputs are not empty
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }
    
    // Validate email format (must be gmail)
    if (!username.endsWith('@gmail.com')) {
        alert('Please use a Gmail account (@gmail.com)');
        return;
    }
    
    // Accept any gmail account with any password (as long as password is not empty)
    if (username.endsWith('@gmail.com') && password) {
        alert('Login successful!');
            
        window.location.href = "https://cs.usk.ac.id/~mhs/pbw_kelompok_6/index.html";

    } else {
        alert('Invalid username or password');
    }
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validasi checkbox Terms of Service
    let checkbox = document.getElementById('agree');
    if (!checkbox.checked) {
        alert('You must agree to the Terms of Service and Privacy Policy!');
        return;
    }

    // Validasi format email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Harap masukkan alamat email yang valid!');
        return;
    }

    // Validasi password match
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;
    
    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Signup successful!');
    window.location.href = "https://cs.usk.ac.id/~mhs/pbw_kelompok_6/index.html";
});

// Validasi real-time untuk field email
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        this.style.borderColor = 'red';
        if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-message')) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Format email tidak valid';
            errorMessage.style.color = '#ff6b6b';
            errorMessage.style.fontSize = '0.8rem';
            errorMessage.style.marginTop = '5px';
            this.parentNode.appendChild(errorMessage);
        }
    } else {
        this.style.borderColor = email ? '#76f5d0' : 'rgba(255, 255, 255, 0.3)';
        if (this.nextElementSibling && this.nextElementSibling.classList.contains('error-message')) {
            this.nextElementSibling.remove();
        }
    }
});

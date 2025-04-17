// Isi form dengan data pengguna (contoh)
document.addEventListener('DOMContentLoaded', function () {
    // Data pengguna contoh
    const userData = {
        firstName: "Amirul",
        lastName: "Mirdas",
        displayName: "Mirul",
        email: "miruldass@gmail.com",
        phone: "+62 812 3456 7890",
        location: "Jakarta, Indonesia",
        JenisKelamin: "Laki-laki",
    };

    // Mengisi formulir dengan data
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('displayName').value = userData.displayName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('location').value = userData.location;
    document.getElementById('Jenis Kelamin').value = userData.JenisKelamin;

    // Update nama dan email di header profil
    document.getElementById('profileName').textContent = userData.displayName;
    document.getElementById('profileEmail').textContent = userData.email;

    // Handler for form submission
    document.getElementById('profileForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Validasi formulir
        if (validateForm()) {
            // Bisa ditambahkan kode untuk mengirim data ke server
            saveUserData();
            alert('Profil berhasil diperbarui!');
        }
    });

    // Handler for cancel button
    document.querySelector('.btn-cancel').addEventListener('click', function () {
        if (confirm('Apakah Anda yakin ingin membatalkan perubahan?')) {
            window.location.href = 'profile.html'; // Redirect ke halaman profil
        }
    });

    // Fitur klik ikon foto profil untuk memilih file
    const uploadButton = document.querySelector(".btn-upload");
    const fileInput = document.getElementById("profilePicture");
    const profileImage = document.querySelector(".profile-picture img");

    // Klik tombol akan membuka input file
    uploadButton.addEventListener("click", function () {
        fileInput.click();
    });

    // Klik langsung pada gambar juga bisa membuka input file
    profileImage.addEventListener("click", function () {
        fileInput.click();
    });

    // Menampilkan gambar yang dipilih sebagai foto profil
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Validasi form
    function validateForm() {
        let isValid = true;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Reset pesan error sebelumnya
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.remove());

        // Validasi nama depan
        if (!firstName.trim()) {
            showError('firstName', 'Nama depan tidak boleh kosong');
            isValid = false;
        }

        // Validasi nama belakang
        if (!lastName.trim()) {
            showError('lastName', 'Nama belakang tidak boleh kosong');
            isValid = false;
        }

        // Validasi email
        if (!email.trim()) {
            showError('email', 'Email tidak boleh kosong');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Format email tidak valid');
            isValid = false;
        }

        // Validasi password jika ada
        if (newPassword || document.getElementById('currentPassword').value) {
            if (!document.getElementById('currentPassword').value) {
                showError('currentPassword', 'Masukkan kata sandi saat ini');
                isValid = false;
            }

            if (newPassword.length < 6) {
                showError('newPassword', 'Kata sandi minimal 6 karakter');
                isValid = false;
            }

            if (newPassword !== confirmPassword) {
                showError('confirmPassword', 'Konfirmasi kata sandi tidak cocok');
                isValid = false;
            }
        }

        return isValid;
    }

    // Utility function untuk menampilkan pesan error
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        input.parentNode.appendChild(errorDiv);
        input.style.borderColor = 'red';
    }

    // Validasi format email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Simulasi penyimpanan data
    function saveUserData() {
        const updatedUserData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            displayName: document.getElementById('displayName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            JenisKelamin: document.getElementById('JenisKelamin').value,
        };
        };

        // Simpan ke localStorage sebagai contoh
        // Dalam implementasi nyata, data akan dikirim ke server
        localStorage.setItem('userData', JSON.stringify(updatedUserData));

        console.log('Data tersimpan:', updatedUserData);
    }
);

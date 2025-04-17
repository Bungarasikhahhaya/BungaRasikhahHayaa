document.addEventListener('DOMContentLoaded', function() {
    // Toggle for mobile menu
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('show');
    });

    // Toggle for collapsing/expanding sidebar
    document.querySelector('.toggle-sidebar').addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');

        // Ubah gambar tombol berdasarkan status sidebar
        const icon = this.querySelector('.toggle-icon');
        if (sidebar.classList.contains('collapsed')) {
            icon.src = '/assets/images/navbar/menu.svg'; // Gambar saat sidebar tertutup
        } else {
            icon.src = '/assets/images/navbar/menu.svg'; // Gambar saat sidebar terbuka (gantilah dengan gambar yang sesuai)
        }
    });
    
    // Get all change buttons
    const changeButtons = document.querySelectorAll('.btn-change');
    
    // Add click event listener to each change button
    changeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create a file input element
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*'; // Accept only image files
            
            // Trigger click on the file input
            fileInput.click();
            
            // Handle file selection
            fileInput.addEventListener('change', function(event) {
                if (event.target.files && event.target.files[0]) {
                    const file = event.target.files[0];
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        // Update all profile images with the new image
                        const profileImages = document.querySelectorAll('.profile-img img, .profile-avatar img');
                        profileImages.forEach(img => {
                            img.src = e.target.result;
                        });
                        
                        // Here you would typically upload the file to your server
                        // Example: uploadImageToServer(file);
                        
                        alert('Profile image updated successfully!');
                    };
                    
                    reader.readAsDataURL(file);
                }
            });
        });
    });
    
    // Get all delete buttons
    const deleteButtons = document.querySelectorAll('.btn-delete');
    
    // Add click event listener to each delete button
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show confirmation dialog
            const confirmDelete = confirm('Are you sure you want to delete your profile picture?');
            
            if (confirmDelete) {
                // Default image URL - replace with your default profile image path
                const defaultImageUrl = '/assets/images/default-profile.png';
                
                // Update all profile images with the default image
                const profileImages = document.querySelectorAll('.profile-img img, .profile-avatar img');
                profileImages.forEach(img => {
                    img.src = defaultImageUrl;
                });
                
                // Here you would typically make a request to your server to delete the profile picture
                // Example: deleteProfileImageFromServer();
                
                alert('Profile image deleted successfully!');
            }
        });
    });
});

// Function to upload image to server (placeholder)
function uploadImageToServer(file) {
    // Create FormData object
    const formData = new FormData();
    formData.append('profileImage', file);
 
}

// Function to delete profile image from server (placeholder)
function deleteProfileImageFromServer() {
}
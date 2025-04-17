document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-sidebar');
    const icon = toggleButton.querySelector('.toggle-icon');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');

        // Change icon image when sidebar is closed or opened
        if (sidebar.classList.contains('collapsed')) {
            icon.src = 'assets/images/navbar/menu.svg'; // Icon when sidebar is closed
        } else {
            icon.src = 'assets/images/navbar/menu.svg'; // Icon when sidebar is open
        }
    });
});
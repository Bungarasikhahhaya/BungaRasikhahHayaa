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
});

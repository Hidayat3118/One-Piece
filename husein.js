document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 44; 
    const items = document.querySelectorAll('.item');
    let currentPage = 1;

    // Fungsi untuk menampilkan item sesuai dengan halaman aktif
    function showPage(page) {
        items.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
        });

        currentPage = page;
        updatePagination();
    }

    // Fungsi untuk memperbarui status pagination
    function updatePagination() {
        document.querySelectorAll('.page-number').forEach((button, index) => {
            button.classList.toggle('', index + 1 === currentPage); // Highlight halaman aktif
        });

        // Nonaktifkan tombol "Next" jika di halaman terakhir
        document.getElementById('nextBtn').disabled = currentPage === Math.ceil(items.length / itemsPerPage);
    }

    // Fungsi untuk ganti halaman
    window.changePage = function(page) {
        showPage(page);
    };

    // Fungsi untuk ke halaman berikutnya
    document.getElementById('nextBtn').addEventListener('click', function () {
        if (currentPage < Math.ceil(items.length / itemsPerPage)) {
            showPage(currentPage + 1);
        }
    });

    // Load halaman pertama saat pertama kali halaman dimuat
    showPage(currentPage);
});

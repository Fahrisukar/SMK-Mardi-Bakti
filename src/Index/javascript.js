
document.addEventListener("DOMContentLoaded", function() {
   

    // Tampilkan modal setelah 2 detik
    setTimeout(function() {
        document.getElementById("adModal").style.display = "block";
        }, 0);     

    // Dapatkan elemen modal
    var modal = document.getElementById("adModal");

    // Dapatkan elemen <span> yang menutup modal
    var span = document.getElementsByClassName("close")[0];

    // Ketika pengguna mengklik <span> (x), tutup modal
    span.onclick = function() {
        modal.style.display = "none";
    }
});
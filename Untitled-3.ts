/ script.js

// Array untuk menyimpan produk dalam keranjang
let cart = [];

// Fungsi untuk menambah produk ke keranjang
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    alert(`${productName} telah ditambahkan ke keranjang!`);
    console.log(cart); // Menampilkan isi keranjang di konsol
}

// Menambahkan event listener ke semua tombol "Tambah ke Keranjang"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productItem = button.parentElement;
            const productName = productItem.querySelector('h3').innerText;
            const productPrice = productItem.querySelector('p').innerText.replace('Harga: Rp ', '').replace(/\./g, ''); // Menghapus "Harga: Rp " dan titik
            addToCart(productName, parseInt(productPrice));
        });
    });
});

import { daftarBacaan } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(buku) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${buku.judul} (${buku.tahunRilis})`;   // teks, bukan HTML
  return li;
}

function render(daftar) {
  wadah.textContent = "";            // baris pertama, wajib

  if (daftar.length === 0) {         // keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((buku) => fragmen.append(buatKartu(buku)));
  wadah.append(fragmen);
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarBacaan.filter((buku) => {
    if (kategori === "semua") return true;
    if (kategori === "selesai") return buku.selesai;
    return !buku.selesai;            // kategori "belum"
  });

  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(daftarBacaan);
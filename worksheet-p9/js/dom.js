import { daftarBacaan } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
 
function buatKartu(buku) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${buku.judul} (${buku.tahunRilis})`;   // teks, bukan HTML
  return li;
}
 
function render(daftar) {
  wadah.textContent = "";                
 
  if (daftar.length === 0) {             
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
 
function saring(kategori) {
  return daftarBacaan.filter((buku) => {
    if (kategori === "semua") return true;
    if (kategori === "selesai") return buku.selesai;
    if (kategori === "belum") return !buku.selesai;
    if (kategori === "tes") return buku.kategori === "tes";
    return false;                        
  });
}
 
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                   
 
  tandaiTombolAktif(tombol);
  render(saring(tombol.dataset.kategori));
});
 
render(daftarBacaan);
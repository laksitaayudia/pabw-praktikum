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


const form = document.querySelector("#form-kontak");
const statusForm = document.querySelector("#status-form");
const tombolKirim = form.querySelector("button[type='submit']");

const aturan = {
  nama: {
    kolom: document.querySelector("#nama"),
    galat: document.querySelector("#galat-nama"),
    periksa: (nilai) => nilai.length >= 3 ? "" : "Isi nama lengkap Anda, minimal 3 huruf.",
  },
  email: {
    kolom: document.querySelector("#email"),
    galat: document.querySelector("#galat-email"),
    periksa: (nilai) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai)
      ? "" : "Tulis email dengan format nama@contoh.com.",
  },
  nim: {
    kolom: document.querySelector("#nim"),
    galat: document.querySelector("#galat-nim"),
    periksa: (nilai) => /^[0-9]{8}$/.test(nilai)
      ? "" : "NIM terdiri dari 8 digit angka, contoh 25523182.",
  },
  pesan: {
    kolom: document.querySelector("#pesan"),
    galat: document.querySelector("#galat-pesan"),
    periksa: (nilai) => nilai.length >= 10 ? "" : "Tulis pesan minimal 10 karakter.",
  },
};

let sudahCobaKirim = false;

function pesanGalat(nama) {                       // hanya memeriksa, tidak mengubah halaman
  const { kolom, periksa } = aturan[nama];
  return periksa(kolom.value.trim());            // trim: spasi saja tetap tidak sah
}

function periksaKolom(nama) {                     // memeriksa dan menampilkan pesannya
  const { kolom, galat } = aturan[nama];
  const pesan = pesanGalat(nama);
  galat.textContent = pesan;
  if (pesan) kolom.setAttribute("aria-invalid", "true");
  else kolom.removeAttribute("aria-invalid");
  return pesan === "";
}

function semuaSah() {
  return Object.keys(aturan).every((nama) => pesanGalat(nama) === "");
}

form.addEventListener("input", (event) => {       // satu pendengar untuk semua kolom
  const nama = event.target.id;
  if (!(nama in aturan)) return;
  statusForm.hidden = true;
  if (sudahCobaKirim) {
    periksaKolom(nama);
    tombolKirim.disabled = !semuaSah();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();                         // baris pertama: halaman tidak dimuat ulang
  sudahCobaKirim = true;

  const bermasalah = Object.keys(aturan).filter((nama) => !periksaKolom(nama));
  if (bermasalah.length > 0) {
    statusForm.hidden = true;
    tombolKirim.disabled = true;
    aturan[bermasalah[0]].kolom.focus();          // pindah ke kolom pertama yang bermasalah
    return;
  }

  statusForm.textContent = `Terima kasih, ${aturan.nama.kolom.value.trim()}. Pesan Anda sudah tercatat.`;
  statusForm.hidden = false;
  form.reset();
  Object.keys(aturan).forEach((nama) => {
    aturan[nama].galat.textContent = "";
    aturan[nama].kolom.removeAttribute("aria-invalid");
  });
  sudahCobaKirim = false;
  tombolKirim.disabled = false;
});
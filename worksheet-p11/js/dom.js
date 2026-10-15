const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
export const barisFilter = document.querySelector("#filter");
export const tombolAturUlang = document.querySelector("#atur-ulang");

export function buatKartu(buku) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${buku.judul} (${buku.tahunRilis})`;   // teks, bukan HTML
  return li;
}

// Tanda tombol aktif diturunkan dari state, bukan disimpan di halaman.
function tandaiTombolAktif(state) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
  });
}

// Menyaring dari state: kategori dibaca dari state.kategoriAktif.
function saring(state) {
  return state.daftarBacaan.filter((buku) => {
    if (state.kategoriAktif === "semua") return true;
    if (state.kategoriAktif === "selesai") return buku.selesai;
    if (state.kategoriAktif === "belum") return !buku.selesai;
    return false;
  });
}

export function render(state) {
  tandaiTombolAktif(state);
  wadah.textContent = "";                         // 1. kosongkan
  const tampil = saring(state);                   // dari state, bukan argumen
  if (tampil.length === 0) {                      // 2. keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  tampil.forEach((item) => wadah.append(buatKartu(item)));   // 3. isi ulang
}

// ---------- Formulir kontak ----------
export const form = document.querySelector("#form-kontak");
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

export function adalahKolomForm(nama) {
  return nama in aturan;
}

function pesanGalat(nama) {                       // hanya memeriksa, tidak mengubah halaman
  const { kolom, periksa } = aturan[nama];
  return periksa(kolom.value.trim());            // trim: spasi saja tetap tidak sah
}

export function periksaKolom(nama) {              // memeriksa dan menampilkan pesannya
  const { kolom, galat } = aturan[nama];
  const pesan = pesanGalat(nama);
  galat.textContent = pesan;
  if (pesan) kolom.setAttribute("aria-invalid", "true");
  else kolom.removeAttribute("aria-invalid");
  return pesan === "";
}

export function semuaSah() {
  return Object.keys(aturan).every((nama) => pesanGalat(nama) === "");
}

// Memeriksa semua kolom; mengembalikan nama kolom yang bermasalah.
export function periksaSemuaKolom() {
  return Object.keys(aturan).filter((nama) => !periksaKolom(nama));
}

export function sembunyikanStatusForm() {
  statusForm.hidden = true;
}

export function aturTombolKirim(nonaktif) {
  tombolKirim.disabled = nonaktif;
}

export function fokusKolom(nama) {
  aturan[nama].kolom.focus();
}

export function tampilkanTerimaKasih() {
  statusForm.textContent = `Terima kasih, ${aturan.nama.kolom.value.trim()}. Pesan Anda sudah tercatat.`;
  statusForm.hidden = false;
}

export function kosongkanForm() {
  form.reset();
  Object.keys(aturan).forEach((nama) => {
    aturan[nama].galat.textContent = "";
    aturan[nama].kolom.removeAttribute("aria-invalid");
  });
  tombolKirim.disabled = false;
}

// ---------- Notisia (data dari api.js) ----------
const wadahNotisia = document.querySelector("#daftar-notisia");

export function tampilkanPesanNotisia(teks) {
  wadahNotisia.textContent = teks;
}

export function gambarNotisia(daftar) {
  wadahNotisia.textContent = "";
  daftar.forEach(function (n) {
    const kartu = document.createElement("article");
    kartu.className = "kartu";
    const judul = document.createElement("h3");
    judul.textContent = n.judul;
    kartu.appendChild(judul);
    wadahNotisia.appendChild(kartu);
  });
}
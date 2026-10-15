import { daftarBacaan } from "./data.js";
import { render } from "./dom.js";

// ---------- Penyimpanan klien (localStorage) ----------
const KUNCI = "pabw-p11";
const VERSI = 2;
const KATEGORI_BAWAAN = "semua";

// Hanya yang perlu diingat yang disimpan: pilihan kategori. Bukan data besar, bukan data pribadi.
export function simpan(state) {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));   // null bila belum pernah disimpan
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);                      // bentuk lama atau kosong: buang
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);                        // isi rusak: buang
    return null;
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
}

// ---------- State ----------
const tersimpan = muat();

export const state = {
  // kunjungan pertama: tersimpan === null, jadi pakai nilai bawaan
  kategoriAktif: tersimpan?.kategoriAktif ?? KATEGORI_BAWAAN,
  daftarBacaan,
  daftarNotisia: [],
  sudahCobaKirim: false,
};

// Satu pintu masuk untuk mengganti kategori: ubah state, simpan, lalu gambar ulang.
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);                                      // sesudah berubah, sebelum render
  render(state);
}

// Tombol atur ulang: hapus simpanan, kembali ke nilai bawaan, gambar ulang.
export function kembalikanBawaan() {
  aturUlang();
  state.kategoriAktif = KATEGORI_BAWAAN;
  render(state);
}

// Hanya penanda internal formulir; tidak mengubah daftar bacaan, jadi tanpa render.
export function setSudahCobaKirim(nilai) {
  state.sudahCobaKirim = nilai;
}
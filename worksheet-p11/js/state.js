import { daftarBacaan } from "./data.js";
import { render } from "./dom.js";

export const state = {
  kategoriAktif: "semua",
  daftarBacaan,
  daftarNotisia: [],
  sudahCobaKirim: false,
};

// Satu pintu masuk untuk mengganti kategori: ubah state, lalu gambar ulang.
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state);
}

// Hanya penanda internal formulir; tidak mengubah daftar bacaan, jadi tanpa render.
export function setSudahCobaKirim(nilai) {
  state.sudahCobaKirim = nilai;
}
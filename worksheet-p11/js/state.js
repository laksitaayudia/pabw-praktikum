import { daftarBacaan } from "./data.js";

export const state = {
  kategoriAktif: "semua",
  daftarBacaan,
  daftarNotisia: [],
  sudahCobaKirim: false,
};

export function setKategori(kategori) {
  state.kategoriAktif = kategori;
}

export function setSudahCobaKirim(nilai) {
  state.sudahCobaKirim = nilai;
}
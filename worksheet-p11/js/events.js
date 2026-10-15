import { state, pilihKategori, setSudahCobaKirim } from "./state.js";
import {
  barisFilter, form,
  adalahKolomForm, periksaKolom, semuaSah, periksaSemuaKolom,
  sembunyikanStatusForm, aturTombolKirim, fokusKolom,
  tampilkanTerimaKasih, kosongkanForm,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);       // state berubah, render dipanggil di dalamnya
  });

  form.addEventListener("input", (event) => {     // satu pendengar untuk semua kolom
    const nama = event.target.id;
    if (!adalahKolomForm(nama)) return;
    sembunyikanStatusForm();
    if (state.sudahCobaKirim) {
      periksaKolom(nama);
      aturTombolKirim(!semuaSah());
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();                       // baris pertama: halaman tidak dimuat ulang
    setSudahCobaKirim(true);

    const bermasalah = periksaSemuaKolom();
    if (bermasalah.length > 0) {
      sembunyikanStatusForm();
      aturTombolKirim(true);
      fokusKolom(bermasalah[0]);                  // kolom pertama yang bermasalah
      return;
    }

    tampilkanTerimaKasih();
    kosongkanForm();
    setSudahCobaKirim(false);
  });
}
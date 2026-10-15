import { state } from "./state.js";
import { render, gambarNotisia, tampilkanPesanNotisia } from "./dom.js";
import { pasangPendengar } from "./events.js";
import { ambilNotisia } from "./api.js";

render(state.daftarBacaan);
pasangPendengar();

async function muatNotisia() {
  tampilkanPesanNotisia("Memuat...");
  try {
    const dataApi = await ambilNotisia();         // ambil
    state.daftarNotisia = dataApi;                // masuk ke state
    if (state.daftarNotisia.length === 0) {
      tampilkanPesanNotisia("Belum ada notisia");
      return;
    }
    gambarNotisia(state.daftarNotisia);           // baru digambar
  } catch (galat) {
    tampilkanPesanNotisia("Gagal memuat data: " + galat.message);
  }
}

muatNotisia();
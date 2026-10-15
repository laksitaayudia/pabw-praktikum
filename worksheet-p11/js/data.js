export const profil = {
  nama: "Laksita Ayudia Nurislami",
  peran: "Mahasiswa Informatika Universitas Islam Indonesia",
  hobi: ["Menggambar", "Mengedit", "Membaca"],
  jumlahHobi: 3,
};

export const daftarBacaan = [
  { judul: "Omniscient Reader Viewpoint", tahunRilis: 2018, selesai: true },
  { judul: "The Children of Holy Emperor", tahunRilis: 2022, selesai: true },
  { judul: "Debut or Die", tahunRilis: 2021, selesai: false },
];

export const daftarProyek = [
  { judul: "Aplikasi berbasis desktop (Java dan GUI)", kategori: "aplikasi" },
  { judul: "Prototype Aplikasi IoT monitoring air",    kategori: "aplikasi" },
  { judul: "Poster Desain",                            kategori: "desain" },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatHobi = (daftar) => daftar.join(" · ");
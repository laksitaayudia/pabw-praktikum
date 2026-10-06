const nama = "Laksita";           // teks
const jumlahHobi = 3;       // angka, bukan "3"
let pilihanAktif = "semua";   // akan berubah saat disaring

console.log(typeof nama);          // "string"
console.log(typeof jumlahProyek);  // "number"
console.log(typeof belumDibuat);   


const profil = {
  nama: "Laksita Ayudia Nurislami",
  peran: "Mahasiswa Informatika Universitas Islam Indonesia",
  hobi: ["Menggambar", "Mengedit", "Membaca"],
  jumlahHobi: 3,
};

const kalimat = `Nama saya ${profil.nama}, dan saya punya ${profil.hobi.length} hobi.`;
console.log(kalimat);
console.log(typeof profil.nama);
console.log(typeof profil.jumlahHobi);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar hobi menjadi satu baris teks
const formatHobi = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatHobi(profil.hobi));

const daftarBacaan = [
  { judul: "Omniscient Reader Viewpoint", tahunRilis: 2018, selesai: true },
  { judul: "The Children of Holy Emperor", tahunRilis: 2022, selesai: true }, 
  { judul: "Debut or Die", tahunRilis: 2021, selesai: false },

];

console.table(daftarBacaan);

const sudahSelesai = daftarBacaan.filter((buku) => buku.selesai);
console.table(sudahSelesai);

const dicari = daftarBacaan.find((buku) => buku.judul === "Debut or Die");
console.log(dicari);

const daftarJudul = daftarBacaan.map((buku) => buku.judul);
console.log(daftarJudul);

const urut = [...daftarBacaan].sort((a, b) => a.tahunRilis - b.tahunRilis);
console.table(urut);
console.table(daftarBacaan);   
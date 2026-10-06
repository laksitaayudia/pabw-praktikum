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


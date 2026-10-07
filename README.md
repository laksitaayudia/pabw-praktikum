# PABW — Laksita Ayudia Nurislami — 25523182
 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 4 — Halaman profil saya
 
Topik halaman saya: Profil saya.
 
- Judul halaman: Nama saya
- Deskripsi: Halaman profil mahasiswa PABW: tentang saya, karya, dan kontak.
- Tautan navigasi: Tentang, Karya, Kontak
- Dua bagian utama: tabel, form
- Kolom tabel: Kegiatan, Peran, Waktu 
- Kolom form: Nama lengkap, Email, NIM, Pesan
- Gambar: foto-profil.jpg
 
## Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #87CEFA (biru langit), dipilih karena saya suka warna biru langit yang cerah
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #2563EB | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #87CEFA | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

### Tujuan dari tiap struktur yang saya tambahkan
- Sedang Dikerjakan(#sedang-dikerjakan) memakai article berisi h3, p dan time tujuannya karena berisi tentang apa yang sedang saya kerjakan saat ini, sasaran pemmbaca bagian ini adalah pengungjung website saya yang penasaran apa yang sedang saya kerjakan.
- Galeri(#galeri) memakai ul berisi li, figure, img, dan figcaption tujuan saya menambah ini agar sasaran pembaca (pengunjung) melihat bukti visual karya yang pernah saya kerjakan.
- Lini masa (#lini-masa) memakai ol berisi time karena isinya urutan kejadian kronologis yang pernah saya jalani, agar sasaran pembaca (Pengunjung) melihat perkembangan saya dari waktu ke waktu.

### catatan penggunaan AI
Penggunaan AI untuk mencari kontras warna yang sesuai dan beberapa bagian di CSS menggunakan AI, sedangkan yang saya kerjakan sendiri adalah bagian profil.html

## Pertemuan 5 — Flexbox dan Grid

### Kerangka Halaman
| Bagian | Pilihan | Alasan |
|---|---|---|
| Kepala halaman | flex | Logo, judul, menu berderet satu arah. |
| Isi dua kolom | grid | Sidebar dan konten butuh lebar berbeda. |
| Galeri kartu | grid | Jumlah kolom menyesuaikan lebar dengan auto-fit. |
| Isi satu kartu | flex | Judul, teks, tombol berderet satu arah. |

### Bagian yang saya ubah 
Saya mengubah warna tema dari website dan token warna menjadi:
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #0A3477 | tombol, tautan, penanda |
| --color-fg | #0F1B33 | warna teks utama |
| --color-bg | #FDF4D2 | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

### Catatan penggunaan AI
saya menggunakan AI untuk kebingungan saya tentang worksheet dan membantu saya untuk menemukan kesalahan dalam penulisan code 

### Pertemuan 8 - JavaScript 

## Catatan penggunaan AI
Saya menggunakan AI untuk berdiskusi tentang apa yang diperintahkan dalam worksheet karena saya terkadang kurang mengerti maksud dari perintah, saya menggunakan AI untuk membuat kode agar memiliki pesan galat di console, Saya juga menggunakan AI untuk beberapa kode di apps.js karena saya masih belum memahami tentang javascript. 
Yang saya kerjakan sendiri adalah bagian data profil dan topik saya, saya menjalankan, menguji, dan memperbaiki kode di console


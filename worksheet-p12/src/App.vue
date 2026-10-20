<script setup>
import { onMounted, watch, ref } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { state } from './state.js'
import { muat, simpan } from './simpanan.js'
import { ambilNotisia } from './api.js'

const identitas = {
  nama: 'Laksita',
  peran: 'Mahasiswa Informatika Universitas Islam Indonesia.',
}
const pesanNotisia = ref('')

async function muatNotisia() {
  pesanNotisia.value = 'Memuat...'
  try {
    state.daftarNotisia = await ambilNotisia()
    pesanNotisia.value = state.daftarNotisia.length === 0 ? 'Belum ada notisia' : ''
  } catch (galat) {
    pesanNotisia.value = 'Gagal memuat data: ' + galat.message
  }
}

onMounted(() => {
  const isi = muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif
  muatNotisia()
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <input type="checkbox" id="tema" class="pengalih-tema">
  <label for="tema" class="tombol-tema">Tema gelap</label>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <div class="page">
    <KepalaProfil :profil="identitas" />

    <main id="utama" class="isi">
      <aside class="sisi">
        <section id="tentang">
          <h2>Tentang saya</h2>
            <figure class="foto">
              <img src="/media/foto-profil.jpg"
                  alt="Foto diri saya memegang boneka."
                  width="480" height="480" loading="lazy">
              <figcaption>Foto profil</figcaption>
            </figure>
          <p>Saya berasal dari Yogyakarta, Saya memiliki minat dalam pengembangan web,
            dan saya sedang mempelajari cara mengembangkan web dengan baik.</p>
          
          <div class="table-wrap">
          <table>
            <caption>Yang pernah saya ikuti</caption>
            <thead>
              <tr>
                <th scope="col">Kegiatan</th>
                <th scope="col">Peran</th>
                <th scope="col">Waktu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Praktikum PABW</th>
                <td>Peserta</td>
                <td><time datetime="2026-09">September 2026</time></td>
              </tr>
              <tr>
                <th scope="row">Praktikum FPA</th>
                <td>Peserta</td>
                <td><time datetime="2026-07">Juli 2026</time></td>
              </tr>
              <tr>
                <th scope="row">Pemikiran Desain</th>
                <td>Peserta</td>
                <td><time datetime="2025">2025</time></td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>
      </aside>

      <div class="utama">
        <section id="karya">
          <h2>Karya saya</h2>

          <ul>
            <li>Aplikasi berbasis dekstop menggunakan Java dan GUI - tugas akhir semester 2.</li>
            <li>Prototype Aplikasi IOT monitoring air - tugas akhir semester 1.</li>
            <li>Poster Desain.</li>
          </ul>
        </section>

        <section id="lini-masa">
              <h2>Perjalanan saya</h2>
              <ol class="lini">
                  <li><time datetime="2024-12">Desember 2024</time> — Saya pertama kali belajar tentang HTML saat saya SMA.</li>
                  <li><time datetime="2025-09">September 2025</time> — Saya menjadi mahasiswa Informatika UII.</li>
                  <li><time datetime="2026-09">September 2026</time> — Saya kembali mempelajari HTML dan CSS dan saya membangun profil ini</li>
              </ol>
        </section>

        <section id="notisia">
          <h2>Notisia</h2>
          <div id="daftar-notisia">
            {{ pesanNotisia }}
            <article v-for="n in state.daftarNotisia" :key="n.id" class="kartu">
              <h3>{{ n.judul }}</h3>
            </article>
          </div>
        </section>

        <section id="bacaan">
          <h2>Daftar bacaan</h2>
          <TombolFilter />
          <DaftarProyek />
        </section>

        <section id="galeri">
          <h2>Galeri</h2>
          <ul class="galeri">
              <li class="kartu">
              <figure>
                  <img src="/media/Aplikasi-berbasis-dekstop.jpg"
                      alt="Tangkapan layar halaman Aplikasi berbasis dekstop menggunakan Java dan GUI tugas akhir semester 2."
                      width="640" height="400" loading="lazy">
                  <figcaption>Halaman Aplikasi berbasis dekstop menggunakan Java dan GUI - tugas akhir semester 2.</figcaption>
                  <div class="kartu__kaki">
                    <a href="/media/Aplikasi-berbasis-dekstop.jpg">Lihat gambar</a>
                  </div>
              </figure>
              </li>
              <li class="kartu">
              <figure>
                  <img src="/media/Prototype-Aplikasi-IOT-monitoring-air.png"
                      alt="Tangkapan layar halaman Prototype Aplikasi IOT monitoring air tugas akhir semester 1."
                      width="640" height="400" loading="lazy">
                  <figcaption>Prototype Aplikasi IOT monitoring air - tugas akhir semester 1.</figcaption>
                  <div class="kartu__kaki">
                    <a href="/media/Prototype-Aplikasi-IOT-monitoring-air.png">Lihat gambar</a>
                  </div>
              </figure>
              </li>
              <li class="kartu">
              <figure>
                  <img src="/media/Poster-desain.jpg"
                      alt="Poster Desain Yang pernah saya buat."
                      width="640" height="400" loading="lazy">
                  <figcaption>Poster Desain.</figcaption>
                  <div class="kartu__kaki">
                    <a href="/media/Poster-desain.jpg">Lihat gambar</a>
                  </div>
              </figure>
              </li>
          </ul>
        </section>

        <section id="sedang-dikerjakan">
          <h2>Sedang saya kerjakan</h2>
          <article>
              <h3>Halaman profil ini</h3>
              <p>Memberi gaya pada struktur yang sudah lolos audit, memakai warna yang
              saya turunkan dari foto saya sendiri.</p>
              <p>Dimulai <time datetime="2026-09-21">23 September 2026</time>.</p>
          </article>
        </section>
      </div>

      <FormKontak />
    </main>

    <footer class="kaki">
      <p>Laksita Ayudia Nurislami · 25523182 · <time datetime="2026">2026</time></p>
    </footer>
  </div>
</template>
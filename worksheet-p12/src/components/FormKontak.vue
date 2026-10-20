<script setup>
import { reactive, ref, computed } from 'vue'

const isi = reactive({ nama: '', email: '', nim: '', pesan: '' })
const sudahCobaKirim = ref(false)
const statusTampil = ref(false)
const namaTerkirim = ref('')

const aturan = {
  nama: (v) => (v.length >= 3 ? '' : 'Isi nama lengkap Anda, minimal 3 huruf.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Tulis email dengan format nama@contoh.com.'),
  nim: (v) => (/^[0-9]{8}$/.test(v) ? '' : 'NIM terdiri dari 8 digit angka, contoh 25523182.'),
  pesan: (v) => (v.length >= 10 ? '' : 'Tulis pesan minimal 10 karakter.'),
}

function pesanGalat(nama) {
  return aturan[nama](isi[nama].trim()) // trim: spasi saja tetap tidak sah
}
function galat(nama) {
  return sudahCobaKirim.value ? pesanGalat(nama) : ''
}
const semuaSah = computed(() => Object.keys(aturan).every((n) => pesanGalat(n) === ''))

function kirim(event) {
  sudahCobaKirim.value = true
  const bermasalah = Object.keys(aturan).filter((n) => pesanGalat(n) !== '')
  if (bermasalah.length > 0) {
    statusTampil.value = false
    event.target.elements[bermasalah[0]].focus()
    return
  }
  namaTerkirim.value = isi.nama.trim()
  statusTampil.value = true
  Object.keys(isi).forEach((n) => (isi[n] = ''))
  sudahCobaKirim.value = false
}
</script>

<template>
  <section id="kontak" class="bawah">
    <h2>Hubungi saya</h2>
    <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

    <form id="form-kontak" novalidate @submit.prevent="kirim" @input="statusTampil = false">
      <fieldset>
        <legend>Data pengirim</legend>

        <p>
          <label for="nama">Nama lengkap</label>
          <input id="nama" name="nama" type="text" autocomplete="name" v-model="isi.nama"
                 aria-describedby="galat-nama" :aria-invalid="galat('nama') ? 'true' : null" required>
          <span class="pesan-galat" id="galat-nama" aria-live="polite">{{ galat('nama') }}</span>
        </p>

        <p>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" v-model="isi.email"
                 aria-describedby="galat-email" :aria-invalid="galat('email') ? 'true' : null" required>
          <span class="pesan-galat" id="galat-email" aria-live="polite">{{ galat('email') }}</span>
        </p>

        <p>
          <label for="nim">NIM</label>
          <input id="nim" name="nim" type="text" inputmode="numeric" pattern="[0-9]{8}" v-model="isi.nim"
                 aria-describedby="nim-bantuan galat-nim" :aria-invalid="galat('nim') ? 'true' : null" required>
          <span id="nim-bantuan">Delapan digit angka, contoh 25523182.</span>
          <span class="pesan-galat" id="galat-nim" aria-live="polite">{{ galat('nim') }}</span>
        </p>

        <p>
          <label for="pesan">Pesan</label>
          <textarea id="pesan" name="pesan" rows="4" v-model="isi.pesan"
                    aria-describedby="galat-pesan" :aria-invalid="galat('pesan') ? 'true' : null" required></textarea>
          <span class="pesan-galat" id="galat-pesan" aria-live="polite">{{ galat('pesan') }}</span>
        </p>

        <button type="submit" :disabled="sudahCobaKirim && !semuaSah">Kirim</button>
        <p v-if="statusTampil" id="status-form" role="status">
          Terima kasih, {{ namaTerkirim }}. Pesan Anda sudah tercatat.
        </p>
      </fieldset>
    </form>
  </section>
</template>
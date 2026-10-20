   import { reactive } from 'vue'
   import { daftarBacaan } from './data.js'
   import { aturUlang, simpan } from './simpanan.js'

   const KATEGORI_BAWAAN = 'semua'

   export const state = reactive({
     kategoriAktif: KATEGORI_BAWAAN,
     daftarBacaan: daftarBacaan,
     daftarNotisia: [],
   })

   export function pilihKategori(nilai) {
     state.kategoriAktif = nilai // cukup ubah state; Vue yang menggambar ulang
   }

   export function kembalikanBawaan() {
     aturUlang()
     state.kategoriAktif = KATEGORI_BAWAAN
     simpan(state) // ditulis ulang, bukan kosong
   }
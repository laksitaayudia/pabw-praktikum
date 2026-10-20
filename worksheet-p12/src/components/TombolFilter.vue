   <script setup>
   import { state, pilihKategori, kembalikanBawaan } from '../state.js'

   const daftarTombol = [
     { nilai: 'semua', label: 'Semua' },
     { nilai: 'selesai', label: 'Sudah selesai' },
     { nilai: 'belum', label: 'Belum selesai' },
     { nilai: 'tes', label: 'Tes kosong' },
   ]
   </script>

   <template>
     <div id="filter">
       <button
         v-for="tombol in daftarTombol"
         :key="tombol.nilai"
         type="button"
         :class="{ aktif: state.kategoriAktif === tombol.nilai }"
         @click="pilihKategori(tombol.nilai)"
       >
         {{ tombol.label }}
       </button>
       <button type="button" id="atur-ulang" @click="kembalikanBawaan">Reset</button>
     </div>
   </template>
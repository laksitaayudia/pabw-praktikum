   <script setup>
   import KepalaProfil from './components/KepalaProfil.vue'

   const identitas = {
     nama: 'Laksita',
     peran: 'Mahasiswa Informatika Universitas Islam Indonesia.',
   }
   </script>

   <template>
     <KepalaProfil :profil="identitas" />
   </template>
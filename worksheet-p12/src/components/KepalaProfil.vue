   <script setup>
   const props = defineProps({
     profil: { type: Object, required: true },
   })
   </script>

   <template>
     <header class="kepala navbar">
       <div class="merek">
         <h1>{{ props.profil.nama }}</h1>
         <p class="tagline">{{ props.profil.peran }}</p>
       </div>
       <nav aria-label="Navigasi utama">
         <ul>
           <li><a href="#tentang">Tentang</a></li>
           <li><a href="#karya">Karya</a></li>
           <li><a href="#kontak">Kontak</a></li>
           <li><a href="#sedang-dikerjakan">Sedang Dikerjakan</a></li>
           <li><a href="#lini-masa">Lini Masa</a></li>
           <li><a href="#galeri">Galeri</a></li>
         </ul>
       </nav>
     </header>
   </template>
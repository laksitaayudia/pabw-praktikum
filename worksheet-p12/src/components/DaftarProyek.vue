<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const tampil = computed(() =>
  state.daftarBacaan.filter((buku) => {
    if (state.kategoriAktif === 'semua') return true
    if (state.kategoriAktif === 'selesai') return buku.selesai
    if (state.kategoriAktif === 'belum') return !buku.selesai
    return false
  }),
)
</script>

<template>
  <ul id="daftar">
    <li v-for="buku in tampil" :key="buku.id" class="kartu">
      {{ buku.judul }} ({{ buku.tahunRilis }})
    </li>
  </ul>
  <p v-if="tampil.length === 0" id="pesan-kosong">Tidak ada bacaan pada kategori itu.</p>
</template>
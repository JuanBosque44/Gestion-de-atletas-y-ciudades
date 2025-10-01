<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <h1>Gestor de Atletas y Ciudades</h1>
    <nav class="nav">
      <RouterLink to="/ciudad">Ciudades</RouterLink>
      <RouterLink to="/atleta">Atletas</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

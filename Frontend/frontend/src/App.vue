<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <h1 class="text-center p-3 bg-primary text-white" style="margin-bottom: 0;">Gestor de Atletas y Ciudades</h1>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar nav">
          <RouterLink to="/ciudad" class="nav-link">Ciudades</RouterLink>
          <RouterLink to="/atleta" class="nav-link">Atletas</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

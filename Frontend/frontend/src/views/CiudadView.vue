<script setup>
    import { RouterLink } from 'vue-router'
    import {useGetData} from '../composables/data.js'

    const {data, error, cargando, getData} = useGetData();
    getData('http://localhost:3000/ciudad');
</script>

<template>
    <h2>Ciudades</h2>
    <div v-if="cargando">
            <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
    <div v-if="data">
        <p>Listado de ciudades</p>
        <ul>
            <li v-for="(value) in data">{{ value }}</li>
        </ul>
    </div>
    <div v-if="error">
        <p>No hay ciudades registradas</p>
    </div>
    <RouterLink to="/ciudad/form">Agregar ciudad</RouterLink>

</template>
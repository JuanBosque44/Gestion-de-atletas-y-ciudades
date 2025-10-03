<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '../composables/data.js'
import SelectCiudad from '../components/selectCiudad.vue'

const {data, error, cargando,  getData} = useGetData();
getData('http://localhost:3000/atleta');
</script>

<template>
    <h2>Atletas</h2>
    <div v-if="cargando">
            <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
    <div v-if="data">
        <p>Listado de atletas</p>
        <SelectCiudad></SelectCiudad>
        <!-- <ul>
            <li v-for="(value) in data">{{ value }}</li>
        </ul> -->
        <table>
            <thead>
                <tr>
                    <th>Posición</th>
                    <th>Nombre</th>
                    <th>Tiempo</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value) in data" :key="value.id">
                    <td>{{ value.posicion }}</td>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.tiempo }}</td>
                    <td>{{ value.ciudad.nombre }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="error">
        <p>No hay atletas registrados</p>
    </div>
        <RouterLink to="/atleta/form">Agregar atleta</RouterLink>

</template>


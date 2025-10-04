<script setup>
    import { RouterLink } from 'vue-router'
    import {useGetData} from '../composables/data.js'
    import { ref, onMounted } from 'vue';
    import { useCiudadStore } from '../stores/useCiudadStore.js';

    const ciudadStore = useCiudadStore();
    const {eliminarForm} = ciudadStore;
    const {data, error, cargando, getData} = useGetData();

    const ciudades = ref([]);
    onMounted(async() => {
        await getData('http://localhost:3000/ciudad');
        ciudades.value = data.value;
        console.log(data.value);
    });

    const eliminar = (id) =>{
        eliminarForm(id)
        ciudades.value = ciudades.value.filter(c => c.id !== id);
    }
    
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
            <li v-for="value in ciudades" :key="value.id">
                {{ value.nombre }} 
                <button class="btn btn-danger" @click="eliminar(value.id)">X</button>
            </li>
        </ul>
    </div>
    <div v-if="error">
        <p>No hay ciudades registradas</p>
    </div>
    <RouterLink to="/ciudad/form" class="btn btn-primary">Agregar ciudad</RouterLink>

</template>
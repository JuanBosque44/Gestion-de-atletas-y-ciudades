<script setup>
    import { RouterLink } from 'vue-router'
    import {useGetData} from '../composables/data.js'
    import { ref, onMounted } from 'vue';
    import { useCiudadStore } from '../stores/useCiudadStore.js';

    const ciudadStore = useCiudadStore();
    const {eliminarForm, ModificarForm} = ciudadStore;
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

    const editar = (id) => {
        ModificarForm(id)
    }
    
</script>

<template>
    <h2 class="text-center">Ciudades</h2>
    <div v-if="cargando">
            <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
    <div v-if="data">
        <p class="text-center">Listado de ciudades</p>
        <!-- <ul>
            <li v-for="value in ciudades" :key="value.id">
                {{ value.nombre }} 
                <button class="btn btn-danger" @click="eliminar(value.id)">X</button>
            </li>
        </ul> -->
        <table class="table table-borderless">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in ciudades" :key="value.id">
                    <td>{{ value.nombre }}</td>
                    <td>
                        <button class="btn btn-danger ps-3 pe-3" @click="eliminar(value.id)">X</button>
                        <button class="btn btn-primary ms-1" @click="editar(value.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>                        
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="error">
        <p>No hay ciudades registradas</p>
    </div>
    <RouterLink to="/ciudad/form" class="btn btn-primary ms-3">Agregar ciudad</RouterLink>

</template>
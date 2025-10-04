<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '../composables/data.js'
import SelectCiudad from '../components/selectCiudad.vue'
import { ref, onMounted, computed } from 'vue'

const atletas = ref([])
const {data, error, cargando,  getData} = useGetData();
    onMounted(async() => {
        await getData('http://localhost:3000/atleta');
        atletas.value = data.value;
        console.log(data.value);
    });

    const atletasOrdenados = computed(() => {
        atletas.value.sort((a, b) => a.posicion - b.posicion);
        return atletas.value;
    })

</script>

<template>
    <h2 class="ms-3">Atletas</h2>
    <div v-if="cargando">
            <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
    <div v-if="data">
        
       <!--  <p class="ms-2">Filtrar por ciudad</p>
        <SelectCiudad></SelectCiudad> -->
        
        <table class="table table-bordered mt-3 mb-3">
            <thead class="table-light">
                <tr>
                    <th>Posición</th>
                    <th>Nombre</th>
                    <th>Tiempo</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="value in atletasOrdenados" :key="value.id" >
                    <div v-if="value.posicion >= 1 && value.posicion <= 3" class="table-warning">
                        <td class="table-warning">{{ value.posicion }}</td>
                    </div>
                    <div v-else>
                        <td>{{ value.posicion }}</td>
                    </div>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.tiempo }}</td>
                    <td>{{ value.ciudad }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="error">
        <p>No hay atletas registrados</p>
    </div>
        <RouterLink to="/atleta/form" class="btn btn-primary ms-2">Agregar atleta</RouterLink>

</template>


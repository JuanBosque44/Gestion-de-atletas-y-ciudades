<script setup>
import { useAtletaStore } from '@/stores/useAtletaStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import SelectCiudad from '@/components/selectCiudad.vue';

const router = useRouter();
const nombre = ref('');
const dni = ref(0);
const posicion = ref(0);
const tiempo = ref('');
const ciudad = ref('');
const {registarForm} = useAtletaStore();

const submitForm = () => {
    const ciudadId = Number(ciudad.value);
    registarForm(dni.value, nombre.value, posicion.value, tiempo.value,ciudadId);
    router.push('/atleta');   
}
</script>

<template>
<div class="container mt-5">
        <h2 class="text-center mb-4">Formulario de Atleta</h2>
        <div class="row justify-content-center">
            <form method="post" @submit="submitForm" class="p-3 border rounded shadow-sm bg-light">
                <div class="form-group">
                    <label for="nombre">Nombre del atleta</label>
                    <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ingrese el nombre del atleta">
                </div>
                <div class="form-group">
                    <label for="dni">DNI del atleta</label>
                    <input type="number" class="form-control" id="dni" v-model="dni" placeholder="Ingrese el DNI del atleta">
                </div>
                <div class="form-group">
                    <label for="posicion">Posición del atleta</label>
                    <input type="number" class="form-control" id="posicion" v-model="posicion" placeholder="Ingrese el DNI del atleta">
                </div>
                <div class="form-group">
                    <label for="tiempo">Tiempo del atleta</label>
                    <input type="text" class="form-control" id="tiempo" v-model="tiempo" placeholder="00:00:00">
                </div>
                <div class="form-group">
                    <label for="ciudad">Ciudad de residencia</label>
                    <SelectCiudad v-model="ciudad"></SelectCiudad>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-2 ">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>
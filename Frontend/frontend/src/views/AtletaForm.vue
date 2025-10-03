<script setup>
import { useAtletaStore } from '@/stores/useAtletaStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const nombre = ref('');
const {registarForm} = useAtletaStore();

const submitForm = () => {
    registarForm(dni, nombre.value, posicion, tiempo,ciudad.value);
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
                <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-2 ">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>
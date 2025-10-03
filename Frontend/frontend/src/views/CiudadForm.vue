<script setup>
    import { useCiudadStore } from '@/stores/useCiudadStore';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const router = useRouter();
    const nombre = ref('');
    const {registarForm} = useCiudadStore();
    const submitForm = () => {
        registarForm(nombre.value);
        router.push('/ciudad');
                
    }
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Formulario de Ciudad</h2>
        <div class="row justify-content-center">
            <form method="post" @submit="submitForm" class="p-3 border rounded shadow-sm bg-light">
                <div class="form-group">
                    <label for="nombre">Nombre de la ciudad</label>
                    <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ingrese el nombre de la ciudad">
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-2 ">Enviar</button>
                </div>
            </form>
        </div>
    </div>
    
</template>
<script setup>
    import { useGetData } from '@/composables/data';
    import { ref, onMounted } from 'vue';

    
    const {data, error, getData} = useGetData();
    getData('http://localhost:3000/ciudad');

    const ciudades = ref([]);
    const ciudad = ref('');

    onMounted(async() => {
        await getData('http://localhost:3000/ciudad');
        ciudades.value = data.value;
        console.log(data.value);
    });
</script>

<template>
    <div v-if="data">
        <select id="" v-model="ciudad">
            <option v-for="c in ciudades" :key="c.id" :value="c.id">{{ c.nombre }}</option>
        </select>
    </div>
    <div v-if="error">
        <p>Error: {{ error.message }}</p>
    </div>
</template>
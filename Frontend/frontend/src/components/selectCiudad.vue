<script setup>
    import { useGetData } from '@/composables/data';
    import { ref, onMounted, defineEmits, defineProps } from 'vue';

    
    const {data, error, getData} = useGetData();
    getData('http://localhost:3000/ciudad');

    const ciudades = ref([]);
    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    onMounted(async() => {
        await getData('http://localhost:3000/ciudad');
        ciudades.value = data.value;
    });

    const onChange = (event) => {
        emit('update:modelValue', event.target.value);
    };

</script>

<template>
    <div v-if="data">
        <select  class="form-control"  :value="props.modelValue" @change="onChange">
            <option value="" disabled>Seleccione una ciudad</option>
            <option v-for="c in ciudades" :key="c.id" :value="c.id">{{ c.nombre }}</option>
        </select>
    </div>
    <div v-if="error">
        <p>Error: {{ error.message }}</p>
    </div>
</template>
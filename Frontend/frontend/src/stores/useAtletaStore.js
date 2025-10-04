import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAtletaStore = defineStore('atleta', () => {
  const dni = ref(0)
  const nombre = ref('')
  const posicion = ref(0)
  const tiempo = ref('')
  const ciudadId = ref(0)

  const registarForm = (dniF, nombreF, posicionF, tiempoF, ciudadF) => {
    dni.value = dniF
    nombre.value = nombreF
    posicion.value = posicionF
    tiempo.value = tiempoF
    ciudadId.value = ciudadF

    axios.post('http://localhost:3000/atleta', {
      dni: dni.value,
      nombre: nombre.value,
      posicion: posicion.value,
      tiempo: tiempo.value,
      ciudadId: ciudadId.value
    }).then(response => {
        console.log('Atleta creado: ' + response.data)
    }).catch(error => {
        console.log(error)
    })
  }

  return { dni, nombre, posicion, tiempo, ciudadId, registarForm }
})

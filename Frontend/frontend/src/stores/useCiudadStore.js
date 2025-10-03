import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCiudadStore = defineStore('ciudad', () => {
    const nombre = ref('')
 
    const registarForm = ( nombreF) => {
    nombre.value = nombreF
    axios.post('http://localhost:3000/ciudad', {
      nombre: nombre.value
    }).then(response => {
      console.log('Ciudad creada: '+response.data)
    }).catch(error => {
      console.log(error)
    })
  }

    const eliminarForm = (id) => {
        axios.delete(`http://localhost:3000/ciudad/${id}`)
        .then(response => {
            console.log('Ciudad eliminada: '+ response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const ModificarForm = ( id, nombreF) => {
        nombre.value = nombreF
        axios.put(`http://localhost:3000/ciudad/${id}`, {
          nombre: nombre.value
        }).then(response => {
            console.log('Ciudad modificada: '+response.data)
        }).catch(error => {
            console.log(error)
        })
    }
  

  return { nombre, registarForm, eliminarForm, ModificarForm }
})

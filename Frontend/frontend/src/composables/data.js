import axios from "axios";
import { ref } from "vue";

export const useGetData = () =>{
    const data = ref('');
    const error =ref('');
    const cargando = ref(true)

    const getData = async(url)=>{
        cargando.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data;
        } catch (e) {
            error.value= '500-Error de Servidor';
        }finally{
            cargando.value = false;
        }
    };
    return { data, error, cargando, getData};
}
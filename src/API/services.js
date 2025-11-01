import axios from 'axios';
import { Platform } from 'react-native';
const BASE_URL = Platform.select({
    ios: 'http://localhost:8080',
    android: 'http://10.0.2.2:8080',
    default: 'http://192.168.0.101:8080',
  });
const http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

http.interceptors.request.use(
(res) => res,
(err) =>{
    console.error("Api Error:", err?.response?.data ||err.message);
    return Promise.reject(err);
}
);
export const AlumnosService = {
    traerAlumnos:() =>
         http.get('/alumnos/traer-alumnos').then((res) => res.data),
    traerAlumnosId: (id) => 
    http.get(`/alumnos/traer-alumno/${id}`).then((res) => res.data),
    insertarAlumno:(alumnos) => 
        http.post('/alumnos/insertar-alumnos', alumnos).then((res) => res.data),
    actualizarAlumno:(id, alumnos) => 
        http.put(`/alumnos/editar-alumnos/${id}`, alumnos).then((res) => res.data),
    eliminarAlumno:(id) => 
        http.delete(`/alumnos/eliminar-alumnos/${id}`).then((res) => res.data),
}


export default{
    AlumnosService, 
    http,
    BASE_URL
}
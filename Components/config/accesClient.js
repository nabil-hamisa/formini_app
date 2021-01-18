import axios from'axios'
const host="http://192.168.1.2:3000/api/";
const accesClient= axios.create({
    baseURL:host,
    headers:{
    }
});
export default accesClient;
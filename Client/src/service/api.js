import axios from 'axios'; 

const URL = 'http://localhost:8080';

export  const addUser = async(data)=>{
    try {
await axios.post(`${URL}/add` ,data);
    } catch(error){
        console.log("Error",error);
    }
}


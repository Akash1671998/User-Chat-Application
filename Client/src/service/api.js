import axios from 'axios'; 

const URL = 'https://example.com/api/adduser';

 export const addUser = async (URL, data) => { 
    try {
        const response = await axios.post(URL, data); 
        console.log("User added successfully", response.data); 
    } catch (error) {
        console.log("Error:", error);
    }
};


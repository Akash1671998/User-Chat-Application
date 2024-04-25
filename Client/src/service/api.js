import axios from "axios";

const URL = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error", error);
  }
};

export const getChatUser = async () => {
  try {
    let response = await axios.get(`${URL}/chatusers`);
    return response.data.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const ConversationMessage = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/add`, data);
    return response.data.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getConversationMessage = async (data) => {
  try {
    let response = await axios.get(`${URL}/conversation/get`, data);
    console.log("KKKKKKKKKKKKKKKKKKKK",response)
    return response.data;
   
  } catch (error) {
    console.log("Error", error);
  }
};

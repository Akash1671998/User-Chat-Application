import axios from "axios";

const URL = "http://localhost:8090";

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
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response.data.data;
   
  } catch (error) {
    console.log("Error", error);
  }
};


export const UserMessage = async (data) => {
  try {
    let response = await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("Error While Message Api ", error.message);
  }
};

export const getUserMessage = async (data) => {
  try {
    let response = await axios.get(`${URL}/message/get/${data}`);
    return response.data.data;
  } catch (error) {
    console.log("Error", error);
  }
};

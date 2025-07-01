import axios from 'axios';
import { getUserDetails } from '../util/GetUser';

const SERVER_URL = 'http://localhost:5000/api/todo';

const authHeader = () => {
    let userToken = getUserDetails()?.token;
    return {headers:{'Authorization': userToken}}
}

const createToDo = (data) => {
    return axios.post(SERVER_URL+'/create-to-do',data,authHeader());
    
}
const getAllToDo = (userId) => {
    return axios.get(SERVER_URL+'/get-all-to-do/'+userId,authHeader());
    
}
const deleteToDo = (id) => {
    return axios.delete(SERVER_URL+'/delete-to-do'+id,authHeader());
    
}
const updateToDo = (id,data) => {
    return axios.patch(SERVER_URL+'/update-to-do'+id,data,authHeader());
    
}





const ToDoServices = {
    createToDo,
    getAllToDo,
    deleteToDo,
    updateToDo
    
}

export default ToDoServices;
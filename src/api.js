import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/todos';

export const getTodos = () => axios.get(API_BASE_URL);
export const createTodo = (todo) => axios.post(API_BASE_URL, todo);
export const updateTodo = (id, updatedTodo) => axios.put(`${API_BASE_URL}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${API_BASE_URL}/${id}`);

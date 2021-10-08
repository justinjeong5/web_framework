import axios from 'axios';
import { API } from './utils/api';

axios.post(`${API}/users`, {
	name: 'Justin Jeong',
	age: 31,
});

axios.get(`${API}/users`).then(({ data }) => console.log(data));

import axios from 'axios';
import { HasId } from '../interfaces/hasId';

export class Sync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch = (id: number): Promise<T> => {
		return axios.get(`${this.rootUrl}/${id}`);
	}
	save = (data: T): Promise<T> => {
		const { id } = data;
		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		}
		return axios.post(`${this.rootUrl}`, data);
	}
}

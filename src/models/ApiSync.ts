import axios, { AxiosPromise } from 'axios';
import { HasId } from '../interfaces/hasId';
import unflattenObj from '../utils/unflattenObj';

export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch = (id: number): AxiosPromise => {
		return axios.get(`${this.rootUrl}/${id}`);
	}
	save = (data: T): AxiosPromise => {
		const { id } = data;
		const nestedData = unflattenObj(data);
		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, nestedData);
		}
		return axios.post(`${this.rootUrl}`, nestedData);
	}
}

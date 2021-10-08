import axios, { AxiosResponse } from 'axios';

import { UserProps } from '../interfaces/user';
import { API } from '../utils/api';
import { Eventing } from './Eventing';
export class User {
	events = new Eventing();
	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}
	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
	fetch(): void {
		const id = this.get('id');
		axios.get(`${API}/users/${id}`).then(({ data }: AxiosResponse): void => {
			this.set(data);
		});
	}
	save(): void {
		const id = this.get('id');

		if (id) {
			axios.put(`${API}/users/${id}`, this.data);
		} else {
			axios.post(`${API}/users`, this.data);
		}
	}
}

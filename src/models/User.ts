import axios, { AxiosResponse } from 'axios';

import { UserProps } from '../interfaces/user';
import { Callback } from '../alias/callback';
import { Event } from '../interfaces/event';
import { API } from '../utils/api';
export class User {
	events: Event = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}
	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}
	trigger(eventName: string): void {
		const handlers = this.events[eventName];
		if (!handlers?.length) {
			return;
		}
		handlers.forEach((callback) => callback());
	}
	fetch(): void {
		const id = this.get('id');
    axios.get(`${API}/users/${id}`).then(({ data }: AxiosResponse): void => {
      this.set(data);
    });
	}
}

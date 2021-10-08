import { UserProps } from '../interfaces/user';
import { Callback } from '../alias/callback';
import { Event } from '../interfaces/event';

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
}

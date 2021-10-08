import { Callback } from '../alias/callback';
import { Event } from '../interfaces/event';

export class Eventing {
	events: Event = {};

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
}

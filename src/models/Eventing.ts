import { Callback } from 'alias/callback';
import { EventPropsArray } from 'interfaces/EventProps';

export class Eventing {
	events: EventPropsArray = {};

	on = (eventName: string, callback: Callback): void => {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}
	trigger = (eventName: string): void => {
		const handlers = this.events[eventName];
		if (!handlers?.length) {
			return;
		}
		handlers.forEach((callback) => callback());
	}
}

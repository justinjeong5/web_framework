import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from '../alias/callback';
import { HasId } from '../interfaces/HasId';
import { flattenObj } from '../utils/flattenObj';

interface ModelAttributes<T extends HasId> {
	set(update: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: Callback): void;
	trigger(eventName: string): void;
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	get get() {
		return this.attributes.get;
	}
	get getAll() {
		return this.attributes.getAll;
	}

	set(update: T): void {
		this.attributes.set(flattenObj(update));
		this.events.trigger('change');
	}
	get on() {
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}
	fetch(): void {
		const id = this.get('id');

		if (typeof id !== 'number') {
			throw new Error('Cannot Fetch Without an Id');
		}
		this.sync
			.fetch(id)
			.then((response: AxiosResponse): void => {
				this.set(flattenObj(response.data));
			})
			.catch((error: AxiosError): void => {
				console.error(error);
				this.trigger('error');
			});
	}
	save(): void {
		const user = flattenObj(this.attributes.getAll());
		this.sync
			.save(user)
			.then((response: AxiosResponse): void => {
				this.trigger('save');
			})
			.catch((error: AxiosError): void => {
				console.error(error);
				this.trigger('error');
			});
	}
}

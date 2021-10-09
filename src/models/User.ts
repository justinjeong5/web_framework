import { UserProps } from '../interfaces/user';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

import { API } from '../utils/api';
import { AxiosError, AxiosResponse } from 'axios';

const rootUrl = `${API}/users`;
export class User {
	public events: Eventing;
	public sync: Sync<UserProps>;
	public attributes: Attributes<UserProps>;

	constructor(private data: UserProps) {
		this.events = new Eventing();
		this.sync = new Sync<UserProps>(rootUrl);
		this.attributes = new Attributes<UserProps>(this.data);
	}

	get get() {
		return this.attributes.get;
	}
	set(update: UserProps): void {
		this.attributes.set(update);
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
				this.set(response.data);
			})
			.catch((error: AxiosError): void => {
				console.error(error);
				this.trigger('error');
			});
	}
	save(): void {
		const user = this.attributes.getAll();
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

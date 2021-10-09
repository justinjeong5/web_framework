import { UserProps } from '../interfaces/user';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

import { API } from '../utils/api';

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
	set() {}
	get on() {
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}
	fetch() {}
	save() {}
}

import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { API } from '../utils/api';
import { UserProps } from '../interfaces/UserProps';

const rootUrl = `${API}/users`;
export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(rootUrl)
		);
	}
}


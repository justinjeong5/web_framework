import { PostProps } from '../interfaces/PostProps';
import { Model } from '../models/Model';
import { Collection } from '../models/Collection';
import { Attributes } from '../models/Attributes';
import { ApiSync } from '../models/ApiSync';
import { Eventing } from '../models/Eventing';
import { API } from '../utils/api';

const rootUrl = `${API}/users`;
export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new Model(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(rootUrl)
		);
	}
	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
			User.buildUser(json)
		);
	}
}

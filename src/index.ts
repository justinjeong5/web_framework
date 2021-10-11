import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User } from './models/User';
import { UserProps } from './interfaces/UserProps';

import { API } from './utils/api';

const users = new Collection(`${API}/users`, (json: UserProps) => {
	return User.buildUser(json);
});

users.on('change', () => {
	const root = document.querySelector('#root');
	if (root) {
		new UserList(root, users).render();
	}
});
users.fetch();

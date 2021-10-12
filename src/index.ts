import { User } from './models/User';
import { UserList } from './views/users/UserList';

const users = User.buildUserCollection();

users.on('change', () => {
	const root = document.querySelector('#root');
	if (root) {
		new UserList(root, users).render();
	}
});

users.fetch();

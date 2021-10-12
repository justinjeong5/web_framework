import { User } from './models/User';
import { UserEdit } from './views/users/UserEdit';

const users = User.buildUser({ id: 1 });

users.on('change', () => {
	const root = document.querySelector('#root');
	if (root) {
		new UserEdit(root, users).render();
	}
});

users.fetch();

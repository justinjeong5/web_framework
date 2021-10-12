import { PostList } from './views/posts/PostList';
import { Post } from './models/Post';
import { User } from './models/User';

import { flattenObj } from './utils/flattenObj';

const users = User.buildUserCollection();
const posts = Post.buildPostCollection();

posts.on('change', () => {
	const root = document.querySelector('#root');
	if (root) {
		new PostList(root, posts).render();
	}
	users.fetch();
});

users.on('change', () => {
	const root = document.querySelector('#root');
	if (root) {
		posts.models.forEach((post) => {
			const userFound = users.models.find(
				(user) => user.get('id') === post.get('userId')
			);
			const writer = flattenObj({
				writer: userFound?.getAll(),
				...post.getAll(),
			});
			post.set(writer);
		});
		new PostList(root, posts).render();
	}
});

posts.fetch();

import { User } from './models/User';

const user = new User({ id: 1, name: 'JustinJeong', age: 30 });

user.on('change', () => {
	console.log(user, 'user changed');
});
user.on('save', () => {
	console.log(user, 'user saved');
});

user.fetch();

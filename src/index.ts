import { User } from './models/User';

const user = new User({ name: 'JustinJeong', age: 30 });

user.on('change', () => {
	console.log(user, 'user changed');
});
user.on('save', () => {
	console.log(user, 'user saved');
});

user.save();

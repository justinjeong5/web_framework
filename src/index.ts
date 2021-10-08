import { User } from './models/User';

const user = new User({ name: 'justin', age: 20 });

user.on('change', () => console.log("change1"));
user.on('change', () => console.log("change2222"));
user.on('click', () => console.log("click"));

user.trigger('click');
user.trigger('change');
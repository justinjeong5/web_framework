import { User } from './models/User';

const user = new User({ name: 'NEW NAME', age: 100 });

user.save();

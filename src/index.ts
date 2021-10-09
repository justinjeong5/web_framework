import { User } from './models/User';

const user = new User({ name: "NEW NAME", age: 20 });


console.log(user.get('name'));
user.on('change', () => console.log("changed"));
user.trigger('change');

import { User } from './models/User';

const user = new User({ name: 'justin', age: 20 });
const name = user.get('name');
const age = user.get('age');
console.log({ name, age });

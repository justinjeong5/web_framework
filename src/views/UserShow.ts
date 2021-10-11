import { EventProps } from '../interfaces/EventProps';
import { UserProps } from '../interfaces/UserProps';
import { User } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
	
	template(): string {
		return `
      <div>
        <h1>User Details</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
      </div>
    `;
	}
}

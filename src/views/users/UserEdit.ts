import { UserProps } from '../../interfaces/UserProps';
import { User } from '../../models/User';
import { View } from '../View';

import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '#user-show',
			userForm: '#user-form',
		};
	}

	onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
	}

	template(): string {
		return `
      <div id='user-show'></div>
      <div id='user-form'></div>
			<hr style="border:0; border-top:1px solid gray; margin:20px 0">
    `;
	}
}

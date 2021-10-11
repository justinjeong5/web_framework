import { EventProps } from '../interfaces/EventProps';
import { UserProps } from '../interfaces/UserProps';
import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
	eventsMap(): EventProps {
		return {
			'click:button#random-age': this.onClickSetAge,
			'click:button#name': this.onClickSetName,
			'click:button#save': this.onClickSave,
		};
	}

	onClickSetAge = (): void => {
		const age = Math.round(Math.random() * 50) + 10;
		this.model.set({ age });
	};

	onClickSetName = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;

			this.model.set({ name });
		}
	};

	onClickSave = (): void => {
		this.model.save();
	};

	template(): string {
		return `
      <div>
        <input value="${this.model.get('name')}"/>
				<button id="name">Change Name</button>
				<button id="random-age">Set Random Age</button>
				<button id="save">Save User</button>
      </div>
    `;
	}
}

import { EventProps } from 'interfaces/EventProps';
import { User } from 'models/User'

export class UserForm {
	constructor(public parent: Element, public model: User) {}

	eventsMap(): EventProps {
		return {
			'click:button': this.onButtonClick,
			'mouseenter:h1' : () => console.log('mouseenter:h1')
		};
	}

	onButtonClick(): void {
		console.log('onButtonClick');
	}

	template(): string {
		return `
      <div>
        <h1>User Form</h1>
        <input />
        <button> click me </button>
      </div>
    `;
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		Object.keys(eventsMap).forEach((eventKey) => {
			const [eventName, selector] = eventKey.split(':');
			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		});
	}

	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}

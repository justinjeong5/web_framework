import { UserProps } from '../../interfaces/UserProps';
import { User } from '../../models/User';
import { View } from '../View';

export class UserShow extends View<User, UserProps> {
  getItem(propName: keyof UserProps): UserProps[keyof UserProps] {
		return this.model.get(propName) || 'Loading...';
	}
  template(): string {
		return `
      <fieldset style="margin: auto">
        <legend>User Details</legend>
        <div>Name: ${this.getItem('name')}</div>
        <div>UserName: ${this.getItem('username')}</div>
        <div>Phone: ${this.getItem('phone')}</div>
        <div>Website: ${this.getItem('website')}</div>
        <div>Email: ${this.getItem('email')}</div>
        <div>
          <h3>Address</h3>
          <div>Street: ${this.getItem('address.street')}</div>
          <div>Suite: ${this.getItem('address.suite')}</div>
          <div>City: ${this.getItem('address.city')}</div>
          <div>Zipcode: ${this.getItem('address.zipcode')}</div>
        </div>
        <div>
          <h3>Company</h3>
          <div>Company Name: ${this.getItem('company.name')}</div>
          <div>CatchPhrase: ${this.getItem('company.catchPhrase')}</div>
          <div>BS: ${this.getItem('company.bs')}</div>
        </div>
      </fieldset>
    `;
	}
}

import { UserProps } from '../interfaces/UserProps';
import { User } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  getItem(propName: keyof UserProps): UserProps[keyof UserProps] {
		return this.getItem(propName) || 'Loading...';
	}
  template(): string {
		return `
      <div>
        <h2>User Details</h2>
        <div>Name: ${this.getItem('name')}</div>
        <div>UserName: ${this.getItem('username')}</div>
        <div>Phone: ${this.getItem('phone')}</div>
        <div>Website: ${this.getItem('website')}</div>
        <div>Email: ${this.getItem('email')}</div>
        <div>
          <h3>Address</h3>
          <div>address: ${this.getItem('address.street')}</div>
          <div>address: ${this.getItem('address.suite')}</div>
          <div>address: ${this.getItem('address.city')}</div>
          <div>address: ${this.getItem('address.zipcode')}</div>
          <div>address: ${this.getItem('address.geo.lat')}</div>
          <div>address: ${this.getItem('address.geo.lng')}</div>
        </div>
        <div>
          <h3>Company</h3>
          <div>name: ${this.getItem('company.name')}</div>
          <div>name: ${this.getItem('company.catchPhrase')}</div>
          <div>name: ${this.getItem('company.bs')}</div>
        </div>
        <br>
        <hr>
      </div>
    `;
	}
}

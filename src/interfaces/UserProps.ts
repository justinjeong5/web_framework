export interface UserProps {
	id?: number;
	name?: string;
	username?: string;
	email?: string;
	'address.street'?: string;
	'address.suite'?: string;
	'address.city'?: string;
	'address.zipcode'?: string;
	'address.geo.lat': number;
	'address.geo.lng': number;
	phone?: string;
	website?: string;
	'company.name'?: string;
	'company.catchPhrase'?: string;
	'company.bs'?: string;
}

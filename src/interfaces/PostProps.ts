export interface PostProps {
	userId?: number;
	id?: number;
	title?: string;
	body?: string;
	'writer.name'?: object;
	'writer.email'?: object;
}
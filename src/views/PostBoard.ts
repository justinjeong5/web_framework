import { PostProps } from '../interfaces/PostProps';
import { Post } from '../models/Post';
import { View } from './View';

export class PostBoard extends View<Post, PostProps> {
	getItem(propName: keyof PostProps): PostProps[keyof PostProps] {
		return this.model.get(propName) || 'Loading...';
	}
	template(): string {
		return `
      <div>
        <div>Title: ${this.getItem('title')}</div>
        <div>Body: ${this.getItem('body')}</div>
        <div>Writer Name: ${this.getItem('writer.name')}</div>
        <div>Writer Email: ${this.getItem('writer.email')}</div>
      </div>
      <br>
      <hr>
    `;
	}
}

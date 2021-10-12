import { PostProps } from '../../interfaces/PostProps';
import { Post } from '../../models/Post';
import { View } from '../View';

export class PostBoard extends View<Post, PostProps> {
	getItem(propName: keyof PostProps): PostProps[keyof PostProps] {
		return this.model.get(propName) || 'Loading...';
	}
	template(): string {
		return `
      <div style="display: flex; flex-direction: row;justify-content: space-between; margin:10px; max-width:1400px">
        <div style="width: 10vw">${this.getItem('id')}</div>
        <div style="width: 50vw">${this.getItem('title')}</div>
        <div style="width: 20vw">${this.getItem('writer.name')}</div>
        <div style="width: 20vw">${this.getItem('writer.email')}</div>
      </div>
      <hr style="border: 0; border-top: 1px solid #eee;">
    `;
	}
}

import { PostProps } from '../interfaces/PostProps';
import { Post } from '../models/Post';
import { View } from './View';

export class PostHeader extends View<Post, PostProps> {
	template(): string {
		return `
      <div>
        <h2>Post List</h2>
        <br>
      </div>
    `;
	}
}
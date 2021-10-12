import { PostProps } from '../../interfaces/PostProps';
import { Post } from '../../models/Post';
import { View } from '../View';

import { PostHeader } from './PostHeader';
import { PostBoard } from './PostBoard';

export class PostItem extends View<Post, PostProps> {
	regionsMap(): { [key: string]: string } {
		return {
			postHeader: '#post-header',
			postItem: '#post-item',
		};
	}

	onRender(): void {
    // new PostHeader(this.regions.postHeader, this.model).render();
    new PostBoard(this.regions.postItem, this.model).render();
	}

	template(): string {
		return `
      <div id='post-header'></div>
      <div id='post-item'></div>
    `;
	}
}

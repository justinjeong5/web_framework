import { PostProps } from '../interfaces/PostProps';
import { Post } from '../models/Post';
import { User } from '../models/User';
import { CollectionView } from './CollectionView';
import { PostBoard } from './PostBoard';

export class PostList extends CollectionView<Post, PostProps> {
  renderItem(model: Post, itemParent: Element): void {
		new PostBoard(itemParent, model).render();
	}
}

import { PostProps } from '../../interfaces/PostProps';
import { Post } from '../../models/Post';
import { CollectionView } from '../CollectionView';
import { PostItem } from './PostItem';

export class PostList extends CollectionView<Post, PostProps> {
  renderItem(model: Post, itemParent: Element): void {
		new PostItem(itemParent, model).render();
	}
}

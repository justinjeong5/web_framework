import { PostProps } from '../interfaces/PostProps';
import { Model } from '../models/Model';
import { Collection } from '../models/Collection';
import { Attributes } from '../models/Attributes';
import { ApiSync } from '../models/ApiSync';
import { Eventing } from '../models/Eventing';
import { API } from '../utils/api';
import { flattenObj } from '../utils/flattenObj';

const rootUrl = `${API}/posts`;
export class Post extends Model<PostProps> {
	static buildPost(attrs: PostProps): Post {
		return new Model(
			new Attributes<PostProps>(attrs),
			new Eventing(),
			new ApiSync<PostProps>(rootUrl)
		);
	}
	static buildPostCollection(): Collection<Post, PostProps> {
		return new Collection<Post, PostProps>(rootUrl, (json: PostProps) =>
			Post.buildPost(flattenObj(json))
		);
	}
}

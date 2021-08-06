import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";

export const routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
]

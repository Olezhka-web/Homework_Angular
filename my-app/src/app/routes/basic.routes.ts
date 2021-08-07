import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";

export const routes = [
  {path: '', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'posts', redirectTo: '', pathMatch: 'full'}
]

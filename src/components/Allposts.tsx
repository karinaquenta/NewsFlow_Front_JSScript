
import PostsPage from "../pages/PostPage";

export default function AllPosts() {
  
  return (
    <PostsPage endpoint={`/posts`} heading={`Posts`}/>
  );
}
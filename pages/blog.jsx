import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { posts } from "../profile";

const Blog = () => (
  <Layout showFooter={false} dark title="My Blog">
    <div className="row mt-4">
      {posts.map((post, index) => (
        <div className="col-md-4" key={index}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </Layout>
);

export default Blog;

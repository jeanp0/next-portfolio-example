import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();

  const { title, content, imageUrl } = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout showFooter={false} title={title}>
      <div className="text-center">
        <img className="img-fluid" src={imageUrl} alt="" width="50%" />
        <p>{content}</p>
      </div>
    </Layout>
  );
};

export default Post;

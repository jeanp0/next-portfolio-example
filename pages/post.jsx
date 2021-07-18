import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();

  // console.log(router);
  const { title, content, imageUrl } = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout showFooter={false} title={title}>
      <div className="text-center">
        <Image src={imageUrl} alt="" width="850" height="416" />
        <p>{content}</p>
      </div>
    </Layout>
  );
};

export default Post;

import Link from "next/link";

const PostCard = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="overflow">
        <img className="card-img-top" src={imageUrl} alt="" />
      </div>
      <div className="card-body">
        <h1>{title}</h1>
        <p>{content}</p>

        <Link href={`/post?title=${title}`} as={`post/${title}`}>
          <a className="btn btn-light">Read</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

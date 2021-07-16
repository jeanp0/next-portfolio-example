import Layout from "../components/Layout";
import Image from "next/image";

const Github = ({ user }) => {
  const { name, avatar_url, bio, blog, html_url } = user;
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{name}</h1>
            <Image
              src={avatar_url}
              alt={name}
              layout="responsive"
              width={340}
              height={340}
            />
            <p>{bio}</p>
            <a
              href={blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
              rel="noreferrer"
            >
              Blog
            </a>
            <a
              href={html_url}
              target="_blank"
              className="btn btn-outline-secondary"
              rel="noreferrer"
            >
              Go to my Github
            </a>
          </div>
        </div>
      </div>
      <h1>Github</h1>
      <h3>{name}</h3>
    </Layout>
  );
};

// backend
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/jeanp0");
  const data = await res.json();

  console.log(data);

  return {
    props: {
      user: data,
    },
  };
}

export default Github;

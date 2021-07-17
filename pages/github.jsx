import Layout from "../components/Layout";
import Image from "next/image";
import Error from "./_error";

const Github = ({ user, error, status }) => {
  const { name, avatar_url, bio, blog, html_url } = user;

  if (error) {
    return <Error status={status} />;
  }

  return (
    <Layout showFooter={false} dark>
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
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/jeanp0");
  const data = await res.json();
  const error = res.status > 299;

  return {
    props: {
      user: data,
      error,
      status: res.status,
    },
  };
}

export default Github;

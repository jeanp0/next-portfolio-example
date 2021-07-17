import Link from "next/link";
import Layout from "../components/Layout";

const Custom404 = () => {
  return (
    <Layout showFooter={false}>
      <div className="text-center">
        <h1>404</h1>
        <p>
          This page does not exist. Please return to{" "}
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Custom404;

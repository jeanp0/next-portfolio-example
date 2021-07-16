import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import nProgress from "nprogress";

const Layout = ({ children }) => {
  const router = useRouter();

  const handleRouteChangeStart = (url) => {
    console.log(url);
    nProgress.start();
  };
  const handleRouteChangeDone = (url) => {
    nProgress.done();
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeDone);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Ryan Ray Portfolio</h1>
          <p>2000 - {new Date().getFullYear()}</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;

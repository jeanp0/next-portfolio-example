import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import nProgress from "nprogress";

const Layout = ({ children, title, showFooter = true, dark = false }) => {
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
    <div className={dark ? "bg-dark" : ""}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={dark ? "text-light text-center" : "text-center"}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {showFooter && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Ryan Ray Portfolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;

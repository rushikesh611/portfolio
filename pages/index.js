import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Typical from "react-typical";

export default function Home() {
  return (
    <div className="list flex flex-col dark:bg-dark">
      <div className="layout flex flex-col overflow-hidden">
        <Header />
        <div className="banner flex flex-col flex-1 justify-center px-6 lg:px-10 py-10 dark:text-white">
          <Head>
            <title>Hrushikesh Jadhav</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
          </Head>
          <div>
            <h1 className="text-3xl font-Poppins lg:text-5xl font-bold dark:text-white">
              Hrushikesh Jadhav
            </h1>
            <p className="my-2 text-lg lg:my-4 lg:text-2xl font-light">
              <Typical
                steps={["Full Stack Developer 🚀", 500]}
                loop={Infinity}
              />
            </p>
          </div>
        </div>
        <About />
        {/* <Skills /> */}
        <Work />
        <Footer />
      </div>
    </div>
  );
}

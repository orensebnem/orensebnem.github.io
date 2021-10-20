import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import { GetStaticProps } from "next";
import { homePageData } from "../data/pages/home";
import Link from "next/link";

const IndexPage = ({ homePageData: HomePageData }) => {
  return (
    <Layout title="Bora Oren Showcase">
      <div className="flex justify-between bg-black">
        <span
          className=" self-center 
        text-gray-50
        2xl:text-7xl
        xl:text-7xl
        lg:text-6xl
        md:text-5xl
        sm:text-4xl
        s:text-3xl
        xs:text-2xl

        2xl:pl-16
        xl:pl-16
        lg:pl-16
        md:pl-16
        sm:pl-16
        s:pl-10
        xs:pl-10
        "
        >
          <span className="font-black">{homePageData.hi["en-US"]} {homePageData.Im["en-US"]}{" "} </span>
          <span className="font-black">{homePageData.name}</span>
          <br />
          <span
            className="text-blue-400 
            font-handle
        font-black 
        bg-gray-900
        2xl:text-6xl
        xl:text-6xl
        lg:text-5xl
        md:text-4xl
        sm:text-3xl
        s:text-2xl
        xs:text-xl
        "
          >
            {homePageData.title["en-US"]}
          </span>
        </span>
        <img src={homePageData.image} className="w-1/2" />
      </div>
    </Layout>
  );
};

/*
<div className="relative h-screen bg-black bg-opacity-75 w-1/2" />
*/

export const getStaticProps: GetStaticProps = async () => {
  try {
    return { props: { homePageData: homePageData } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default IndexPage;

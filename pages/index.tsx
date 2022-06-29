import React from "react";
import Layout from "../components/Layout";
import {GetStaticProps} from "next";
import PortfolioModel from "../interfaces/PortfolioModel";
import {getAllPortfolio} from "../utils/mdx";
import {indexPageData} from "../data/indexPageData";
import IndexPageData from "../interfaces/IndexPageData";
import SHeader from "../components/header";
import SVersion from "../components/version";
import SProjectCards from "../components/project/index.cards";


const IndexPage: React.FC<{
    indexPageData: IndexPageData;
    portfolios: PortfolioModel[];
}> = ({indexPageData, portfolios}) => {

    return (
        <Layout title={indexPageData.pageTitle["en-US"]}>
            <SVersion/>
            <SHeader/>
            <SProjectCards
                indexPageData={indexPageData}
                portfolios={portfolios}/>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {

        const portfolios = getAllPortfolio();
        return {props: {indexPageData, portfolios}};
    } catch (err) {
        return {props: {errors: err.message}};
    }
};

export default IndexPage;

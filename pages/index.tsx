import React from "react";
import PortfolioModel from "../interfaces/PortfolioModel";
import IndexPageData from "../interfaces/IndexPageData";
import {AboutMePage} from "../components/pages/aboutme";
import {GetStaticProps} from "next";
import {getAllPortfolio} from "../utils/mdx";
import {indexPageData} from "../data/indexPageData";
import {PortfoliosPage} from "../components/pages/portfolios";

const IndexPage: React.FC<{
    indexPageData: IndexPageData;
    portfolios: PortfolioModel[];
}> = ({indexPageData, portfolios}) => {

    return (
        <>
            <AboutMePage/>
            <PortfoliosPage title='PORTFOLIO' data={portfolios}/>
        </>
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

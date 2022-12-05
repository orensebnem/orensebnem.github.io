import React from "react";
import {GetStaticProps} from "next";
import PortfolioModel from "../interfaces/PortfolioModel";
import {getAllPortfolio} from "../utils/mdx";
import {indexPageData} from "../data/indexPageData";
import IndexPageData from "../interfaces/IndexPageData";
import {PortfoliosPage} from "../components/pages/portfolios";


const IndexPage: React.FC<{
    indexPageData: IndexPageData;
    portfolios: PortfolioModel[];
}> = ({indexPageData, portfolios}) => {

    return (
        <PortfoliosPage data={portfolios}/>
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

import React from "react";
import PortfolioModel from "../interfaces/PortfolioModel";
import IndexPageData from "../interfaces/IndexPageData";
import {AboutMePage} from "../components/pages/aboutme";


const IndexPage: React.FC<{
    indexPageData: IndexPageData;
    portfolios: PortfolioModel[];
}> = ({indexPageData, portfolios}) => {

    return (
        <AboutMePage/>
    );
};

export default IndexPage;

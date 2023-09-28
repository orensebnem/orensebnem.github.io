import {SPortfolios} from "../../portfolios";
import PortfolioModel from "../../../interfaces/PortfolioModel";
import Section from "../../section";


export const PortfoliosPage = ({data}: { data: PortfolioModel[] }) => {

    return (
        <>
            <Section title="PORTFOLIOS"/>
            <SPortfolios data={data}/>
        </>
    )
}
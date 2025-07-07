import {SPortfolios} from "../../portfolios";
import PortfolioModel from "../../../interfaces/PortfolioModel";
import Section from "../../section";


export const PortfoliosPage = ({title, data}: { title?:string, data: PortfolioModel[] }) => {

    return (
        <>
            {title && <Section title={title}/>}
            <SPortfolios data={data}/>
        </>
    )
}
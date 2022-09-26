import {SPortfolios} from "../../portfolios";
import {SLayout} from "../../layout/index";
import PortfolioModel from "../../../interfaces/PortfolioModel";


export const PortfoliosPage = ({data}:{data:PortfolioModel[]}) => {

    return (
        <SLayout sMenuSelected="portfolios">
            <SPortfolios data={data}/>
        </SLayout>
    )
}
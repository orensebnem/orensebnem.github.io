import {SPortfolios} from "../../portfolios";
import {SLayout} from "../../layout/index";
import PortfolioModel from "../../../interfaces/PortfolioModel";


export const PortfoliosPage = ({data}:{data:PortfolioModel[]}) => {

    return (
        <SLayout sMenuSelected="portfolios" backgroundColor="#FFF">
            <SPortfolios data={data}/>
        </SLayout>
    )
}
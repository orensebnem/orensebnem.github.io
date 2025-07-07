import PortfolioModel from "../../../interfaces/PortfolioModel";
import {IdeasToLaunch} from "../../ideasToLaunch";


export const IdeasToLaunchPage = ({title, data}: { title?: string, data: PortfolioModel[] }) => {

    return (
        <IdeasToLaunch data={data}/>
    )
}
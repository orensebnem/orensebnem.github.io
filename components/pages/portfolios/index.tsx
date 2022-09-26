import {SPortfolios} from "../../portfolios";
import {SLayout} from "../../layout/index";


export const PortfoliosPage = () => {

    const portfoliosData = [{
        title: "Scootie",
        description: "In two years Ooup will be the most preferred and convenient transportation method in Europe",
        headerAnimation: require("/public/images/portfolios/scootie-mobile-app/header.json"),
        badgesProps: {
            data: ["mobile"]
        }
    },
        {
            title: "Playtime",
            description: "Help working parents work collaboratively to keep their children busy and happy with playgroup sessions during school holidays",
            headerAnimation: require("/public/images/portfolios/playtime-mobile-app/header.json"),
            badgesProps: {
                data: ["mobile"]
            }
        },
        {
            title: "Linkedin Student",
            description: "The new graduates are pretty overwhelmed and frustrated with being inexperienced in job seeking.",
            headerAnimation: require("/public/images/portfolios/linkedin-student-app/header.json"),
            badgesProps: {
                data: ["mobile"]
            }
        }]

    return (
        <SLayout sMenuSelected="portfolio">
            <SPortfolios data={portfoliosData}/>
        </SLayout>
    )
}
import {SPortfolios} from "../../portfolios";
import {SLayout} from "../../layout/index";
import {Container} from "@chakra-ui/react";


export const PortfoliosPage = () => {

    const portfoliosData = [{
        title: "Scootie",
        description: "In two years Ooup will be the most preferred and convenient transportation method in Europe",
        headerImageSrc: '/images/portfolios/scootie-mobile-app',
        badgesProps: {
            data: ["mobile"]
        }
    },
        {
            title: "Playtime",
            description: "Help working parents work collaboratively to keep their children busy and happy with playgroup sessions during school holidays",
            headerImageSrc: '/images/portfolios/playtime-mobile-app',
            badgesProps: {
                data: ["mobile"]
            }
        },
        {
            title: "Linkedin Student",
            description: "The new graduates are pretty overwhelmed and frustrated with being inexperienced in job seeking.",
            headerImageSrc: '/images/portfolios/linkedin-student-app',
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
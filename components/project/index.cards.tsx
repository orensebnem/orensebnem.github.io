import {Center, Flex} from "@chakra-ui/react";
import React from "react";
import IndexPageData from "../../interfaces/IndexPageData";
import PortfolioModel from "../../interfaces/PortfolioModel";
import SProjectCardsTitle from "./index.cards.title";
import SProjectCard from "./index.card";

const SProjectCards: React.FC<{
    indexPageData: IndexPageData;
    portfolios: PortfolioModel[];
}> = ({indexPageData, portfolios}) => {

    return (
        <>
            <SProjectCardsTitle/>

            <Center>
                <Flex
                    gap="20"
                    wrap="wrap">
                    {portfolios.map((portfolio, index) => {
                        return <SProjectCard
                            key={index}
                            portfolio={portfolio}/>
                    })}
                </Flex>
            </Center>
        </>
    )
}

export default SProjectCards;

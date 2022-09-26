import {SPortfolio, SPortfolioProps} from "./index.portfolio";
import {Box, Container, Flex, Text} from "@chakra-ui/react";

interface SPortfoliosProps {
    data: SPortfolioProps[]
}

export const SPortfolios = ({data}: SPortfoliosProps) => {
    return (
        <Flex
            wrap="wrap"
            justifyContent="center"
            gap='10'
            mt={20}>
            {data.map((item) => {
                const {
                    headerAnimation,
                    title,
                    description,
                    badgesProps
                } = item;

                return <SPortfolio
                    headerAnimation={headerAnimation}
                    title={title}
                    description={description}
                    badgesProps={badgesProps}/>
            })}
        </Flex>)
}
import {SPortfolio} from "./index.portfolio";
import {Flex} from "@chakra-ui/react";
import PortfolioModel from "../../interfaces/PortfolioModel";

interface SPortfoliosProps {
    data: PortfolioModel[]
}

export const SPortfolios = ({data}: SPortfoliosProps) => {

    return (
        <Flex
            wrap="wrap"
            justifyContent="center"
            gap='10'
            mt={20}>
            {data?.map((item) => {
                const {
                    headerAnimation,
                    title,
                    description,
                    tags,
                } = item.frontmatter;


                return <SPortfolio
                    headerAnimation={headerAnimation}
                    title={title}
                    description={description}
                    tags={tags}/>
            })}
        </Flex>)
}
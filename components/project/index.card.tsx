import {Box, Center} from "@chakra-ui/react";
import React, {useState} from "react";
import PortfolioModel from "../../interfaces/PortfolioModel";
import SProjectCardTitle from "./index.card.title";
import SProjectCardDescription from "./index.card.description";
import SProjectCardTags from "./index.card.tags";
import {ComponentVariant} from "../../interfaces/ComponentVariant";
import Link from 'next/link'

const SProjectCard = ({portfolio}: { portfolio: PortfolioModel }) => {

    const [variant, setVariant] = useState(ComponentVariant.default);

    return (
        <Link href={`portfolios/${portfolio.slug}`}>
            <Box as="button"
                 display="flex"
                 alignItems="flex-end"
                 flexDirection="row"
                 padding="1em"
                 borderRadius='3xl'
                 w={[null, "100%", "100%", "25em"]}
                 height="35em"
                 backgroundImage="radial-gradient(circle at top left , #68A7AD 40%, #E5CB9F 10%, transparent 50%)"
                 transition="background-size .5s, color .5s"
                 backgroundRepeat={"no-repeat"}
                 backgroundSize="0 0"
                 borderColor="primary"
                 borderWidth={8}
                 boxShadow="0 0 5em -3em black"
                 _before={{
                     content: '""',
                     position: "absolute",
                     width: [null, "100%", "100%", "25em"],
                     margin: -6,
                     borderRadius: '3xl',
                     backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(./images/${portfolio.frontmatter.image})`,
                     backgroundSize: "contain",
                     height: "35em",
                     backgroundRepeat: "no-repeat",
                     zIndex: -999
                 }}
                 _hover={{
                     backgroundSize: "230% 230%",
                     color: "secondary",
                 }}
                 onMouseOver={() => {
                     setVariant(ComponentVariant.hover)
                 }}
                 onMouseOut={() => {
                     setVariant(ComponentVariant.default)
                 }}
            >
                <Box margin={["4em", "2em", "5em", "2em"]}>
                    <SProjectCardTitle title={portfolio.frontmatter.title}
                                       variant={variant}/>
                    <SProjectCardDescription description={portfolio.frontmatter.description}/>
                    <SProjectCardTags tags={portfolio.frontmatter.tags}
                                      variant={variant}/>

                </Box>
            </Box>
        </Link>
    )
}

export default SProjectCard;

import React, { useState } from "react";
import Layout from "../components/Layout";
import {GetStaticProps} from "next";
import packageJson from "../package.json";
import PortfolioModel from "../interfaces/PortfolioModel";

import {Box, Flex, Image, Link, SimpleGrid, SlideFade, Text, useColorMode, useDisclosure,} from "@chakra-ui/react";
import {getAllPortfolio} from "../utils/mdx";
import {indexPageData} from "../data/indexPageData";
import IndexPageData from "../interfaces/IndexPageData";


const IndexPage: React.FC<{
    indexPageData: IndexPageData;
    portfolios: PortfolioModel[];
}> = ({indexPageData, portfolios}) => {

    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onToggle} = useDisclosure()
    const [isToggled, setIsToggled] = useState({});


    return (
        <Layout title={indexPageData.pageTitle["en-US"]}>

            <Flex m={2} justifyContent={"space-between"}>
                <Box>
                    <Text
                        fontSize={["md", "lg", "xl", "2xl"]}
                        fontFamily={"caveat"}
                        right={"0px"}
                        top={"-10px"}
                        transform={"rotate(-10deg)"}
                    >
                        V{packageJson.version}
                    </Text>
                </Box>
            </Flex>
            <Box bg="primary.900" m={1}
                 rounded={"xl"}
                 backgroundImage={"./images/interior.png"}
            >
                <Flex align={"center"}>
                    <Flex direction={"column"} alignItems={"center"} flex={1}>
                        <Text
                            fontSize={["xl", "3xl", "5xl", "7xl"]}
                            color="primary.50"
                            fontFamily={"primary"}
                            fontWeight={900}
                        >
                            {indexPageData.hi["en-US"]} {indexPageData.Im["en-US"]} {indexPageData.name["en-US"]}
                        </Text>
                        <Text
                            fontSize={["md", "xl", "3xl", "5xl"]}
                            color="#5DB075"
                            fontFamily={"secondary"}
                            fontWeight={900}
                        >
                            {indexPageData.portfolios["en-US"]}
                        </Text>
                    </Flex>
                    <Image
                        src={`./images/${indexPageData.image}`}
                        alt={indexPageData.name["en-US"]}
                        boxSize={"50%"}
                        mt={-50}
                    />
                </Flex>
                {/** <Button onClick={toggleColorMode}>
                 Toggle {colorMode === "light" ? "Dark" : "Light"}
                 </Button> **/}
            </Box>
            <Text
                mt={9}
                mb={9}
                fontWeight={"bold"}
                fontSize={["md", "lg", "xl", "2xl"]}
            >

            </Text>
            <Text fontSize={["md", "lg", "xl", "2xl"]}
                  ml={4}
                  mb={2}
                  fontFamily={"primary"}
                  fontWeight={900}
                  mt={10}>PORTFOLIOS</Text>

            <SimpleGrid columns={[1, null, 2]} spacing='20px'>
                {portfolios.map((portfolio, index) => {
                    return <Box height='300px'
                                overflow='hidden'
                                rounded={15}
                                boxShadow={"lg"}
                                borderStyle="ridge"
                                borderColor="white"
                                borderWidth={0.5}>


                        <Box boxSize="100%" position="relative">
                            <SlideFade in={isToggled[portfolio.frontmatter.title]} offsetY='-60px' transition={{
                                enter: {
                                    duration: 0.1
                                }
                            }}>
                                <Text fontSize={["md", "lg", "xl", "2xl"]}
                                      mt={6}
                                      textAlign={"center"}
                                      width={"100%"}
                                      fontFamily={"secondary"}
                                      fontWeight={900}
                                      pointerEvents="none"
                                      position={"absolute"}
                                      color={`#${portfolio.frontmatter.colorPalette}`}
                                >{portfolio.frontmatter.title}</Text>
                            </SlideFade>

                            <Link href={`portfolios/${portfolio.slug}`}>
                                <Image src={`./images/${portfolio.frontmatter.image}`}
                                       zIndex={2}
                                       objectFit='cover'
                                       boxSize='100%'
                                       bg={"white"}
                                       transition="0.1s"
                                       onMouseOver={()=> setIsToggled({...isToggled, [portfolio.frontmatter.title]:true})}
                                       onMouseOut={()=> setIsToggled({...isToggled, [portfolio.frontmatter.title]:false})}
                                       _hover={{
                                           opacity: 1,
                                           cursor: "pointer",
                                           boxSize: "150%"
                                       }}
                                />
                            </Link>
                        </Box>


                    </Box>
                })}
            </SimpleGrid>

        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {

        const portfolios = getAllPortfolio();
        return {props: {indexPageData, portfolios}};
    } catch (err) {
        return {props: {errors: err.message}};
    }
};

export default IndexPage;

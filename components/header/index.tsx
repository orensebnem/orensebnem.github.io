import {Box, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {indexPageData} from "../../data/indexPageData";
import SHeaderTitle from "./index.title";
import SHeaderSubtitle from "./index.subtitle";

const SHeader = () => {

    return(
        <Box bg="primary" backgroundColor={"primary.50"}>
            <Flex align={"center"}>
                <Flex direction={"column"} flex={1} alignItems={"center"}>
                    <SHeaderTitle/>
                    <SHeaderSubtitle/>
                </Flex>
                <Image
                    src={`./images/${indexPageData.image}`}
                    alt={indexPageData.name["en-US"]}
                    boxSize={"50%"}
                    mt={-50}
                    filter="grayscale(40%)"
                />
            </Flex>
            {/** <Button onClick={toggleColorMode}>
             Toggle {colorMode === "light" ? "Dark" : "Light"}
             </Button> **/}
        </Box>
    )

}

export default SHeader;

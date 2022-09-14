import {Flex, Text} from "@chakra-ui/react";
import packageJson from "../../package.json";
import React from "react";

const SVersion = () => {
    return (
        <Flex m={2} justifyContent={"space-between"}>
            <Text
                color="text"
                fontSize={["md", "lg", "xl", "2xl"]}
                fontFamily={"caveat"}
                right={"0px"}
                top={"-10px"}
                transform={"rotate(-10deg)"}
            >
                V{packageJson.version}
            </Text>
        </Flex>
    )
}

export default SVersion;

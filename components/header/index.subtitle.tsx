import {indexPageData} from "../../data/indexPageData";
import {Text} from "@chakra-ui/react";
import React from "react";

const SHeaderSubtitle = () =>{
    return(
        <Text
            fontSize={["md", "2xl", "4xl", "5xl"]}
            color="#e5cb9f"
            fontFamily={"secondary"}
            fontWeight={900}>
            {indexPageData.portfolios["en-US"]}
        </Text>
    )
}

export default SHeaderSubtitle;

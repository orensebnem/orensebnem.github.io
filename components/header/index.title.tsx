import {indexPageData} from "../../data/indexPageData";
import {Text} from "@chakra-ui/react";
import React from "react";


const SHeaderTitle = () => {
    return(
        <Text
            fontSize={["xl", "3xl", "4xl", "6xl"]}
            color="secondary"
            fontFamily={"primary"}
            fontWeight={900}
            mt={5}
            lineHeight={0.5}
        >
            {indexPageData.hi["en-US"]} {indexPageData.Im["en-US"]} {indexPageData.name["en-US"]}
        </Text>
    )
}

export default SHeaderTitle;

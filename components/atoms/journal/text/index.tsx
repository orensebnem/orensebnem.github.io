import React, {ReactElement} from "react";
import {Text} from "@chakra-ui/react";

const JournalText = ({children}: { children: React.ReactNode}) => {

    return (
        <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            ml={4}
            alignSelf={"center"}
            fontFamily={"primary"}
            fontWeight={400}
            mt={-2}
        >
            {children}
        </Text>
    );
};

export default JournalText;

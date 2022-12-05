import {Container, Flex} from "@chakra-ui/react";
import React, {ReactElement} from "react";
import JournalBoxDate from "../../../atoms/journal/boxdate";
import JournalText from "../../../atoms/journal/text";

interface JournalSummaryProps {
    day: number;
    children: React.ReactNode;
}

const JournalSummary: React.FC<JournalSummaryProps> = ({day, children}) => {

    return (
        <Container maxWidth={"150ch"} mt={7} ml={-3}>
            <Flex>
                <JournalBoxDate value={day}/>

                <JournalText>
                    {children}
                </JournalText>
            </Flex>
        </Container>
    );
};

export default JournalSummary;

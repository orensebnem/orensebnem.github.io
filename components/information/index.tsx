import {Stack, Text} from "@chakra-ui/react";

export interface SInformationProps {
    title: string;
    subtitle: string;
    description: string;
}

export const SInformation = ({
                                 title,
                                 subtitle,
                                 description
                             }: SInformationProps) => {
    return (
        <Stack id={title}
            direction="column"
               width={400}
               marginLeft={10}
               marginRight={10}>
            <Text
                fontSize={["2xl","2xl","2lg","2xl"]}
                fontWeight="bold">{title}</Text>
            <Text fontSize="4xl"
                  fontWeight="bold">{subtitle}</Text>
            <Text fontSize={["2xl","2xl","xl","xl"]}>{description}</Text>
        </Stack>
    )
}
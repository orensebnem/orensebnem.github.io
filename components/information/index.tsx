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
        <Stack direction="column" width={400}>
            <Text
                fontSize="lg"
                fontWeight="bold">{title}</Text>
            <Text fontSize="4xl"
                  fontWeight="bold">{subtitle}</Text>
            <Text>{description}</Text>
        </Stack>
    )
}
import {Avatar, Stack, Text} from "@chakra-ui/react";

export interface SLogoProps {
    name: string;
    surname: string;
}

export const SLogo = ({name, surname}: SLogoProps) => {

    return (
        <Stack
            direction="row"
            align="center">
            <Avatar
                name={name}
                fontSize={40}
                fontWeight="bold"
                color="white"
                bgColor="#6DA6E0"
                src="/"/>
            <Text
                fontWeight="bold">
                {name} {surname}
            </Text>
        </Stack>
    )

}
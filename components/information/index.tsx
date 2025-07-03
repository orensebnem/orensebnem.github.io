import {Flex, Stack, Text} from "@chakra-ui/react";
import {SAvatar, SAvatarProps} from "../avatar";

export interface SInformationProps {
    title: string;
    subtitle: string;
    description: string;
}

const sAvatarProps: SAvatarProps = {imageName: "sebnemWithBackground.png"}

export const SInformation = ({
                                 title,
                                 subtitle,
                                 description
                             }: SInformationProps) => {
    return (
        <Stack id={title}
               direction="row"
               justifyContent='center'>
            <Flex direction='column' marginTop={140} marginLeft={20}>
                <Text fontSize="4xl"
                      color='black'
                      fontWeight="bold">{subtitle}</Text>
                <Text fontSize={["small", "medium", "xl", "2xl"]} color='black'>{description}</Text>
            </Flex>
            <SAvatar imageName={sAvatarProps.imageName}/>
        </Stack>
    )
}
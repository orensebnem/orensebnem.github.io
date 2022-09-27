import {Flex, Spacer, Stack, Text} from "@chakra-ui/react";
import {SInformation, SInformationProps} from "../information";
import {SAvatar, SAvatarProps} from "../avatar";

interface SPersonnelProps {
    avatarProps: SAvatarProps;
    informationProps: SInformationProps;
}

export const SPersonnel = ({
                               avatarProps,
                               informationProps
                           }: SPersonnelProps) => {

    const {imageName} = avatarProps
    const {
        title,
        subtitle,
        description
    } = informationProps

    return (
        <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={20}
            width="100%"
            marginTop={50}>
            <SAvatar imageName={imageName}/>
            <SInformation
                title={title}
                subtitle={subtitle}
                description={description}/>
        </Flex>
    )
}
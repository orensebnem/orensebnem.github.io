import {Box, Image, Stack} from "@chakra-ui/react";

export interface SAvatarProps {
    imageName: string;
}

export const SAvatar = ({imageName}: SAvatarProps) => {
    return (
            <Image
                width='40%'
                height='0%'
                maxWidth={500}
                style={{borderTopRightRadius: 50}}
                src={`/images/${imageName}`}
                alt="Sebnem Oren"
            />
    )
}
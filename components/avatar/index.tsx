import {Avatar, Box, Image} from "@chakra-ui/react";

interface SAvatarProps {
    name: string;
}

export const SAvatar = ({name}: SAvatarProps) => {
    return (
        <>
            <Image
                position="absolute"
                borderRadius='full'
                marginLeft={6}
                marginTop={4}
                boxSize={200}
                src="https://bit.ly/dan-abramov"
                alt="Sebnem Oren"
            />
            <Box
                borderRadius='full'
                margin={2}
                boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                boxSize={230}
            />
        </>
    )
}
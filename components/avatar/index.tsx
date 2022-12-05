import {Box, Image, Stack} from "@chakra-ui/react";

export interface SAvatarProps {
    imageName: string;
}

export const SAvatar = ({imageName}: SAvatarProps) => {
    return (
        <Stack>
            <Image
                position="absolute"
                borderRadius='full'
                marginLeft={4}
                marginTop={6}
                boxSize={300}
                height={300}
                src={`/images/${imageName}`}
                alt="Sebnem Oren"
            />
            <Box
                borderRadius='full'
                margin={2}
                boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                boxSize={330}
            />
        </Stack>
    )
}
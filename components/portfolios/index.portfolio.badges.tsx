import {Badge, useColorModeValue} from "@chakra-ui/react";

export interface SPortfolioBadgeProps {
    data: string[];
}

export const SPortfolioTags = ({tags}: {tags:string[]}) => {
    return (
        <>
            {tags.map((item) => {
                return <Badge
                    px={2}
                    py={1}
                    mr={2}
                    mt={2}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'300'}
                    fontSize={10}>
                    {item}
                </Badge>
            })}
        </>

    )
}
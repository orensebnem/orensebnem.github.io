import React, {useState} from "react";
import Image from 'next/image';
import {Box, Heading, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {SPortfolioBadgeProps, SPortfolioBadges} from "./index.portfolio.badges";

export interface SPortfolioProps {
    title?: string;
    description: string;
    headerImageSrc: string;
    badgesProps: SPortfolioBadgeProps;
}

export const SPortfolio = ({
                               title,
                               description,
                               headerImageSrc,
                               badgesProps
                           }: SPortfolioProps) => {

    const {data:badgesData} = badgesProps

    const [onHover, setOnHover] = useState(false);

    return (
            <Box
                maxW={[150, 200, 300, 350]}
                w={'full'}
                bg={useColorModeValue('gray.100', 'gray.900')}
                boxShadow='l'
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                onMouseEnter={()=> setOnHover(true)}
                onMouseLeave={()=> setOnHover(false)}>

                <Box
                    h={[75, 100, 150, 175]}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={onHover ? `${headerImageSrc}/headerOnHover.png` : `${headerImageSrc}/header.png`}
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'} fontSize={12}>
                        {description}
                    </Text>
                </Stack>
                <SPortfolioBadges data={badgesData}/>
            </Box>
    )
}
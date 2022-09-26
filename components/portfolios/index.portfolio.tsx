import React, {useEffect, useState} from "react";
import Image from 'next/image';
import {Box, Heading, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {SPortfolioBadgeProps, SPortfolioTags} from "./index.portfolio.badges";
import {useLottie} from "lottie-react";

export interface SPortfolioProps {
    title?: string;
    description: string;
    headerAnimation: string;
    tags: string[];
}

export const SPortfolio = ({
                               title,
                               description,
                               headerAnimation,
                               tags
                           }: SPortfolioProps) => {


    const [onHover, setOnHover] = useState(false);
    const [animation, setAnimation] = useState("");

    const getHeaderImage = async (page) => {
        return await require(`../../public/images/portfolios/${page}/header.json`)
    }

    useEffect(() => {
        getHeaderImage(headerAnimation)
            .then((result) => {
                setAnimation(result);
            })
    }, [])

    const handleMouseOnEnter = () => {
        setOnHover(true);
    }

    const handleMouseOnLeave = () => {
        setOnHover(false);
    }

    const options = {
        animationData: animation,
        loop: onHover,
        style: {
            height: "100%"
        },
    };


    const {View, pause} = useLottie(options);
    !onHover && pause();

    return (
        <Box
            maxW={[150, 200, 300, 350]}
            w={'full'}
            bg={useColorModeValue('gray.100', 'gray.900')}
            _hover={{
                cursor: "pointer"
            }}
            boxShadow='l'
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            onMouseEnter={handleMouseOnEnter}
            onMouseLeave={handleMouseOnLeave}>

            <Box
                h={[75, 100, 150, 175]}
                bg={'gray.100'}
                mx={-6}
                mb={6}
                pos={'relative'}>
                {View}
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
            <SPortfolioTags tags={tags}/>
        </Box>
    )
}
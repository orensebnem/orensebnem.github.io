import React, {useEffect, useState} from "react";
import {Box, Heading, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {useLottie} from "lottie-react";
import Link from "next/link";
import {IdeaToLaunchBadges} from "./index.ideaToLaunch.badges";

export interface IdeaToLaunchProps {
    title?: string;
    description: string;
    headerAnimation: string;
    tags: string[];
    href: string;
}

export const IdeaToLaunch = ({
                               title,
                               description,
                               headerAnimation,
                               tags,
                               href
                           }: IdeaToLaunchProps) => {


    const [onHover, setOnHover] = useState(false);
    const [animation, setAnimation] = useState("");

    const getHeaderImage = async (page) => {
        return await require(`../../public/images/ideas-to-launch/${page}/header.json`)
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
        <Link href={`ideas-to-launch/${href}`}>
            <Box
                data-testid="ideasToLaunchDataTestId"
                maxW={["sm", "sm", "sm", "xs"]}
                bg={useColorModeValue('gray.100', 'gray.900')}
                _hover={{
                    cursor: "pointer"
                }}
                boxShadow={onHover ? "2xl" : "xs"}
                transition={"box-shadow 0.3s  ease-in-out"}
                rounded={'2xl'}
                p={6}
                overflow={'hidden'}
                onMouseEnter={handleMouseOnEnter}
                onMouseLeave={handleMouseOnLeave}>

                <Box
                    h={[75, 100, 150, onHover ? 180 : 175]}
                    transition={"height 0.3s"}
                    bg={'gray.100'}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    {View}
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={["lg", "lg", "xl", "2xl"]}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}
                          fontSize={["lg", "lg", "xl", "2xl"]}>
                        {description}
                    </Text>
                </Stack>
                <IdeaToLaunchBadges tags={tags}/>
            </Box>
        </Link>
    )
}
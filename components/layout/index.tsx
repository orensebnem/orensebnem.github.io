import {Box, Center, Flex, Heading} from "@chakra-ui/react";
import SHeader2 from "../header-2";
import {SLogoProps} from "../logo";
import {SMenuProps} from "../menus/index.menu";
import {ReactElement} from "react";

interface SLayoutProps {
    sMenuSelected: string;
    children: ReactElement;
}

export const SLayout = ({children, sMenuSelected}: SLayoutProps) => {
    const sMenusProps: SMenuProps[] = [
        {
            label: "about me",
            selected: sMenuSelected === "about me",
            href: "about",
            hasPageTitle: false,
        },
        {
            label: "resume",
            selected: sMenuSelected === "resume",
            href: "resume",
            hasPageTitle: true,
        }, {
            label: "portfolios",
            selected: sMenuSelected === "portfolios",
            href: "portfolios",
            hasPageTitle: true,
        }, {
            label: "blog",
            selected: sMenuSelected === "blog",
            href: "blog",
            hasPageTitle: true,
        }, {
            label: "contact",
            selected: sMenuSelected === "contact",
            href: "contact",
            hasPageTitle: false,
        }];
    const sLogoProps: SLogoProps = {
        name: "Sebnem",
        surname: "Oren"
    }


    const menuIndex = sMenusProps.findIndex((menu) => {
        return menu.label === sMenuSelected
    })
    const hasPageTitle = sMenusProps[menuIndex].hasPageTitle;

    return (
        <Flex
            direction="column"
            backgroundColor="#629ED9">
            <Box
                backgroundColor="white"
                width="90%"
                alignSelf="center"
                marginTop={10}
                pb={20}
                roundedTop={20}>
                <SHeader2 sLogoProps={sLogoProps}
                          sMenusProps={{
                              data: sMenusProps,
                              selected: sMenuSelected,
                          }}/>

                {hasPageTitle &&
                <Center
                    height={180}
                    backgroundColor="#FDFDFD"
                    borderTop="2px solid #f2f2f2"
                    borderBottom="2px solid #f2f2f2">
                    <Heading as="h1"
                             ml={50}
                             width="100%">
                        {sMenuSelected.toUpperCase()}
                    </Heading>
                </Center>
                }

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={20}
                    marginTop={50}>

                    {children}
                </Flex>


            </Box>
        </Flex>
    )
}
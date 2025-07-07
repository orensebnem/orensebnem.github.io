import {Box, Center, Flex, Heading} from "@chakra-ui/react";
import SHeader2 from "../header-2";
import {SLogoProps} from "../logo";
import {SMenuProps} from "../menus/index.menu";
import {ReactElement} from "react";
import {SAvatarProps} from "../avatar";
import {SInformationProps} from "../information";
import {SPersonnel} from "../personnel";

interface SLayoutProps {
    sMenuSelected: string;
    children: ReactElement;
    backgroundColor: string;
}


export const SLayout = ({children, sMenuSelected, backgroundColor}: SLayoutProps) => {
    const sMenusProps: SMenuProps[] = [
        {
            label: "about me",
            selected: sMenuSelected === "about me",
            href: "Product manager",
            hasPageTitle: false,
        },
        {
            label: "resume",
            selected: sMenuSelected === "resume",
            href: "/resume",
            hasPageTitle: true,
            isLink: true,
        }, {
            label: "portfolio",
            selected: sMenuSelected === "portfolio",
            href: "PORTFOLIO",
            hasPageTitle: false,
        }, {
            label: "🚀 ideas to launch",
            selected: sMenuSelected === "ideasToLaunch",
            href: "/ideas-to-launch",
            hasPageTitle: true,
            isLink: true,
        }, /*{
            label: "contact",
            selected: sMenuSelected === "contact",
            href: "contact",
            hasPageTitle: false,
        }*/];
    const sLogoProps: SLogoProps = {
        name: "Sebnem",
        surname: "Oren"
    }


    const sAvatarProps: SAvatarProps = {imageName: "sebnemWithBackground.png"}
    const sInformationProps: SInformationProps = {
        title: "Product manager",
        subtitle: "Hi, I'm Sebnem",
        /*description: `
        Product Manager passionate about solving problems, improving lives through data-driven products, and delivering impactful user experiences with cross-functional teams
        `*/
        description: `Product enthusiast with a passion for solving problems and delivering compelling customer experiences based on data to generate value for users and organizations. Ability to interact with internal and external business clients, technical teams and end-users in conveying solutions effectively. Project management skills with balancing competing priorities for complex projects and the ability to thrive in interdisciplinary teams.`
    }


    const menuIndex = sMenusProps.findIndex((menu) => {
        return menu.label === sMenuSelected
    })
    const hasPageTitle = sMenusProps[menuIndex].hasPageTitle;

    return (
        <Flex
            direction="column"
            data-testid="layout"
            backgroundColor={backgroundColor}
            mt={10}
            borderRadius={50}>

            <SHeader2 sLogoProps={sLogoProps}
                      sMenusProps={{
                          data: sMenusProps,
                          selected: sMenuSelected,
                      }}/>


            <Box>
                {hasPageTitle &&
                    <Center
                        height={[100, 100, 140, 180]}
                        backgroundColor="#FDFDFD"
                        borderTop="2px solid #f2f2f2"
                        borderBottom="2px solid #f2f2f2">
                        <Heading as="h1"
                                 fontSize={["xl", "2xl", "3xl", "4xl"]}
                                 ml={50}
                                 width="100%">
                            {sMenuSelected.toUpperCase()}
                        </Heading>
                    </Center>
                }

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={20}>

                    {children}
                </Flex>
            </Box>
        </Flex>
    )
}
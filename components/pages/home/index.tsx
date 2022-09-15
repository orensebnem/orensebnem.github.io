import SHeader2 from "../../header-2";
import {SPersonnel} from "../../personnel";
import {SMenuProps} from "../../menus/index.menu";
import {SLogoProps} from "../../logo";
import {SInformationProps} from "../../information";
import {Box, Flex, Spacer, Stack} from "@chakra-ui/react";
import {SAvatarProps} from "../../avatar";

export const HomePage = () => {

    const sAvatarProps: SAvatarProps = {imageName: "sebnem-2.png"}
    const sMenusProps: SMenuProps[] = [{label: "about me"},
        {
            label: "resume"
        }, {
            label: "portfolio"
        }, {
            label: "blog"
        }, {
            label: "contact"
        }];
    const sLogoProps: SLogoProps = {
        name: "Sebnem",
        surname: "Oren"
    }
    const sInformationProps: SInformationProps = {
        title: "Product manager",
        subtitle: "Sebnem Sokmen",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type "
    }

    return (
        <Flex
            direction="column"
            backgroundColor="#0072E3"
            height="100%">
            <Box
                backgroundColor="white"
                width="90%"
                alignSelf="center"
                marginTop={10}
                roundedTop={20}>
                <SHeader2 sLogoProps={sLogoProps}
                          sMenusProps={sMenusProps}/>
                <SPersonnel avatarProps={sAvatarProps}
                            informationProps={sInformationProps}/>
            </Box>
        </Flex>
    )
}
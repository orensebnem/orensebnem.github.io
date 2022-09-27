import {SLogo, SLogoProps} from "../logo";
import {Flex} from "@chakra-ui/react";
import {SMenus} from "../menus";
import {SMenuProps} from "../menus/index.menu";
import {useState} from "react";

interface SHeader2Props {
    sLogoProps: SLogoProps;
    sMenusProps: {
        data: SMenuProps[],
        selected: string
    },
}

export const SHeader2 = ({
                             sLogoProps,
                             sMenusProps
                         }: SHeader2Props) => {

    const {
        data: sMenusData,
        selected: sMenusSelected
    } = sMenusProps;

    return (
        <Flex data-testid="header-2"
              align="center"
              justifyContent="space-between"
              justifyItems="space-between"
              ml={10}
              mr={10}
              mb={10}>
            <SLogo name={sLogoProps.name}
                   surname={sLogoProps.surname}/>
            <SMenus
                data={sMenusData}
                selected={sMenusSelected}/>
        </Flex>
    )
}

export default SHeader2
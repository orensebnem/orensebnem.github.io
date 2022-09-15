import {SLogo, SLogoProps} from "../logo";
import {Flex} from "@chakra-ui/react";
import {SMenus} from "../menus";
import {SMenuProps} from "../menus/index.menu";

interface SHeader2Props {
    sLogoProps: SLogoProps;
    sMenusProps: SMenuProps[];
}

export const SHeader2 = ({
                             sLogoProps,
                             sMenusProps
                         }: SHeader2Props) => {
    return (
        <Flex align="center"
              justifyContent="space-between"
              justifyItems="space-between"
              margin={10}>
            <SLogo name={sLogoProps.name}
                   surname={sLogoProps.surname}/>
            <SMenus data={sMenusProps}/>
        </Flex>
    )
}

export default SHeader2
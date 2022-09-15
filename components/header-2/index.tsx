import {SLogo, SLogoProps} from "../logo";
import {Flex} from "@chakra-ui/react";
import {SMenus} from "../menus";
import {SMenuProps} from "../menus/index.menu";

interface SHeader2Props {
    sLogoData: SLogoProps;
    sMenusData: SMenuProps[];
}

export const SHeader2 = ({
                             sLogoData,
                             sMenusData
                         }: SHeader2Props) => {
    return (
        <Flex align="center"
              justifyContent="space-around">
            <SLogo name={sLogoData.name}
                   surname={sLogoData.surname}/>
            <SMenus data={sMenusData}/>
        </Flex>
    )
}

export default SHeader2
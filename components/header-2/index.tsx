import {SLogo, SLogoProps} from "../logo";
import {Flex} from "@chakra-ui/react";
import {SMenus} from "../menus";
import {SMenuProps} from "../menus/index.menu";

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
        <Flex data-testid="header-2" style={{
            position: 'absolute',
            marginTop: 10,
            marginLeft: 80,
        }}>
            <SMenus
                data={sMenusData}
                selected={sMenusSelected}/>
        </Flex>
    )
}

export default SHeader2
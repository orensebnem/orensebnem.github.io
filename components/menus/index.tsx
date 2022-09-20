import SMenu, {SMenuProps} from "./index.menu";
import {Stack} from "@chakra-ui/react";

interface SMenusProps {
    data: SMenuProps[];
    selected: string;
}

export const SMenus = ({data, selected}: SMenusProps) => {
    return (
        <Stack direction="row" gap={10}>
            {data.map((menu) => {
                return <SMenu
                    key={menu.label}
                    label={menu.label}
                    selected={menu.selected}/>
            })}
        </Stack>
    )
}
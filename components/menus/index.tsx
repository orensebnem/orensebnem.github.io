import SMenu, {SMenuProps} from "./index.menu";
import {Stack} from "@chakra-ui/react";

interface SMenusProps {
    data: SMenuProps[]
}

export const SMenus = ({data}: SMenusProps) => {
    return (
        <Stack direction="row">
            {data.map((menu) => {
                return <SMenu key={menu.label} label={menu.label}/>
            })}
        </Stack>
    )
}
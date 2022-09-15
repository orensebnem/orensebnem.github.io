import SMenu, {SMenuProps} from "./index.menu";
import {SimpleGrid} from "@chakra-ui/react";

interface SMenusProps {
    data: SMenuProps[]
}

export const SMenus = ({data}: SMenusProps) => {
    return (
        <SimpleGrid columns={10} spacing={10}>
            {data.map((menu) => {
                return <SMenu key={menu.label} label={menu.label}/>
            })}
        </SimpleGrid>
    )
}
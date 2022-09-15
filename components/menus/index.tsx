import {SMenuProps} from "./index.menu";
import {SimpleGrid} from "@chakra-ui/react";

interface SMenusProps {
    data: SMenuProps[]
}

export const SMenus = ({data}: SMenusProps) => {
    return (
        <SimpleGrid columns={10} spacing={10}>
            {data.map((menu) => {
                return <div key={menu.label}>{menu.label}</div>
            })}
        </SimpleGrid>
    )
}
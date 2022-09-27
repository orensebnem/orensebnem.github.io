import {Text} from "@chakra-ui/react";
import Link from "next/link";

export interface SMenuProps {
    label: string;
    selected: boolean;
    href: string;
    hasPageTitle?: boolean,
    size?: number,
}

const SMenu = ({label, selected, href, size=16}: SMenuProps) => {
    return (
        <Link href={href}>
            <Text opacity={selected ? 1 : 0.55}
            fontSize={size}>{label}
            </Text>
        </Link>
    )
}

export default SMenu
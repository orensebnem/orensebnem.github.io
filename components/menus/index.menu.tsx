import {Text} from "@chakra-ui/react";
import Link from "next/link";

export interface SMenuProps {
    label: string;
    selected: boolean;
    href: string;
    hasPageTitle?: boolean,
}

const SMenu = ({label, selected, href}: SMenuProps) => {
    return (
        <Link href={href}>
            <Text
                opacity={selected ? 1 : 0.55}>{label}
            </Text>
        </Link>
    )
}

export default SMenu
import {Link, Text} from "@chakra-ui/react";

export interface SMenuProps {
    label: string;
    selected: boolean;
    hasTitle: boolean;
}

const SMenu = ({label, selected}: SMenuProps) => {
    return (
        <Link>
            <Text
                opacity={selected ? 1 : 0.55}>{label}
            </Text>
        </Link>
    )
}

export default SMenu
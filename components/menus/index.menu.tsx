import {Link, Text} from "@chakra-ui/react";

export interface SMenuProps {
    label: string;
}

const SMenu = ({label}: SMenuProps) => {
    return (
        <Link>
            <Text
                fontWeight="bold">{label}
            </Text>
        </Link>
    )
}

export default SMenu
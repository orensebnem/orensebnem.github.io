import {Link} from "@chakra-ui/react";

export interface SMenuProps{
    label: string;
}

const SMenu = ({label}: SMenuProps) => {
    return(
        <Link>{label}</Link>
    )
}

export default SMenu
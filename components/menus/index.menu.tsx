import {Link, Text} from "@chakra-ui/react";
import {useState} from "react";

export interface SMenuProps {
    label: string;
    selected: boolean;
    href: string;
    hasPageTitle?: boolean,
    size?: number,
    isLink?: boolean,

}

const SMenu = ({label, selected, href, size = 16, isLink}: SMenuProps) => {

    const [hover, setHover] = useState(false);

    const linkHref = isLink ? href : `#${href}`;

    return (
        <div onMouseEnter={()=> setHover(true)}
             onMouseLeave={()=> setHover(false)}
             style={{
                 textDecoration: hover ? "underline" : "none",
                 cursor: hover ? "pointer" : "default"
             }}>
            <Link href={linkHref}>
                <Text opacity={selected ? 1 : 0.55}
                      fontSize={size}>{label}
                </Text>
            </Link>
        </div>
    )
}

export default SMenu
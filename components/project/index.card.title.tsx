import {Text} from "@chakra-ui/react";
import {ComponentVariant} from "../../interfaces/ComponentVariant";

const SProjectCardTitle = ({title, variant = ComponentVariant.default}:
                               { title: string, variant?: ComponentVariant }) => {
    return (
        <Text
            fontFamily="primary"
            fontSize={["xl", "5xl", "5xl", "5xl"]}
            lineHeight="xs"
            fontWeight={900}
            variant={variant.toString()}
        >
            {title}
        </Text>
    )
}

export default SProjectCardTitle;

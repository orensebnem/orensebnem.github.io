import {Text} from "@chakra-ui/react";
import {ComponentVariant} from "../../interfaces/ComponentVariant";

const SProjectCardDescription = ({description,variant = ComponentVariant.default}:
                                     {description:string, variant?: ComponentVariant}) => {
    return(
        <Text
            fontSize={["md", "2xl", "3xl", "2xl"]}
            fontFamily="secondary"
            lineHeight="2em"
            fontWeight={900}
            textAlign="left"
            mt="0.5em"
            variant={variant.toString()}
        >
            {description}
        </Text>

    )
}

export default SProjectCardDescription;

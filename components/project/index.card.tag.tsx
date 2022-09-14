import {Box, useStyleConfig} from "@chakra-ui/react";
import {ComponentVariant} from "../../interfaces/ComponentVariant";

const SProjectCardTag = ({tag, variant = ComponentVariant.default}: { tag: string, variant: ComponentVariant }) => {
    const styles = useStyleConfig('Box', { variant })
    return (
        <Box
            fontSize={["xl", "xl", "xl", "xl"]}
            fontWeight={900}
            color="secondary"
            borderRadius="0.3rem"
            padding="0 0.5em"
            marginRight="0.5em"
            lineHeight="1.5em"
            __css={styles}
        >
            {tag}
        </Box>
    )
}

export default SProjectCardTag;

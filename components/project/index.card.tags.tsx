import SProjectCardTag from "./index.card.tag";
import React from "react";
import {Box} from "@chakra-ui/react";
import {ComponentVariant} from "../../interfaces/ComponentVariant";

const SProjectCardTags = ({
                              tags = [],
                              variant = ComponentVariant.default
                          }: { tags: string[], variant: ComponentVariant }) => {
    return (<Box display="flex">{tags.map((tag) => {
        return <SProjectCardTag key={tag} tag={tag} variant={variant}/>
    })}</Box>)
}

export default SProjectCardTags;

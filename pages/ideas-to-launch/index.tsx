import React from "react";
import {GetStaticProps} from "next";
import {getAllIdeaToLaunch} from "../../utils/mdx";
import {indexPageData} from "../../data/indexPageData";
import IndexPageData from "../../interfaces/IndexPageData";
import PortfolioModel from "../../interfaces/PortfolioModel";
import LayoutSideProject from "../../components/LayoutSideProject";
import {Flex} from "@chakra-ui/react";
import {IdeasToLaunchPage} from "../../components/pages/ideasToLaunch";


const IdeaToLaunch: React.FC<{
    indexPageData: IndexPageData;
    ideasToLaunch: PortfolioModel[];
}> = ({indexPageData, ideasToLaunch}) => {

    return (
        <LayoutSideProject title='🚀 Ideas To Launch'>
            <Flex marginLeft={90}>
                <IdeasToLaunchPage data={ideasToLaunch}/>
            </Flex>
        </LayoutSideProject>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {

        const ideasToLaunch = getAllIdeaToLaunch();
        return {props: {indexPageData, ideasToLaunch}};
    } catch (err) {
        return {props: {errors: err.message}};
    }
};


export default IdeaToLaunch;


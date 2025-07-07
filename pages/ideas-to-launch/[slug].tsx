import LayoutPortfolio from "../../components/LayoutPortfolio";
import React, {FC} from "react";
import {Frontmatter} from "../../interfaces/PortfolioModel";
import {getAllIdeaToLaunch, getAllPortfolio, getSingleIdeaToLaunch, getSinglePortfolio} from "../../utils/mdx";
import {getMDXComponent} from "mdx-bundler/client";
import * as Components from "../../components";

interface PortfolioProps {
    code: any;
    frontmatter: Frontmatter;
}

const Details: FC<PortfolioProps> = ({code, frontmatter}) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);

    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component components={{
        // @ts-ignore
        Components
    }}/></div>

    return (
        <LayoutPortfolio title={frontmatter.title}>
            <MDXWrapper/>
        </LayoutPortfolio>
    );
};

export const getStaticProps = async ({params}) => {
    const post = await getSingleIdeaToLaunch(params.slug);
    return {
        props: {...post},
    };
};

export const getStaticPaths = async () => {
    const paths = getAllIdeaToLaunch().map(({slug}) => ({params: {slug}}));
    return {
        paths,
        fallback: false,
    };
};


export default Details;
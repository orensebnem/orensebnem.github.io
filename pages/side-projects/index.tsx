import dynamic from "next/dynamic";
import {Center, Heading} from "@chakra-ui/react";
import LayoutSideProject from "../../components/LayoutSideProject";

const SideProjectComponent = dynamic(() => import('./index.component'), {ssr: false})

const SideProjectPage = () => {
    return (
        <LayoutSideProject title="Side Projects">
            <br/>
            <Heading
                fontSize={["sm", "xs", "35"]}
                paddingLeft={["-100", "100"]}
                marginTop={["-50", "-9"]}>PRODUCT MANAGEMENT TOOL</Heading>
            <br/>
            {/*@ts-ignore*/}
            <Center>
                <SideProjectComponent/>
            </Center>
        </LayoutSideProject>
    )
}

export default SideProjectPage
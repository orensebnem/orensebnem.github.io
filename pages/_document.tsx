import Document, {Head, Html, Main, NextScript,} from "next/document";
import {ColorModeScript} from "@chakra-ui/react";
import theme from "../data/themes/theme";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html style={{height: "100%"}}>
                <Head/>
                <body style={{backgroundColor: "#629ED9", height: "100%"}}>
                <div style={{background: "#FFF",
                    height: "100%",
                    borderRadius: 50}}>
                    {/* 👇 Here's the chakra-ui color script */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

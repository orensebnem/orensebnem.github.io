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
            <Html style={{scrollBehavior: "smooth"}}>
                <Head/>

                <body style={{
                    backgroundColor: "#629ED9",
                    marginTop: 10,
                    marginBottom: 10,
                    width: "88%",
                    margin: "auto"
                }}>
                <div
                    style={{
                        background: "#FFF",
                        borderRadius: 50,
                        height: "100%"
                    }}>
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

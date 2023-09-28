import "highlight.js/styles/docco.css";
import gherkin from "highlight.js/lib/languages/gherkin";
import hljs from "highlight.js";
// 1. Import the utilities
import {ChakraProvider, useColorMode} from "@chakra-ui/react";
import theme from "../data/themes/theme";
import type {AppProps} from 'next/app'
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/400.css';
import '@fontsource/caveat/400.css';
import '@fontsource/handlee/400.css';
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/500-italic.css'
import Script from "next/script";
import React from "react";

hljs.registerLanguage('gherkin', gherkin);

const MyApp = ({Component, pageProps}: AppProps) => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <ChakraProvider theme={theme}>
                {/*@ts-ignore*/}
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;

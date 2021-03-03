import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { getCssString } from "../stitches.config";


class HeadProduction extends Head {
    render() {
        const head = this.context.head;
        const styles = this.context.styles;
        const children = this.props.children;
        return (
            <head {...this.props}>
                {children}
                {head}
                {styles}
            </head>
        );
    }
}

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const styles = getCssString();
        console.log('styles: ', styles);

        try {
            const initialProps = await NextDocument.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles} <style>{styles}</style>
                    </>
                ),
            };
        } finally {
        }
    }

    render() {
        const isDev = process.env.NODE_ENV === "development";
        return (
            <Html>
                {isDev ? <Head /> : <HeadProduction />}
                <body>
                    <Main />
                    {isDev && <NextScript />}
                </body>
            </Html>
        );
    }
}

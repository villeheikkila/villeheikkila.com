import NextDocument, { DocumentContext } from "next/document";
import { applyGlobalCSS, getCssString } from "../stitches.config";

export default class Document extends NextDocument {

    static async getInitialProps(ctx: DocumentContext) {
        applyGlobalCSS()
        const styles = getCssString();

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
}

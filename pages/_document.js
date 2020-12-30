import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Testing project Next.js"/>
                    <meta name="keywords" content="Next, Next.js, React.js, JavaScript, Node.js, Scss"/>
                    <meta name="author" content="Serhii Havryliuk"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}


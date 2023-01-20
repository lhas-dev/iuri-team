import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="title"
            content="Iuri Team - Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Iuri Team - Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe"
          />
          <meta
            name="description"
            content="Treinos para adultos de todas as idades (iniciante, intermerdiário, avançado e competição). Nós temos treinos KIDS (infantil) em horários alternativos. Para crianças a partir de 5 anos de idade."
          />
          <meta
            property="og:description"
            content="Treinos para adultos de todas as idades (iniciante, intermerdiário, avançado e competição). Nós temos treinos KIDS (infantil) em horários alternativos. Para crianças a partir de 5 anos de idade."
          />
          <meta
            property="og:image"
            content="https://iuriteam.com.br/android-chrome-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

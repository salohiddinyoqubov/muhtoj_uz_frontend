import Head from 'next/head';
import Script from "next/script";

const NextHead = () => (
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta
            name="description"
            content="These template is suitable for charity, NGO, non-profit organization, donation, church or a fundraising website."
        />
        <meta
            name="keywords"
            content="charity, causes, donate, charity foundation, charity hub, charity theme, donations, non profit, fundraiser, social, ngo, non-profit, nonprofit, organization, volunteer"
        />
        <meta name="author" content="initTheme"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Charity & Donation HTML Template"/>
        <meta property="og:site_name" content="donate Website"/>
        <meta property="og:site_name" content="Charitfix"/>
        <meta property="og:url" content="www.Charitfix.com"/>
        <meta property="og:image" content="www.Charitfix.com"/>
        <meta
            property="og:description"
            content="These template is suitable for charity, NGO, donate, fundraiser, non-profit organization"
        />
        <meta name="twitter:title" content="Charity & Donation HTML Template"/>
        <meta
            name="twitter:description"
            content="These template is suitable for charity, NGO, donate, fundraiser, non-profit organization"
        />
        <meta name="twitter:image" content="www.Charitfix.com"/>
        <meta name="twitter:card" content="summary"/>
        <title>Muhtoj - insonlarga yordam beramiz.</title>
        <link
            rel="icon"
            type="image/x-icon"
            sizes="20x20"
            href="/assets/images/icon/favicon.png"
        />
        {/* Bootstrap */}
        <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/bootstrap-5.3.0.min.css"
        />
        <Script src="assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive"></Script>

        {/* fonts & icon */}
        <link rel="stylesheet" type="text/css" href="/assets/css/remixicon.css"/>
        {/* Plugin */}
        <link rel="stylesheet" type="text/css" href="/assets/css/plugin.css"/>
        {/* Main CSS */}
        <link rel="stylesheet" type="text/css" href="/assets/css/main-style.css"/>
        {/* RTL CSS::When Need RTL Uncomments File */}
        {/* <link rel="stylesheet" type="text/css" href="assets/css/rtl.css"> */}
    </Head>
);

export default NextHead;

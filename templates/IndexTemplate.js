import Head from 'next/head'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function IndexTemplate({ pageTitle, children }) {
    const fullPageTitle = `Amy Hamby's Page | ${pageTitle ? pageTitle : "Home"}`;

    return (
        <>
            <Head>
                <title>{fullPageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav className="d-none invisible" />
            <div className="container-fluid py-3 px-3 mx-0 mt-5 justify-content-start">
                <div className='main-content'>
                    {children ?? null}
                </div>
            </div>
            <Footer />
        </>
    );
}

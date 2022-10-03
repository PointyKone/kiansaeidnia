import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}: LayoutProps) => {

  return (
    <>
        <Head>
            <title>PointyKone</title>
            <link rel="shortcut icon" href="/icon-white.svg" type="image/x-icon" />
            <meta name="Kian Saeidnia" content="Personal Website For Kian Saeidnia"/>
            <meta name="description" content="Personal portfolio website for Kian (aka. PointyKone)." />
            <meta name="og:site_name" content="PointyKone" />
            <meta name="og:type" content="website" />
            <meta name="og:locale" content="en_AU" />
            <meta name="og:image" content="/icon-white.svg" />
        </Head>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    </>
  )
}

export default Layout
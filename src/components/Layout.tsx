import Head from "next/head"
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}: LayoutProps) => {
  return (
    <>
        <Head>
            <title>Kian Saeidnia</title>
            <meta name="Kian Saeidnia" content="Personal Website For Kian Saeidnia"/>
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
import Head from 'next/head';
import Footer from '@components/_app/Footer/Footer';
import Navbar from '@components/_app/Navbar/Navbar';
import { GlobalStateProvider } from '@state/GlobalStateProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '@lib/ga';
import './zglobals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <GlobalStateProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Subhash Mehndi Artist</title>
        <link rel="icon" href="/ganesha/ganesha-colored.svg" />
        <meta
          name="description"
          content="Subhash Gupta best mehandi artist in Chandigarh, Mohali, Zirakpur. Book for bridal, wedding, arabic, designer, western mehndi."
        ></meta>
      </Head>
      <div className="container">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </GlobalStateProvider>
  );
}

export default MyApp;

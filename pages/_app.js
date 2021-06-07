import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './zglobals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

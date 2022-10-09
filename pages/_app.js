import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

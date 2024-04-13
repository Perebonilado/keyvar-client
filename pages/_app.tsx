import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { reduxStore } from "@/config/redux-config";
import AppLoaderProvider from "../contexts/AppLoaderContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxStore}>
      <AppLoaderProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppLoaderProvider>
    </Provider>
  );
}

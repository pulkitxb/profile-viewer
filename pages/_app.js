import { Provider } from "@/components/ui/provider";

export default function App({ Component, pageProps }) {
  return <Provider forcedTheme="white"><Component {...pageProps} /></Provider>;
}

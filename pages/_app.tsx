import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../src/api";
import type { AppProps } from "next/app";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />;
      </Hydrate>
    </QueryClientProvider>
  );
}

import React, { useState } from "react";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../src/api";
import type { AppProps } from "next/app";
import "../styles/global.scss";

export const CountryContext = React.createContext({
  country: "GB",
  setCountry: null,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [country, setCountry] = useState<string>("GB");
  CountryContext.displayName = "CountryCode";

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CountryContext.Provider value={{ country, setCountry }}>
          <Component {...pageProps} />
        </CountryContext.Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

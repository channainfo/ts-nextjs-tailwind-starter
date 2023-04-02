import { EthosConnectProvider } from 'ethos-connect';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

// import { NETWORK } from '@/lib/constants';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;

  // const ethosConfiguration = {
  //   // When testing, use our staging link. When in production you may comment this line out.
  //   // walletAppUrl: 'https://sui-wallet-staging.onrender.com',
  //   apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
  //   preferredWallets: ['Ethos Wallet'],
  //   network: NETWORK,
  // };

  return (
    <EthosConnectProvider
      // ethosConfiguration={ethosConfiguration}
      dappName='EthosConnect Example App'
      connectMessage='Your connect message goes here!'
    >
      <Component {...pageProps} />
    </EthosConnectProvider>
  );
}

export default MyApp;

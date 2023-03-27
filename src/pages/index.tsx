import { ConnectButton, useWallet, WalletProvider } from '@suiet/wallet-kit';
import * as React from 'react';

import '@suiet/wallet-kit/style.css';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const wallet = useWallet();
  // const { configuredWallets, detectedWallets } = useWallet()

  return (
    <WalletProvider autoConnect={false}>
      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main>
          <section className='bg-white'>
            {wallet?.connected ? (
              <div>You are connected: {wallet?.address}</div>
            ) : (
              <ConnectButton
              // The BaseError instance has properties like {code, message, details}
              // for developers to further customize their error handling.
              >
                {' '}
                Connect Wallet
              </ConnectButton>
            )}
          </section>
        </main>
      </Layout>
    </WalletProvider>
  );
}

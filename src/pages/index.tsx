import { ethos, SignInButton } from 'ethos-connect';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const { status, wallet } = ethos.useWallet();

  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white p-4'>
          <div>
            Status: {status}, Wallet address: {wallet?.address}
          </div>
          <hr />
          <SignInButton> Connect Wallet </SignInButton>
        </section>
      </main>
    </Layout>
  );
}

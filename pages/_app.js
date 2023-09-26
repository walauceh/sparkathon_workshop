import React from 'react'
import '@/styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'

import { WalletConnectProvider } from '@/components/WalletConnectProvider'

export default function App({ Component, pageProps }) {
  return <WalletConnectProvider>
    <Component {...pageProps} />
  </WalletConnectProvider>
}

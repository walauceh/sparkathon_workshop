import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

export const WalletConnectProvider = ({ children }) => {
    
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet){
        return "https://solana-mainnet.g.alchemy.com/v2/KPO6GQWdZB7fJBsdzfLpfeLcRGR9Ot63";
    }
    return clusterApiUrl(network);
    }, [network]);

    const wallets = useMemo(() => [new PhantomWalletAdapter], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
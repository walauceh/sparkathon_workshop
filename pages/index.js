import { Inter } from 'next/font/google'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWalletTokenBalance } from '@lndgalante/solutils';
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import dynamic from 'next/dynamic'
import Button from '@/components/Button'
import { PublicKey } from '@solana/web3.js'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

function Home() {

  // solana hooks
  const { publicKey } = useWallet();
  const { connection } = useConnection();
 
  // solutils hooks
  const { getWalletTokenBalance, result, status, error } = useWalletTokenBalance(publicKey, connection);
 
  // handlers
  function handleWalletBalanceRequest() {
    getWalletTokenBalance('SOL');
  }

  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Menu&nbsp;
            <div class="dropdown">
            <button onClick={myFunction} class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
            <Link href="/page1">Page 1</Link>
            <Link href="/page2">Page 2</Link>
            </div>
            </div>            
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <WalletMultiButton />
        </div>
      </div>
      

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <hi className='font-bold'>This will be a demo for a workshop</hi>
        {PublicKey ? <div className='place-items-center grid mt-10'>
          <Button onClick={handleWalletBalanceRequest}>Request wallet balance</Button>
          {status === 'idle' ? <p>Haven&apos;t requested any SOL balance yet</p> : null}
          {status === 'loading' ? <p>Requesting your SOL balance tokens</p> : null}
          {status === 'success' ? <p>We successfully got your balance: {result} SOL</p> : null}
          {status === 'error' ? <p>{error}</p> : null}
        </div> :null}
      </div>

      
    </main>
  )
}

export default dynamic(() => Promise.resolve(Home), {ssr: false});
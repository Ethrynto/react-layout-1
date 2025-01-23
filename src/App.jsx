// import { useState } from 'react'
import Header from "./components/Header"
import Title from "./components/Title"
import WalletList from "./components/lists/WalletList"
import PrimaryButton from "./components/buttons/PrimaryButton"
import BorderButton from "./components/buttons/BorderButton"
import gamerPicture from "/pictures/gamer.png"

import alphawalletLogo from "/icons/alphawallet.svg"
import binanceLogo from "/icons/binance.svg"
import coinbaseLogo from "/icons/coinbase.svg"
import enjinLogo from "/icons/enjin.svg"
import metamaskLogo from "/icons/metamask.svg"
import trustLogo from "/icons/trust.svg"
import './App.css'

const wallets = [
  { image: alphawalletLogo, text: "Alpha Wallet" },
  { image: binanceLogo, text: "Binance Wallet" },
  { image: coinbaseLogo, text: "Coinbase" },
  { image: enjinLogo, text: "Enjin Wallet" },
  { image: metamaskLogo, text: "Metamask" },
  { image: trustLogo, text: "Trust Wallet" },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <div className="container">

        {/* Info Block */}
        <section className="info-block">
          {/* Block Content #1 */}
          <div className="content-block">
            <h1 className="title-text">
            Explore The Best
            </h1>
            <h2 className="subtitle-text">
              NTF World
            </h2>
            <p className="description-text">
              Collect And Sell Your Extraordinary Artwork
            </p>
            <div className="explore-btns">
              <PrimaryButton>Explore </PrimaryButton>
              <BorderButton>Upload</BorderButton>
            </div>
          </div>

          {/* Block Content #2 */}
          <div className="content-block">
            <img src={gamerPicture} alt="" />
          </div>

        </section>

        <section className="additional-block">
            <Title 
              title="Wallets We Support" 
              subtitle="Wallet" >
            </Title>
            <WalletList items={wallets}></WalletList>
        </section>

      </div>
    </main>
      

    </>
  )
}

export default App

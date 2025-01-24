// import { useState } from 'react'

/** Components */
import Header from "./components/Header"
import Title from "./components/Title"
import WalletList from "./components/lists/WalletList"
import AuctionList from "./components/lists/AuctionList"
import StepList from "./components/lists/StepList"
import PrimaryButton from "./components/buttons/PrimaryButton"
import BorderButton from "./components/buttons/BorderButton"

import img1 from "/pictures/img1.png"
import img2 from "/pictures/img2.png"
import img3 from "/pictures/img3.png"
import img4 from "/pictures/img4.png"
// import img5 from "/pictures/img5.png"
// import img6 from "/pictures/img6.png"
import gamerPicture from "/pictures/gamer.png"

/** The Wallets logos */
import alphawalletLogo from "/icons/alphawallet.svg"
import binanceLogo from "/icons/binance.svg"
import coinbaseLogo from "/icons/coinbase.svg"
import enjinLogo from "/icons/enjin.svg"
import metamaskLogo from "/icons/metamask.svg"
import trustLogo from "/icons/trust.svg"

/** App component styles */
import './App.css'

const wallets = [
  { image: alphawalletLogo, text: "Alpha Wallet" },
  { image: binanceLogo, text: "Binance Wallet" },
  { image: coinbaseLogo, text: "Coinbase" },
  { image: enjinLogo, text: "Enjin Wallet" },
  { image: metamaskLogo, text: "Metamask" },
  { image: trustLogo, text: "Trust Wallet" },
];

const auctions = [
  { image: img1, text: "3D Superhero" },
  { image: img2, text: "3D Wall Painting" },
  { image: img3, text: "Alien Watching Sun" },
  { image: img4, text: "Ninja Has Power" },
  // { image: img5, text: "3D Superhero" },
  // { image: img6, text: "3D Superhero" },
];

const stepsList = [
  { 
    image: "/icons/wallet.svg", 
    title: "Setup your wallet",
    description: "Once you've set up your wallet of choise, connect it to OpenSea by clicking the wallet icon in the top right corner"
   },
   { 
    image: "/icons/box.svg", 
    title: "Create your collection",
    description: "Set up your collection, add social links, a description, profile & banner images, and set a secondary sales fee"
   },
   { 
    image: "/icons/image.svg", 
    title: "Add your NFT's",
    description: "Upload your work add a title and description and cutomize your NFT's with properties, stats and unlickable content"
   },
   { 
    image: "/icons/handshake.svg", 
    title: "List them for sale",
    description: "Choose between auctions. Price listings. Your Choose how want to sell your NFT's, & we help you!"
   },
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
              <PrimaryButton>Explore →</PrimaryButton>
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

        <section className="additional-block">
            <Title 
              title="Trending Auctions" 
              subtitle="Live Auction" >
            </Title>
            <AuctionList items={auctions}></AuctionList>
        </section>

        <section className="additional-block">
            <Title 
              title="Easy Steps To Create And Sell Your NFT" 
              subtitle="Steps For Sell & Buy" >
            </Title>
            <StepList items={stepsList}></StepList>
        </section>

      </div>
    </main>
      

    </>
  )
}

export default App

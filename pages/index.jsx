import TopCollectors from "../src/components/collectors/TopCollectors";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import dataTrending from "../data/trending.json"
import dataUsers from "../data/users.json"
import dataNfts from "../data/nfts.json"
import { useState, useEffect } from "react";


export default function Index() {

  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(async() => {
    const result = await fetch(process.env.apiUrl + '/featured');
    const featuredData = await result.json()
    console.log(featuredData);
    setFeaturedCards(featuredData.nfts);
  }, []);

  const [trendingCards, setTrendingCards] = useState([]);
  useEffect(() => {
    setTrendingCards(dataTrending);
  }, []);

  const [userCards, setUserCards] = useState([]);
  useEffect(() => {
    setUserCards(dataUsers);
  }, []);

  const [nftCards, setNftCards] = useState([]);
  useEffect(() => {
    setNftCards(dataNfts);
  }, []);

  const howItemsArr = [
    {
      title: "Digital Currency",
      description: "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"
    },
    {
      title: "Crypto Wallet",
      description: "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain."
    },
    {
      title: "BUM.",
      description: "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. "
    }
  ]

  const bidsArr = [
    {
      "user": {
        "avatar": "/images/avatar.png",
        "name": "Cupcat NFT",
        "verified": true
      },
      "amount": 1,
      "date": "2022-01-22T08:29:19.930Z"
    },
    {
      "user": {
        "avatar": "/images/avatar.png",
        "name": "Cupcat NFT",
        "verified": false
      },
      "amount": 3,
      "date": "2022-02-12T01:29:19.930Z"
    },
    {
      "user": {
        "avatar": "/images/avatar.png",
        "name": "Cupcat NFT",
        "verified": false
      },
      "amount": 3,
      "date": "2022-02-12T01:29:19.930Z"
    },
    {
      "user": {
        "avatar": "/images/avatar.png",
        "name": "Cupcat NFT",
        "verified": false
      },
      "amount": 3,
      "date": "2022-02-12T01:29:19.930Z"
    },
    {
      "user": {
        "avatar": "/images/avatar.png",
        "name": "Cupcat NFT",
        "verified": false
      },
      "amount": 3,
      "date": "2022-02-12T01:29:19.930Z"
    }
  ]

  return (
    <div>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards} />
      <TopCollectors collectors={userCards} />
      <How title="HOW IT WORKS"
        description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={howItemsArr} />
      <Auctions cards={nftCards} />
      <Footer />
    </div>
  );
}

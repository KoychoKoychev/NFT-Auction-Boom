import TopCollectors from "../src/components/collectors/TopCollectors";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import dataFeatured from "../data/featured.json"
import dataTrending from "../data/trending.json"
import dataUsers from "../data/users.json"
import dataNfts from "../data/nfts.json"
import { useState, useEffect } from "react";
import Hero from "../src/components/hero/Hero";
import Description from "../src/components/description/Description";
import ProfileCollection from "../src/components/profile/ProfileCollection";

export default function Index() {

  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataFeatured);
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
    {title:"Digital Currency",
    description:"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"},
    {title:"Crypto Wallet",
    description:"A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain."},
    {title:"BUM.",
    description:"Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. "}
  ]

  const bidsArr = [
    {
      "user":{
        "avatar":"/images/avatar.png",
        "name":"Cupcat NFT",
        "verified":true
      },
      "amount":1,
      "date":"2022-01-22T08:29:19.930Z"
    },
    {
      "user":{
        "avatar":"/images/avatar.png",
        "name":"Cupcat NFT",
        "verified":false
      },
      "amount":3,
      "date":"2022-02-12T01:29:19.930Z"
    },
    {
      "user":{
        "avatar":"/images/avatar.png",
        "name":"Cupcat NFT",
        "verified":false
      },
      "amount":3,
      "date":"2022-02-12T01:29:19.930Z"
    },
    {
      "user":{
        "avatar":"/images/avatar.png",
        "name":"Cupcat NFT",
        "verified":false
      },
      "amount":3,
      "date":"2022-02-12T01:29:19.930Z"
    },
    {
      "user":{
        "avatar":"/images/avatar.png",
        "name":"Cupcat NFT",
        "verified":false
      },
      "amount":3,
      "date":"2022-02-12T01:29:19.930Z"
    }
  ]

  const filterObj = {
    sort: [
      { label: "Name (Ascending)", value: 1 },
      { label: "Name (Descending)", value: 2 },
    ],
    price: [
      { label: "0.3 - 0.5 ETH", value: 3 },
      { label: "0.5 - 2 ETH", value: 4, },
      { label: "2- 3 ETH", value: 5, },
    ],
  }

  const userObj = {
    name:'fredrika_a',
    info: 'Lorem Ipsum',
    avatar: '/images/avatar.png', 
    verified: true
  }

  return (
    <div>
      {/* <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards} />
      <TopCollectors collectors={userCards} />
      <How title="How it works"
        description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={howItemsArr} />
      <Auctions cards={nftCards} />
      <Footer /> */}
      <ProfileCollection filter={filterObj} user={userObj} items={nftCards}/>
    </div>
  );
}

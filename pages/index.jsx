import TopCollectors from "../src/components/collectors/TopCollectors";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import { useState, useEffect } from "react";


export default function Index() {

  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/featured');
    const featuredData = await result.json();
    setFeaturedCards(featuredData.nfts);
  }, []);

  

  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/trending');
    const featuredData = await result.json();
    setTrendingItems(featuredData.nfts);
    setTrendingFilters(featuredData.filters.sort);
  }, []);

  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setcollectorFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/top-collectors');
    const userData = await result.json();
    setCollectors(userData.users.sort((a,b)=>b.nftCount - a.nftCount));
    setcollectorFilters(userData.filters.sort);
  }, []);

  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters ] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/live-auctions');
    const auctionData = await result.json();
    setAuctions(auctionData.nfts);
    setAuctionFilters(auctionData.filters.price)
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

  return (
    <div>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} filters={trendingFilters} />
      <TopCollectors collectors={collectors} filters={collectorFilters}/>
      <How title="HOW IT WORKS"
        description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={howItemsArr} />
      <Auctions cards={auctions} filters={auctionFilters} />
      <Footer />
    </div>
  );
}

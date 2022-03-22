import TopCollectors from "../src/components/collectors/TopCollectors";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import { useState, useEffect } from "react";


export default function Index() {

  //FEATURED CARDS

  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/featured');
    const featuredData = await result.json();
    setFeaturedCards(featuredData.nfts);
  }, []);

  //TRENDING CARDS

  const monthInMilliseconds = 2.6298e+9;

  const trendingFilterFunctions = {
    1: function (el) {
      return monthInMilliseconds > Date.now() - new Date(el.created_at);
    },
    2: function (el) {
      return monthInMilliseconds * 12 > Date.now() - new Date(el.created_at);
    }
  }

  const [trendingFilterValue, setTrendingFilterValue] = useState('3'); //default value set to all items
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/trending');
    const featuredData = await result.json();
    setTrendingFilters(featuredData.filters.sort);
    if (trendingFilterValue && trendingFilterValue < 3) {
      setTrendingItems(featuredData.nfts.filter(trendingFilterFunctions[trendingFilterValue]));
    } else {
      setTrendingItems(featuredData.nfts);
    }
  }, [trendingFilterValue]);

  function onTrendingChange(ev) {
    setTrendingFilterValue(ev.target.value);
  }

  //TOP COLLECTOR CARDS

  const collectorSortingFunctions = {
    "asc": function (a, b) {
      return a.nftCount - b.nftCount;
    },
    "desc": function (a, b) {
      return b.nftCount - a.nftCount;
    }
  }

  const [collectorSortValue, setCollectorSortValue] = useState('asc');
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setcollectorFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/top-collectors');
    const userData = await result.json();
    setcollectorFilters(userData.filters.sort);
    if (collectorSortValue) {
      setCollectors(userData.users.sort(collectorSortingFunctions[collectorSortValue]));
    } else {
      setCollectors(userData.users)
    }
  }, [collectorSortValue]);

  function onCollectorChange(ev) {
    setCollectorSortValue(ev.target.value);
  }

  //LIVE AUCTION CARDS

  const auctionFilterFunctions = {
    1: function (el) {
      return el.price < 0.1;
    },
    2: function (el) {
      return el.price > 0.1 && el.price < 0.5;
    },
    3: function (el) {
      return el.price > 0.5;
    }
  }

  const [auctionFilterValue, setAuctionFilterValue] = useState(4); //default value set to all items
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + '/live-auctions');
    const auctionData = await result.json();
    setAuctionFilters(auctionData.filters.price)
    if (auctionFilterValue < 4) {
      setAuctions(auctionData.nfts.filter(auctionFilterFunctions[auctionFilterValue]));
    } else {
      setAuctions(auctionData.nfts);
    }
  }, [auctionFilterValue]);

  function onAuctionChange(ev) {
    setAuctionFilterValue(ev.target.value);
  }

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
      <Trending cards={trendingItems} filters={trendingFilters} onChange={onTrendingChange} filterValue={trendingFilterValue} />
      <TopCollectors collectors={collectors} filters={collectorFilters} onChange={onCollectorChange} sortValue={collectorSortValue} />
      <How title="HOW IT WORKS"
        description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={howItemsArr} />
      <Auctions cards={auctions} filters={auctionFilters} onChange={onAuctionChange} filterValue={auctionFilterValue} />
      <Footer />
    </div>
  );
}

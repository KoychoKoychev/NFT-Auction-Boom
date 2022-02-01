import Example from "../src/components/example/Example";
import Auctions from "../src/components/auctions/Auctions";


export default function Index() {
  const cardArr = [{
    name: "Ivy",
    user: {
      avatarUrl: "images/avatar.png",
      verified: true
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 10000
  },
  {
    name: "Aongus",
    user: {
      avatarUrl: "images/avatar.png",
      verified: true
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 9000
  },
  {
    name: "Conor",
    user: {
      avatarUrl: "images/avatar.png",
      verified: true
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 12000
  },
  {
    name: "Liam",
    user: {
      avatarUrl: "images/avatar.png",
      verified: true
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 69000
  },
  ]

  return <Auctions cards={cardArr} />;
}

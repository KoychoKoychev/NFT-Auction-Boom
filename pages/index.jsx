import Example from "../src/components/example/Example";
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";


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

  const itemsArr=[
    {title:"Digital Currency",description:"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"},
    {title:"Digital Currency",description:"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"},
    {title:"Digital Currency",description:"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"},
  ]

  return <How title="HOW IT WORKS" description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM." items={itemsArr} link="https://mui.com/components/buttons/"/>;
}

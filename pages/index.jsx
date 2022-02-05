import Example from "../src/components/example/Example";
import CollectorColumns from "../src/components/collectors/CollectorColumn";


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

  const imageArr=[
    {
      image:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
      title: "Coffee",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
      title: "Hats",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
      title: "Honey",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
      title: "Basketball",
      href: "/about",
    }
  ]

  const userArr=[
    {
      name: "terika77",
      nftsCount: 134,
      avatar: "/images/avatar.png",
      verified: true,
      id: 1
    },
    {
      name: "brendan_1",
      nftsCount: 98,
      avatar: "/images/avatar.png",
      verified: false,
      id: 2
    },
    {
      name: "damiann",
      nftsCount: 97,
      avatar: "/images/avatar.png",
      verified: true,
      id: 3
    },
  ]

  return <CollectorColumns items={userArr}/>;
}

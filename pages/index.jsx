import Example from "../src/components/example/Example";
import Trending from "../src/components/trending/Trending";
import Card from "../src/components/card/Card";




export default function Index() {
  const card = {
       name:"Ivy",
       user:{
          avatarUrl:"images/avatar.png",
          verified:true
       },
       mediaUrl:"images/nft.jpg",
       price:1,
       currency:"ETH",
       timeLeft: 10000
    }
  return <Card name="Ivy" 
  user={{avatarUrl:"images/avatar.png",verified:true}} 
  mediaUrl="images/nft.jpg" 
  likes={1000}
  price={1} 
  currency="ETH"
  timeLeft={3000}
  />;
}

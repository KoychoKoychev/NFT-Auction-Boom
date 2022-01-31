import Avatar from "../src/components/avatar/Avatar";
import Example from "../src/components/example/Example";
import Card from "../src/components/card/Card";


export default function Index() {
  return <Card 
  user={{avatar:{url:"/images/avatar.png"},verified:true}} 
  mediaUrl="/images/nft.jpg" 
  name="Clock" 
  price="~12.2" 
  currency="ETH"
  likes={1100}/>;
}

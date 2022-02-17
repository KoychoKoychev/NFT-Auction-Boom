import { useRouter } from "next/dist/client/router";

import { useState, useEffect } from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";

import dataNfts from "/data/nfts.json"


export default function Product() {

    const router = useRouter();
    const { id } = router.query

    const [nftCards, setNftCards] = useState([]);
    const [currNft, setCurrNft] = useState({});
    const [itemLoaded, setItemLoaded] = useState(false);

    useEffect(() => {
        setNftCards(dataNfts);
    }, [id]);
    
    useEffect(() => {
        if(nftCards.length > 0 && id){
            const nft = nftCards.find(el => el.id == id)
            setCurrNft(nft);
            setItemLoaded(true);
        }
    },[id,nftCards])

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
            {itemLoaded ?
            <ProductContainer
                name={currNft.name}
                source={currNft.source}
                owner={{ username: currNft.owner.username, verified: currNft.owner.confirmed, avatar: currNft.owner.avatar}}
                price={currNft.price}
                currency={currNft.currency}
                likes={currNft.likes}
                auction_end={currNft.auction_end}
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, quis ullamcorper felis. Maecenas et euismod nunc. Donec ex felis, scelerisque eu elementum sit amet, tincidunt vel nisi. In ullamcorper efficitur purus, vel fringilla felis tristique non. Etiam suscipit leo et augue euismod tristique. Quisque facilisis dui eget."
                bids={[]}
            />:null}
            <Footer />
        </div>
    )
}
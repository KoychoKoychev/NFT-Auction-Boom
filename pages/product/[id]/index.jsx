import { useRouter } from "next/dist/client/router";

import { useState, useEffect } from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";

export default function Product() {

    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct ] = useState(null);
    
    useEffect(async() => {
        if(id){
            const result = await fetch(process.env.apiUrl + `/nfts/${id}`);
            const productData = await result.json();
            setProduct(productData);
        }
    },[id])


    return (
        <div>
            <Header />
            {product!=null?
            <ProductContainer
                name={product.name}
                source={product.source}
                owner={{ username: product.owner.username, verified: product.owner.confirmed, avatar: product.owner.avatar, id:product.owner.id}}
                price={product.price}
                currency={product.currency}
                likes={product.likes}
                auction_end={product.auction_end}
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra eros, quis ullamcorper felis. Maecenas et euismod nunc. Donec ex felis, scelerisque eu elementum sit amet, tincidunt vel nisi. In ullamcorper efficitur purus, vel fringilla felis tristique non. Etiam suscipit leo et augue euismod tristique. Quisque facilisis dui eget."
                bids={product.bids}
            />:null}
            <Footer />
        </div>
    )
}
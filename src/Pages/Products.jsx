import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Shoes",
      category: "SHOES",
      price: 599,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/2/s/8-sport-24503-8-nobelite-white-black-resized-2-original-imahf3x7e8yanbyy.jpeg?q=70"
    },
    {
      id: 2,
      name: "Shoes",
      category: "SHOES",
      price: 599,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/m/n/8-modern-sports-sky-blue-8-xk-hampion-sky-blue-original-imahh85fhhfq9gtv.jpeg?q=70"
    },
    {
      id: 3,
      name: "Shoes",
      category: "SHOES",
      price: 599,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/a/w/7-art960-working-xtoon-coffee-original-imahcff3jgy856mn.jpeg?q=70"
    },
    {
      id: 4,
      name: "Shoes",
      category: "SHOES",
      price: 599,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/u/h/o/6-ld5307-6-layasa-z-black-original-imahkj6vgn3yheaj.jpeg?q=70"
    },
    {
      id: 5,
      name: "Watch",
      category: "WATCH",
      price: 399,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/5/v/1-spm01-wristy-men-original-imahh4qadv7xgh6j.jpeg?q=70"
    },
    {
      id: 6,
      name: "Watch",
      category: "WATCH",
      price: 399,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/t/w/1-chronograph-private-label-watch-manufacturers-lb16-fanish-original-imahhybfyetjqtyp.jpeg?q=70"
    },
    {
      id: 7,
      name: "Watch",
      category: "WATCH",
      price: 399,
      quantity: 1,
      image: " https://rukminim2.flixcart.com/image/612/612/xif0q/watch/l/d/x/1-arabic-black-lux-01-arabicstyle-men-original-imahh92mygsbfg55.jpeg?q=70"
    },
    {
      id: 8,
      name: "Watch",
      category: "WATCH",
      price: 399,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/j/8/m/1-b-10-watch-grey-irha-men-original-imahk9ms8qx9wux9.jpeg?q=70"
    },
    {
      id: 9,
      name: "T-Shirt",
      category: "T-SHIRT",
      price: 459,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/n/2/m-demon-slayer-rengoku-oversized-t-shirt-annnackel-original-imahjv7tpruwjd8m.jpeg?q=70"
    },
    {
      id: 10,
      name: "T-Shirt",
      category: "T-SHIRT",
      price: 459,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/t/j/s-anime-tshirt-for-men-naqf-original-imahke2k8zbfzxwd.jpeg?q=70"
    },
    {
      id: 11,
      name: "T-Shirt",
      category: "T-SHIRT",
      price: 459,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/b/o/s-tgr-aahna-fashion-original-imah8mzmueuthbwm.jpeg?q=70"
    },
    {
      id: 12,
      name: "T-Shirt",
      category: "T-SHIRT",
      price: 459,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/j/0/xl-m9-madilyn-original-imahhcycmsg7pwpk.jpeg?q=70"
    },
    {
      id: 13,
      name: "Wallet",
      category: "WALLET",
      price: 299,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/x/u/w/men-leather-trendy-rfid-brown-wallet-1-11-5-eg-6007-10-wallet-g-original-imahjxez9ugskrs7.jpeg?q=70"
    },
    {
      id: 14,
      name: "Wallet",
      category: "WALLET",
      price: 299,
      quantity: 1,
      image:  "https://rukminim2.flixcart.com/image/392/360/xif0q/wallet-card-wallet/i/r/n/loine-grey-wallet-for-men-1-22-0-a-283-grey-5-wallet-matin-life-original-imahh6ajgwtankgr.jpeg?q=60"
    },
    {
      id: 15,
      name: "Wallet",
      category: "WALLET",
      price: 299,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/240/296/xif0q/wallet-card-wallet/8/w/m/genuine-leather-rfid-unisex-credit-card-holder-15-coffe-wallet-original-imahfy8wgpa3wkbx.jpeg?q=60"
    },
    {
      id: 16,
      name: "Wallet",
      category: "WALLET",
      price: 299,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/d/d/o/top-quality-genuine-leather-brown-wallet-for-men-boys-purse-1-11-original-imahgfbgzk4egppk.jpeg?q=70"
    },
    {
      id: 17,
      name: "Helmet",
      category: "HELMET",
      price: 899,
      quantity: 1,
      image: " https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/v/a/r/fighter-hanuman-ji-hd-graphics-with-anti-uv-pc-visor-abs-original-imahf3zq38npu4bx.jpeg?q=70"
    },
    {
      id: 18,
      name: "Helmet",
      category: "HELMET",
      price: 899,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/e/g/5/crekey-1-1-36-full-face-skullcap-original-imahed47jhusgs3a.jpeg?q=70"
    },
    {
      id: 19,
      name: "Helmet",
      category: "HELMET",
      price: 899,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/c/v/f/-original-imahbxkhpx9eh9hy.jpeg?q=70"
    },
    {
      id: 20,
      name: "Helmet",
      category: "HELMET",
      price: 899,
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-helmet/d/p/h/full-face-bike-helmet-isi-approved-stylish-helmet-with-black-original-imahknyxezhq6g2s.jpeg?q=70"
    },

  ];


  
  const [category, setCategory] = useState("ALL");

 const filteredProducts =
    category === "ALL"
      ? products
      : products.filter((item) => item.category === category);
  return (
    <div>
      <h1>Products</h1>
       <ul className="CATEGORIES">
        <li onClick={() => setCategory("ALL")}>ALL</li>
        <li onClick={() => setCategory("SHOES")}>SHOES</li>
        <li onClick={() => setCategory("WATCH")}>WATCH</li>
        <li onClick={() => setCategory("T-SHIRT")}>T-SHIRT</li>
        <li onClick={() => setCategory("WALLET")}>WALLET</li>
        <li onClick={() => setCategory("HELMET")}>HELMET</li>
      </ul>

      
      <div className="row mt-3 mb-3">
        {filteredProducts.map((item) => (
          <div className="col-3 mb-3" key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} width={200} height={200} alt="" />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>Premium product</p>
                <h6>₹{item.price}</h6>
                <button className="btn btn-primary" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
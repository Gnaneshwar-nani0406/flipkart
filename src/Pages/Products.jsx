import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Sports Running Shoes",
    category: "SHOES",
    price: 599,
    originalPrice: 1199,
    rating: 4.5,
    reviews: 240,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/2/s/8-sport-24503-8-nobelite-white-black-resized-2-original-imahf3x7e8yanbyy.jpeg?q=70"
  },
  {
    id: 2,
    name: "Lightweight Casual Shoes",
    category: "SHOES",
    price: 599,
    originalPrice: 999,
    rating: 4.2,
    reviews: 178,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/m/n/8-modern-sports-sky-blue-8-xk-hampion-sky-blue-original-imahh85fhhfq9gtv.jpeg?q=70"
  },
  {
    id: 3,
    name: "Brown Outdoor Shoes",
    category: "SHOES",
    price: 599,
    originalPrice: 1099,
    rating: 4.1,
    reviews: 96,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/a/w/7-art960-working-xtoon-coffee-original-imahcff3jgy856mn.jpeg?q=70"
  },
  {
    id: 4,
    name: "Black Walking Shoes",
    category: "SHOES",
    price: 599,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 302,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/u/h/o/6-ld5307-6-layasa-z-black-original-imahkj6vgn3yheaj.jpeg?q=70"
  },
  {
    id: 5,
    name: "Analog Wrist Watch",
    category: "WATCH",
    price: 399,
    originalPrice: 799,
    rating: 4.5,
    reviews: 221,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/5/v/1-spm01-wristy-men-original-imahh4qadv7xgh6j.jpeg?q=70"
  },
  {
    id: 6,
    name: "Chronograph Style Watch",
    category: "WATCH",
    price: 399,
    originalPrice: 899,
    rating: 4.0,
    reviews: 143,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/t/w/1-chronograph-private-label-watch-manufacturers-lb16-fanish-original-imahhybfyetjqtyp.jpeg?q=70"
  },
  {
    id: 7,
    name: "Arabic Dial Watch",
    category: "WATCH",
    price: 399,
    originalPrice: 749,
    rating: 4.2,
    reviews: 118,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/l/d/x/1-arabic-black-lux-01-arabicstyle-men-original-imahh92mygsbfg55.jpeg?q=70"
  },
  {
    id: 8,
    name: "Grey Casual Watch",
    category: "WATCH",
    price: 399,
    originalPrice: 849,
    rating: 4.3,
    reviews: 180,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/j/8/m/1-b-10-watch-grey-irha-men-original-imahk9ms8qx9wux9.jpeg?q=70"
  },
  {
    id: 9,
    name: "Printed Cotton T-Shirt",
    category: "T-SHIRT",
    price: 459,
    originalPrice: 999,
    rating: 4.6,
    reviews: 420,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/n/2/m-demon-slayer-rengoku-oversized-t-shirt-annnackel-original-imahjv7tpruwjd8m.jpeg?q=70"
  },
  {
    id: 10,
    name: "Anime Graphic T-Shirt",
    category: "T-SHIRT",
    price: 459,
    originalPrice: 899,
    rating: 4.2,
    reviews: 210,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/t/j/s-anime-tshirt-for-men-naqf-original-imahke2k8zbfzxwd.jpeg?q=70"
  },
  {
    id: 11,
    name: "Solid Casual T-Shirt",
    category: "T-SHIRT",
    price: 459,
    originalPrice: 799,
    rating: 4.1,
    reviews: 174,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/b/o/s-tgr-aahna-fashion-original-imah8mzmueuthbwm.jpeg?q=70"
  },
  {
    id: 12,
    name: "Regular Fit T-Shirt",
    category: "T-SHIRT",
    price: 459,
    originalPrice: 949,
    rating: 4.3,
    reviews: 198,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/j/0/xl-m9-madilyn-original-imahhcycmsg7pwpk.jpeg?q=70"
  },
  {
    id: 13,
    name: "Brown Leather Wallet",
    category: "WALLET",
    price: 299,
    originalPrice: 599,
    rating: 4.4,
    reviews: 158,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/x/u/w/men-leather-trendy-rfid-brown-wallet-1-11-5-eg-6007-10-wallet-g-original-imahjxez9ugskrs7.jpeg?q=70"
  },
  {
    id: 14,
    name: "Grey Bi-Fold Wallet",
    category: "WALLET",
    price: 299,
    originalPrice: 549,
    rating: 4.0,
    reviews: 82,
    image: "https://rukminim2.flixcart.com/image/392/360/xif0q/wallet-card-wallet/i/r/n/loine-grey-wallet-for-men-1-22-0-a-283-grey-5-wallet-matin-life-original-imahh6ajgwtankgr.jpeg?q=60"
  },
  {
    id: 15,
    name: "RFID Card Holder",
    category: "WALLET",
    price: 299,
    originalPrice: 649,
    rating: 4.2,
    reviews: 130,
    image: "https://rukminim2.flixcart.com/image/240/296/xif0q/wallet-card-wallet/8/w/m/genuine-leather-rfid-unisex-credit-card-holder-15-coffe-wallet-original-imahfy8wgpa3wkbx.jpeg?q=60"
  },
  {
    id: 16,
    name: "Classic Brown Wallet",
    category: "WALLET",
    price: 299,
    originalPrice: 699,
    rating: 4.1,
    reviews: 104,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/d/d/o/top-quality-genuine-leather-brown-wallet-for-men-boys-purse-1-11-original-imahgfbgzk4egppk.jpeg?q=70"
  },
  {
    id: 17,
    name: "Full Face Safety Helmet",
    category: "HELMET",
    price: 899,
    originalPrice: 1799,
    rating: 4.5,
    reviews: 178,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/v/a/r/fighter-hanuman-ji-hd-graphics-with-anti-uv-pc-visor-abs-original-imahf3zq38npu4bx.jpeg?q=70"
  },
  {
    id: 18,
    name: "Matte Full Face Helmet",
    category: "HELMET",
    price: 899,
    originalPrice: 1699,
    rating: 4.1,
    reviews: 94,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/e/g/5/crekey-1-1-36-full-face-skullcap-original-imahed47jhusgs3a.jpeg?q=70"
  },
  {
    id: 19,
    name: "ISI Approved Helmet",
    category: "HELMET",
    price: 899,
    originalPrice: 1499,
    rating: 4.2,
    reviews: 121,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/c/v/f/-original-imahbxkhpx9eh9hy.jpeg?q=70"
  },
  {
    id: 20,
    name: "Black Riding Helmet",
    category: "HELMET",
    price: 899,
    originalPrice: 1599,
    rating: 4.3,
    reviews: 167,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-helmet/d/p/h/full-face-bike-helmet-isi-approved-stylish-helmet-with-black-original-imahknyxezhq6g2s.jpeg?q=70"
  }
];

const categories = ["ALL", "SHOES", "WATCH", "T-SHIRT", "WALLET", "HELMET"];

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setFilter(location.state.selectedCategory);
    }
  }, [location]);

  const filteredProducts = filter === "ALL" ? products : products.filter((item) => item.category === filter);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 }
    });
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="products-container">
      <header className="page-header">
        <div className="page-container">
          <h1>Products</h1>
          <p>Browse practical products with clear prices and simple filtering.</p>
        </div>
      </header>

      <main className="page-container">
        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>Categories</h2>
              <p>{filteredProducts.length} products shown</p>
            </div>
          </div>
          <div className="filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-button ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat === "ALL" ? "All" : cat}
              </button>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

              return (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <span className="product-badge">{discount}% off</span>
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-title">{product.name}</h3>
                    <div className="price-line">
                      <span className="price">Rs. {product.price}</span>
                      <span className="original-price">Rs. {product.originalPrice}</span>
                    </div>
                    <div className="rating-line">
                      <span className="rating-chip">{product.rating}</span>
                      {product.reviews} reviews
                    </div>
                    <button className="add-cart-button" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;

const { Product } = require("../models");

const productData = [
  {
    product_name: "ROLEX DAYTONA WITH BLACK CERACHROM BEZEL",
    price: 399.99,
    stock: 14,
    category_id: 1,
    img: "https://www.jaztime.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/r/o/rolex-cosmograph-daytona-116500ln-116500-40mm-black-cerachrom-black-ceramic-stainless-steel-chronograph-1-front.jpg",
  },
  {
    product_name: "IWC PORTUGIESER CHRONOGRAPH",
    price: 89.99,
    stock: 25,
    category_id: 1,
    img: "https://cdn2.chrono24.com/images/uhren/26078888-etq5pnyrvr4o7szzfotztg1m-ExtraLarge.jpg",
  },
  {
    product_name: "PANERAI LUMINOR 8 DAYS",
    price: 219.99,
    stock: 12,
    category_id: 1,
    img: "https://www.hydeparkjewelers.com/media/catalog/product/w/p/wpag0169-Base-17101_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=613&width=851&canvas=851:613",
  },
  {
    product_name: "MB&F HOROLOGICAL MACHINE NO. 5",
    price: 119.99,
    stock: 50,
    category_id: 1,
    img: "https://b0650f7f058d5f70d743-97d5bb3f4194bc3eff7a94253e4a4e28.ssl.cf1.rackcdn.com/86222_MAIN_3567.jpg",
  },
  {
    product_name: "AUDEMARS PIGUET ROYAL OAK PERPETUAL CALENDAR",
    price: 129.99,
    stock: 22,
    category_id: 1,
    img: "https://swissupgrade.com/wp-content/uploads/2020/04/Audemars-Piguet-Royal-Oak-Perpetual-Calendar-Watch-1.jpg",
  },
];

// module.exports = seedProducts;
module.exports = productData;

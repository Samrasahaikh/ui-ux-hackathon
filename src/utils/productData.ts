// Define the Product Type
type Product = {
    title: string;
    price: string;
    oldPrice: string | null;
    image: string;
    rating: number;
  };
  // Product Data
const products: Product[] = [
    {
      title: "Gradient Graphic T-shirt",
      price: "$145",
      oldPrice: null,
      image: "/casual/shart1.png",
      rating: 3.5,
    },
    {
      title: "Polo with Tipping Details",
      price: "$180",
      oldPrice: null,
      image: "/casual/shart2.png",
      rating: 4.5,
    },
    {
      title: "Black Striped T-shirt",
      price: "$120",
      oldPrice: "$150",
      image: "/casual/shart3.png",
      rating: 4.5,
    },
    {
      title: "SKINNY FIT JEANS",
      price: "$240",
      oldPrice: "$260",
      image: "/casual/pent4.png",
      rating: 3.5,
    },
    {
      title: "CHECKERED SHIRT",
      price: "$180",
      oldPrice: null,
      image: "/casual/shart5.png",
      rating: 4.5,
    },
    {
      title: "SLEEVE STRIPED T-SHIR",
      price: "$130",
      oldPrice: "$160",
      image: "/newArrivals/arrival4.png",
      rating: 4.5,
    },
    {
      title: "VERTICAL STRIPED SHIRT",
      price: "$212",
      oldPrice: "$232",
      image: "/topSelling/top1.png",
      rating: 5.0,
    },
    {
      title: "COURAGE GRAPHIC T-SHIRT",
      price: "$145",
      oldPrice: null,
      image: "/topSelling/top2.png",
      rating: 4,
    },
    {
      title: "LOOSE FIT BERMUDA SHORTS",
      price: "$80",
      oldPrice: null,
      image: "/topSelling/top3.png",
      rating: 3,
    },


]

export default products


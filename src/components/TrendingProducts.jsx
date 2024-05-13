import React from "react";
import ProductCard from "./ProductCard";
const products = [
    {
        id: 1,
        img: "Macbookpro.png",
        category: "Computers",
        title: "Macbook Pro",
        price: "900000Rwf",
    },
    {
        id: 2,
        img: "Gbl1.png",
        category: "Headphones",
        title: "GBL headphones",
        price: "30000Rwf",
    },
    {
        id: 3,
        img: "Smartwatch1.png",
        category: "SmartWatches",
        title: "Apple Watch SE Gen 2",
        price: "40000Rwf",
    },
    {
        id: 4,
        img: "Iphone13.png",
        category: "Phones",
        title: "Iphone 13",
        price: "800000Rwf",
    },
    {
        id: 5,
        img: "Iphone12pro.png",
        category: "Phones",
        title: "Iphone 12 Pro",
        price: "700000Rwf",
    },
    {
        id: 6,
        img: "Hp1.png",
        category: "computers",
        title: "HP 17.3 intel Core i3",
        price: "700000Rwf",
    },
    {
        id: 7,
        img: "Hoowel Smart Watch.png",
        category: "SmartWatches",
        title: "Hoowel Smart Watch",
        price: "50000Rwf",
    },
    {
        id: 8,
        img: "JBL Charge 3 Waterproof.png",
        category: "Speakers",
        title: "JBL Charge 3 Waterproof",
        price: "50000Rwf",
    },



];

const TrendingProducts = () => {
    return (
        <div className="container mt-32 md:px-[100px]">
            <div className="sm:flex justify-between items-center">
                <h2 className="md:text-4xl text-2xl font-medium">Trending Products</h2>
                <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                    <div className="cursor-pointer text-black">New</div>
                    <div className="cursor-pointer">Featured</div>
                    <div className="cursor-pointer">Top Sellers</div>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                {
                    products.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            category={item.category}
                            title={item.title}
                            price={item.price}
                        />
                    ))
                }

            </div>
        </div>
    );
}
export default TrendingProducts;
export { products }
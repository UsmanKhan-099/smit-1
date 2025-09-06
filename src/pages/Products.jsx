// 

import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Card } from "flowbite-react";

export function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let api = await fetch("https://dummyjson.com/products");
        let data = await api.json();
        let productArray = data.products;
        setProducts(productArray);
      } catch (error) {
        console.log("error => ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="flex flex-wrap justify-center">
          {products.map((items) => (
            <div
              key={items.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <Card
                className="w-full"
                imgAlt={items.title}
                imgSrc={items.thumbnail}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {items.title}
                  </h5>
                </a>
                <div className="mb-5 mt-2.5 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {items.price}$
                  </span>
                  <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    Add to cart
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

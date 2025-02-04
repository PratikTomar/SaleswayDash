import { Star } from "lucide-react";
import React from "react";
import { PRODUCTS_DATA } from "../utils/data";

const ProductTable = () => {

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-6">
        <h3 className="text-xl font-bold">Top Products</h3>
        <button className="border-2 rounded-xl border-gray-200 px-2 py-1 font-semibold cursor-pointer">
          Full results
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="text-left text-sm text-gray-400">
              <th className="px-6 py-4 font-semibold">Product</th>
              <th className="px-6 py-4 font-semibold">Sold amount</th>
              <th className="px-6 py-4 font-semibold">Unit price</th>
              <th className="px-6 py-4 font-semibold">Revenue</th>
              <th className="px-6 py-4 font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS_DATA.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center ">
                      <img src={item.img_src} />
                    </div>

                    <span className="font-bold">{item.product}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 font-semibold">
                  {item.sold_amount}
                </td>
                <td className="px-6 py-4 text-gray-500 font-semibold">
                  ${item.unit_price}
                </td>
                <td className="px-6 py-4 text-gray-500 font-semibold">
                  ${item.revenue}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1 font-bold">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;

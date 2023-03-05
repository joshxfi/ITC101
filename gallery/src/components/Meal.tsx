import toast from "react-hot-toast";
import { IMeal } from "../types";

export const Meal = ({ strMeal, strMealThumb }: IMeal) => {
  return (
    <>
      <div
        className="h-[300px] w-[250px] group relative overflow-hidden bg-white shadow-md"
        key={strMeal}
      >
        <img
          className="peer group-hover:scale-125 absolute h-full object-cover transition-all duration-300"
          src={strMealThumb}
          alt={strMeal}
        />
        <div className="bg-white z-10 absolute w-full flex flex-col justify-center -bottom-44 group-hover:bottom-0 transition-all duration-300 p-4 font-semibold">
          <p className="text-2xl font-bold text-black">₱105</p>
          <p className="text-sm text-gray-800">{strMeal}</p>

          <button
            onClick={() =>
              toast("Food added to cart", {
                icon: "🛒",
                style: {
                  color: "#fff",
                  background: "#000",
                  border: "2px solid #fff",
                },
              })
            }
            className="p-3 mt-4 bg-black text-white font-normal text-sm text-center"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

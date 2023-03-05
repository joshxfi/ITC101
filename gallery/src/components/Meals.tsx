import useSWR, { Fetcher } from "swr";

interface Meals {
  meals: {
    strMeal: string;
    strMealThumb: string;
  }[];
}

const fetcher: Fetcher<Meals> = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  return res.json();
};

export const Meals = () => {
  const { data } = useSWR("/", fetcher);
  return (
    <>
      {data?.meals.map((meal) => (
        <div
          className="h-[300px] w-[250px] group relative rounded-md shadow-md overflow-hidden bg-white"
          key={meal.strMeal}
        >
          <img
            className="peer group-hover:scale-125 absolute h-full object-cover transition-all"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <div className="bg-white z-10 absolute w-full flex flex-col justify-center -bottom-32 peer-hover:bottom-0 hover:bottom-0 transition-all h-32 px-4 py-2 font-semibold">
            <p className="text-2xl font-bold">₱105</p>
            <p className="">{meal.strMeal}</p>
          </div>
        </div>
      ))}
    </>
  );
};

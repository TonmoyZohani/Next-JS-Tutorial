import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drink...");
  }
  return res.json();
};

const SingleDrink = async ({ params }) => {

  // will get the params from dynamic route [id]

  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const drinkImg = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image
        src={drinkImg}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt=""
      />
    </div>
  );
};
export default SingleDrink;

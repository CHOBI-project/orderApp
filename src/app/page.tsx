import { getAllDrink, getAllFood, getAllSweets } from "@/api";
import Header from "./components/Header";
import MenuDisplay from "./components/MenuDisplay";
import OrderDisplay from "./components/OrderDisplay";
import Quantity from "./components/Quantity";

export default async function Home() {
  const allFoods = await getAllFood();     //foodデータ
  const allDrinks = await getAllDrink();   //drinkデータ
  const allSweets = await getAllSweets();  //sweetsデータ

  return (
   <>
    <Header/>
      <div className="display">
        <MenuDisplay allFoods={allFoods} allDrinks={allDrinks} allSweets={allSweets}/>
        <OrderDisplay/>
      </div>
      <Quantity />
   </>
  );
}
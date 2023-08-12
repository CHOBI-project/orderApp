import { Menu } from "./types";

export const getAllFood = async (): Promise<Menu[]> => {
    const res = await fetch("http://localhost:3001/food", {cache: "no-store"});
    const menus = res.json();

    return menus;
}

export const getAllDrink = async (): Promise<Menu[]> => {
    const res = await fetch("http://localhost:3001/drink", {cache: "no-store"});
    const menus = res.json();

    return menus;
}

export const getAllSweets = async (): Promise<Menu[]> => {
    const res = await fetch("http://localhost:3001/sweets", {cache: "no-store"});
    const menus = res.json();

    return menus;
}
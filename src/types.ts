export interface Menu {
    id: string;
    img: string;
    menu: string;
    price: number;
    checked: boolean;
    desc: string;
};

export interface Label {
    color: string;
    menu: string;
    subText: string;
    checked: boolean;
};

export interface menusProps {
    allFoods: Menu[];
    allDrinks: Menu[];
    allSweets: Menu[];
};

export interface btLabel {
    text: string;
    subText: string;
    classes: string;
    img?: string;
}

export const btLabels: btLabel[] = [
    {
        text: "料理",
        subText: "yammy!!",
        classes: "foodBt",
        img: "images/headerBg_food.jpg",
    },
    {
        text: "ドリンク",
        subText: "fresh!!",
        classes: "drinkBt",
        img: "images/headerBg_drink.jpg",
    },
    {
        text: "スイーツ",
        subText: "sweet!!",
        classes: "sweetsBt",
        img: "images/headerBg_sweets.jpg",
    }
];


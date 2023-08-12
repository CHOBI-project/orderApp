"use client";

import { Menu, btLabel, btLabels, menusProps } from '@/types'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Item from './Item';
import { useDispatch } from 'react-redux';
import { changeHeaderImg } from '../redux/features/changeHeaderBg-slice';
import { getLabelClasses, getLabelSubText, getLabelText } from '../redux/features/menuLabel-slice';
import { AppDispatch, useAppSelector } from '../redux/store';

function MenuDisplay({ allFoods, allDrinks, allSweets }: menusProps) {
    const [texts, setTexts] = useState<string>("");
    const [menus, setMenus] = useState<Menu[]>(allFoods);
    const [displayBgColor, setDisplayBgColor] = useState<string>("#FFEBC6");

    const dispatch = useDispatch<AppDispatch>();

    const labelActive = useAppSelector((state) => state.label.value.text);
    
    //関数 ------------------------------------------------------------------------
    const handleButton = (e: React.MouseEvent, data: btLabel) => {
        e.preventDefault();

        dispatch(getLabelText(data.text));
        dispatch(getLabelSubText(data.subText));
        dispatch(getLabelClasses(data.classes));

        setTexts(data.text);
        
        if (data.text === "料理") {
            setMenus(allFoods);
            setDisplayBgColor("#FFEBC6");
            dispatch(changeHeaderImg("images/headerBg_food.jpg"));

        } else if (data.text === "ドリンク") {
            setMenus(allDrinks);
            setDisplayBgColor("#C6FFFF");
            dispatch(changeHeaderImg("images/headerBg_drink.jpg"));

        } else {
            setMenus(allSweets);
            setDisplayBgColor("#FED6FF");
            dispatch(changeHeaderImg("images/headerBg_sweets.jpg"));
            
        }
    };

  return (
    <>
        <div className='menu-bt-container'>
            {btLabels.map((label) => (
                <button 
                    key={uuidv4()} 
                    className={label.classes} 
                    id={label.text == labelActive ? "active" : ""} 
                    onClick={(e) => handleButton(e, label)}
                >
                    <h3>{label.text}</h3>
                    <p>{label.subText}</p>
                </button>
            ))}
        </div>

        <div className='menu-display'>
            <div className='menu-form-allMenu' style={{ backgroundColor: displayBgColor }}>
                    {menus.map((menu) => (
                        <Item key={menu.id} menu={menu} />
                    ))}
            </div>
        </div>
    </>
  );
}

export default MenuDisplay
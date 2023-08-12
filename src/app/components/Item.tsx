"use client";

import { Menu } from '@/types'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { checkingMenu } from '../redux/features/checkMenu-slice';
import { getMenuChecked, getMenuDesc, getMenuId, getMenuImg, getMenuMenu, getMenuPrice } from '../redux/features/orderMenuDetail-slice';

interface MenuProps {
  menu: Menu;
};

function Item({ menu }: MenuProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleItemClick = () => {    
    dispatch(checkingMenu());

    //Menu情報をstoreへ格納
    dispatch(getMenuId(menu.id));
    dispatch(getMenuImg(menu.img));
    dispatch(getMenuMenu(menu.menu));
    dispatch(getMenuPrice(Number(menu.price)));
    dispatch(getMenuChecked(Boolean(menu.checked)));
    dispatch(getMenuDesc(menu.desc));
  };  

  return (
    <label className='menu-container'>
      <input 
        type='checkbox'
        key={menu.id}
        onChange={handleItemClick} 
        disabled={false} //------------------------------------------ここを各メニューごとにstate管理したい
      />
        <img src={menu.img} alt="ライム" width={250} height={190} />
        <div className='details'>
            <p className='name'>{menu.menu}</p>
            <p className='price'>￥{Number(menu.price).toLocaleString()}</p>
        </div>
    </label>
  );
};

export default Item
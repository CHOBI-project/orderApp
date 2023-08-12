"use client";

import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';
import { checkingMenu } from '../redux/features/checkMenu-slice';
import { v4 as uuidv4 } from 'uuid';
import { decrement, increment, resetQuantity } from '../redux/features/quantity-slice';
import { getNewOrderMenu } from '../redux/features/orderdedMenu-slice';
import { orderTotal } from '../redux/features/totalAmount-slice';

function Quantity() {
    const checked  = useAppSelector((state) => state.visibility.value);

    const orderNum  = useAppSelector((state) => state.orderded.value);

    const menuImg   = useAppSelector((state) => state.orderMenu.value.img);
    const menuName  = useAppSelector((state) => state.orderMenu.value.menu);
    const menuPrice = useAppSelector((state) => state.orderMenu.value.price);
    const menuDesc  = useAppSelector((state) => state.orderMenu.value.desc);

    const labelText    = useAppSelector((state) => state.label.value.text);
    const labelSubText = useAppSelector((state) => state.label.value.subText);
    const labelClass   = useAppSelector((state) => state.label.value.classes);    

    const quantity = useAppSelector((state) => state.orderQuantity.value);

    const dispatch = useDispatch<AppDispatch>();

    const handleCancel = () => {
        dispatch(resetQuantity());
        dispatch(checkingMenu());
    };

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());

         if (quantity <= 1) {
            dispatch(resetQuantity());
            dispatch(checkingMenu());
         }
    };
    
    const handleOrder = () => {
        dispatch(resetQuantity());
        dispatch(checkingMenu());   

        dispatch(getNewOrderMenu(
            {
                id: orderNum.length + 1,
                menuImg: menuImg,
                name: menuName,
                quantity: quantity,
                price: menuPrice,
                checked: true,
            },
        ));
        dispatch(orderTotal(menuPrice * quantity)); //数量と価格の取得
        //メニューを押せなくする
    };

  return (
    <div className='quantity-display' hidden={checked}>
        <div className='popup-area'>
            <div className='menu-details'>
                    <div key={uuidv4()}>
                        <div className={labelClass}>
                            <h3>{labelText}</h3>
                            <p>{labelSubText}</p>
                        </div> 
                        <p className='description'>{menuDesc}</p>
                    </div>
            </div>

            <CloseIcon className='closeBt' onClick={handleCancel}/>

            <button className='order-img' >
                <img src={menuImg} alt="タコス" width={250} height={190} />
                <div className='details'>
                    <p className='name'>{menuName}</p>
                    <p className='price'>￥{menuPrice.toLocaleString()}</p>
                </div>
            </button>

            <div className='quantity-chose' >
                <button onClick={handleDecrement}><ArrowLeftIcon className='left' /></button>
                <div>{quantity}</div>
                <button onClick={handleIncrement}><ArrowRightIcon className='right'/></button>
            </div>

            <button className='decision' onClick={handleOrder}>注文する</button>
        </div>
    </div>
  )
}

export default Quantity
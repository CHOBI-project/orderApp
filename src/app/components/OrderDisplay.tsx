"use client";

import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';
import { deleteOrderMenu, newOrder } from '../redux/features/orderdedMenu-slice';
import { priceDecrement } from '../redux/features/totalAmount-slice';

function OrderDetails() {
    const newOrderLists = useAppSelector((state) => state.orderded.value);
    console.log(newOrderLists);
    const total = useAppSelector((state) => state.total.value);

    const dispatch = useDispatch<AppDispatch>();

    const orderdedMenu = (orderData: newOrder) => {
        dispatch(deleteOrderMenu({id: orderData.id}));                   //押したメニューを削除する
        dispatch(priceDecrement(orderData.price * orderData.quantity));  //合計金額からの減算
    };
     
    const finallyOrderBt = () => {
        if (total.toLocaleString() === "0") {
            alert("注文してから押して下さい");
            return;

        } else {
            alert("ご注文ありがとうございます！！");
            location.reload();
        }
    };

  return (
    <div>
        <div className='order-container'>
            <h1>注文内容</h1>
            <div className='borderBt'></div>

            <ul>
                {newOrderLists.map((order) => (
                    <li className='order-details' key={order.id} onClick={() => orderdedMenu(order)}>
                        <img src={order.menuImg} alt="画像" width={58} height={48}/>
                        <p className='name'>{order.name}</p>
                        <p className='quantity'>{order.quantity}個</p>
                        <p className='price'>¥{order.price.toLocaleString()}</p>
                    </li> 
                ))}
            </ul>
        </div>

        <div className='payment-container'>
            <p className='text'>合計</p>
            <p className='price'>¥{total.toLocaleString()}</p>
        </div>

        <button className='decision' onClick={finallyOrderBt} >Order</button>
    </div>
  )
}

export default OrderDetails
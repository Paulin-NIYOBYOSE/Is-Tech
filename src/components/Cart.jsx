import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useAppSelector } from '../redux/hooks';
import CartProduct from './CartProduct';

const Cart = ({ setShowCart }) => {
    const products = useAppSelector((state) => state.cartReducer);

    const getTotal = () => {
        let total = 0;
        products.forEach((item) => (total += item.price * item.quantity));
        return total;
    };

    return (
        <>
            <div className="bg-[#0000007d] w-5/6 sm:w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
                <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
                    <RxCross1
                        className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                        onClick={() => setShowCart(false)}
                    />
                    <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
                    <div className="mt-6 space-y-2">
                        {products?.map((item) => (
                            <CartProduct
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity} />
                        ))}
                    </div>
                    <div className="flex justify-between items-center font-medium text-xl py-4">
                        <p>Total:</p>
                        <p>{getTotal()} Rwf</p>
                    </div>
                    <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-green-500 mb-4 mt-4'>
                        View cart
                    </button>
                    <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-green-500'>
                        Chech out
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;


import { useAppDispatch } from '../redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import { removeFromCart } from '../redux/features/cartSlice';

const CartProduct = ({ id, img, title, price, quantity }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="h-[80px]" src={`/images/${img}`} alt={title} />
                    <div className="space-y-2">
                        <h3 className="text-gray-600 text-[14px]">{title}</h3>
                        <p className="text-gray-600 text-[14px]">
                            {quantity} x Rwf{price}
                        </p>
                    </div>
                </div>
                <RxCross1
                    className="cursor-pointer"
                    onClick={() => dispatch(removeFromCart(id))}
                />
            </div>
        </>
    );
};

export default CartProduct;

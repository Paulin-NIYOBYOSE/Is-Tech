import {
    AiFillStar,
    AiOutlineStar,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";


const propsType = {
    id: Number,
    img: 'string',
    category: 'string',
    title: 'string',
    price: 'string'

}
const ProductCard = ({ id, img, category, title, price }) => {
    const dispatch = useAppDispatch()
    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price: parseFloat(price),
            quantity: 1
        }

        dispatch(addToCart(payload))
        toast.success("Added to cart")
    }
    return (
        <div className="border border-green-300 h-[360px] w-[200px]rounded">
            <div className="text-center border-b border-green-300 h-3/5 bg-gray-100">
                <img style={{ height: '100%', width: '100%' }} className="inline-block" src={`/images/${img}`} alt={title} />
            </div>
            <div className="flex flex-col  px-4">
                <p className="text-gray-500 text-[14px] font-medium">{category}</p>
                <h2 className="font-medium">{title}</h2>

                <div className=" flex text-[#ffb21d]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>

                <div className="flex flex-col justify-center-center ">
                    <h2 className="font-medium text-accent text-xl">{price}
                    </h2>
                    <div className="flex items-center bg-gray-600 text-white px-2 cursor-pointer hover:bg-green-500 rounded-md h-8" onClick={addProductToCart}>
                        <AiOutlineShoppingCart />Add to Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
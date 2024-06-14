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
        <div className="border border-green-300 h-[320px] w-[220px] rounded cursor-pointer">
            <div className="text-center border-b border-green-300 h-3/5 bg-gray-100">
                <svg className="w-16 h-16 absolute" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M40.8 206.93h42.26l119.65-92.91c-1.28-4.68-1.98-9.6-1.98-14.69 0-15.26 6.19-29.09 16.2-39.08 10-10 23.81-16.18 39.07-16.18 15.26 0 29.07 6.19 39.07 16.18 10.01 9.99 16.2 23.82 16.2 39.08 0 5.09-.7 10-1.99 14.69l119.65 92.91h42.27c22.4 0 40.8 18.41 40.8 40.8v179.4c0 22.4-18.4 40.8-40.8 40.8H40.73c-11.17 0-21.33-4.56-28.7-11.93C4.66 448.64.08 438.44.06 427.23L0 247.73c0-22.47 18.32-40.8 40.8-40.8zm106.86 184.22-29.21-47.23v47.23H83.46V281.82h32.88l29.22 47.23v-47.23h34.99v109.33h-32.89zm121.81-41.29h-34.99v16.92h42.86v24.37h-77.85V281.82h76.98l-4.37 24.37h-37.62v18.31h34.99v25.36zm122.51-68.04h36.56l-17.15 109.33h-45.65l-8.05-40.24h-2.1l-7.87 40.24h-45.66l-17.14-109.33h36.56l8.22 61.05h1.06l12.59-61.05h26.76l12.42 61.05h1.06l8.39-61.05zM126 206.93h260l-89.76-69.72-1.17 1.2c-10 10-23.81 16.18-39.07 16.18-15.26 0-29.07-6.19-39.07-16.18l-1.17-1.2L126 206.93zM256 75.95c6.45 0 12.29 2.62 16.53 6.85a23.29 23.29 0 0 1 6.84 16.53c0 6.46-2.61 12.3-6.84 16.53-4.24 4.23-10.08 6.84-16.53 6.84-6.45 0-12.3-2.61-16.53-6.84a23.29 23.29 0 0 1-6.84-16.53c0-6.45 2.61-12.31 6.84-16.53A23.317 23.317 0 0 1 256 75.95zM40.8 221.5h430.4c14.44 0 26.23 11.8 26.23 26.23v179.4c0 14.44-11.79 26.24-26.23 26.24H40.8c-14.44.03-26.23-11.77-26.23-26.2V247.73c0-14.43 11.79-26.23 26.23-26.23z" fill="#008000" /></svg>
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

                <div className="flex flex-col justify-center-center">
                    <h2 className="font-medium text-accent text-xl">{price}
                    </h2>
                    <div className="flex items-center bg-gray-600 text-white px-2 py-1 cursor-pointer hover:bg-green-500 rounded-md h-8" onClick={addProductToCart}>
                        <AiOutlineShoppingCart />Add to Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
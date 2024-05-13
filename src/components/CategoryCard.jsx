
const propsType = {
    img: 'string',
    category: 'string',

}
const CategoryCard = ({ img, category }) => {
    return (
        <>

            <div className=" flex flex-col h-[100px] sm:h-[150px] rounded-full  bg-gray-50 cursor-pointer md:h-[200px] ">
                <div className="h-5/6 w-full  rounded-full ">
                    <img className="rounded-full" style={{ height: "100%", width: "100%" }} src={`/images/${img}`} />
                </div>
                <h3 className="h-1/6 text-gray-900 font-bold flex items-center text-[10px] md:text-base justify-center">{category}</h3>

            </div>
        </>
    )
}

export default CategoryCard;
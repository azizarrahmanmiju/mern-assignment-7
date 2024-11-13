import PropTypes from "prop-types";


const Cookitem = ({ cookitem }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cookitem;
    return (
        <div className='flex gap-2 bg-gray-200 p-2 m-1 items-center rounded-lg'>

            <p className="items-center" >{recipe_id}</p>
            <p className="w-[100px] text-[13px]">{recipe_name}</p>
            <p className="text-[#646464] text-[15px]">{preparing_time}</p>
            <p className="text-[#646464] text-[15px]">{calories}</p>
            <button className='bg-[#0BE58A] text-sm h-min px-2 py-2 rounded-full'>prepare</button>
        </div>
    );
};

Cookitem.propTypes = {
    cookitem: PropTypes.object.isrequired
}

export default Cookitem;
import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";



PropTypes
const Recipie = ({ recipie }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipie;
    return (
        <div className="grid border p-4 gap-4 rounded-[20px] shadow-lg">
            <div >
                <img className="rounded-[10px]" src={
                    recipe_image
                }></img>
            </div>
            <h1 className="text-2xl font-semibold">{recipe_name}</h1>
            <p className="text-[#878787]">{short_description}</p>
            <div className="w-full border h-[1px]"></div>
            <h1 className="text-xl font-semibold ">Ingredients: {ingredients.length}</h1>
            <div className="grid grid-cols-1 gap-1 ml-4">
                {
                    ingredients.map(data => {
                        return <li className="text-[#878787]" key={data}>{data}</li>
                    })
                }
            </div>
            <div className="w-full border h-[1px]"></div>
            <div className="flex items-center gap-x-2">
                <CiClock2></CiClock2>
                <h1>{preparing_time}</h1>
                <SlEnergy className="ml-4"></SlEnergy>
                <h1>{calories}</h1>
            </div>
            <button className='bg-[#0BE58A]  px-3 py-2  h-[40px] rounded-full font-semibold'>Explore More</button>







        </div>
    );
};

Recipie.propTypes = {
    recipie: PropTypes.object.isRequired
}


export default Recipie;
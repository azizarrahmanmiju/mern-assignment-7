import PropTypes from "prop-types";
import Cookitem from "../cookitem/cookitem";


const Cooking = ({ wantcook }) => {
    return (
        <div className="w-[400px] grid-cols-1 border rounded-3xl p-4">
            <h1 className="text-2xl font-semibold w-full text-center">want to cook: {wantcook.length} </h1>
            <div className="flex">
                <p className="w-[100px] ml-8">Name</p>
                <p className="w-[60px] ">Time</p>
                <p className="w-[60px] ">Calories</p>
            </div>
            <div >{
                wantcook.map((cook, index) => {
                    return (
                        <Cookitem key={index} cookitem={cook}></Cookitem>
                    )
                })
            }
            </div>
        </div>
    );
};


Cooking.propTypes = {
    wantcook: PropTypes.array.isRequired
}

export default Cooking;
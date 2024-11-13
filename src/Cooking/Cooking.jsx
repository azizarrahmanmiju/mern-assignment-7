import PropTypes from "prop-types";


const Cooking = ({ wantcook }) => {
    return (
        <div className="w-[400px] grid-cols-1 border rounded-3xl p-4">
            <h1 className="text-2xl font-semibold w-full text-center">want to cook: {wantcook.length} </h1>
            <div className="flex">
                <p className="w-[100px] text-center">Name</p>
                <p className="w-[100px] text-center">Time</p>
                <p className="w-[100px] text-center">Calories</p>
            </div>
            <div ></div>
        </div>
    );
};


Cooking.propTypes = {
    wantcook: PropTypes.array.isRequired
}

export default Cooking;
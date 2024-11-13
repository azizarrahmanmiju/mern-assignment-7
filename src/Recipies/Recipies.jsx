import { useEffect, useState, } from "react";
import Recipie from "./Recipie";
import Cooking from "../Cooking/Cooking";
import PropTypes from "prop-types";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipies = () => {

    const [recipes, setRecipes] = useState([]);
    const [wantcook, setwantcook] = useState([])


    const handlewantcook = recipie => {
        if (!wantcook.find(item => item.recipe_id === recipie.recipe_id)) {
            // console.log(item.)
            const newcookrecipie = [...wantcook, recipie];
            setwantcook(newcookrecipie);
            toast.success("Recipie Added for cook")
        } else {
            toast.error("recipie Alredy Exist for cook")
        }
    };

    useEffect(() => {
        fetch('recpies.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])
    return (
        <div className="flex justify-center content-center gap-4 ">
            <div className=" w-[600px] grid grid-cols-2 gap-4">{
                recipes.map((recipie, indx) => {
                    return <Recipie handlewantcook={handlewantcook} key={indx} recipie={recipie}></Recipie>
                })
            }
            </div>
            <Cooking wantcook={wantcook}></Cooking>
            <ToastContainer></ToastContainer>

        </div>
    );
};


Recipies.propTypes = {
    handlewantcook: PropTypes.func,
    recipie: PropTypes.object
}

export default Recipies;
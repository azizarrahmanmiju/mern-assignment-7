import { useEffect, useState, } from "react";
import Recipie from "./Recipie";

const Recipies = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recpies.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])
    return (
        <div className="flex justify-center content-center">
            <div className=" w-[600px] grid grid-cols-2 gap-4">{
                recipes.map((recipie, indx) => {
                    return <Recipie key={indx} recipie={recipie}></Recipie>
                })
            }

            </div>
            <div className="w-[400px]"> gello</div>

        </div>
    );
};

export default Recipies;
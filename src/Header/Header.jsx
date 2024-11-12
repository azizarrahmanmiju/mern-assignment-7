
const Header = () => {
    return (
        <div className="" >

            <div className="flex headerdiv justify-between mx-[120px]  items-center my-8">
                <h1 className="text-4xl font-bold">Recipe Calories</h1>
                <ul className="list">
                    <li><a>Home</a></li>
                    <li><a>Recipie</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
                <div className="flex justify-center content-center gap-2">

                    <input className="shadow-lg p-2 rounded-full bg-gray-50 border" type="text" placeholder='Search'></input>

                    <img className="border-2 w-10 h-10 rounded-full border-red-300" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
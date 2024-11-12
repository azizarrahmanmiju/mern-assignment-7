import backgroundImage from '../assets/Rectangle 1.png'
const Cover = () => {

    return (
        <div
            className="relative grid items-center justify-center text-center gap-6 bg-cover bg-center mx-[120px] p-24 mt-10 rounded-lg"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <h1 className="text-white text-5xl  font-semibold">Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-white font-light  mx-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex justify-center gap-2'>
                <button className='bg-[#0BE58A]  px-5 py-3 rounded-full font-semibold'>Explore More</button>
                <button className='text-white border border-white px-5 py-3 rounded-full font-semibold'>Our Feedback</button>
            </div>

        </div>
    );
};

export default Cover;

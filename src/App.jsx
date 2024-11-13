
import './App.css'
import Cover from './Cover/cover'
import Header from './Header/header'
import Recipies from './Recipies/Recipies'

function App() {

  return (
    <div className='grid'>
      <Header></Header>
      <Cover></Cover>
      <div className=' grid items-center text-center  m-10 gap-5  justify-center'>
        <h1 className='text-5xl font-bold'>Our Recipes</h1>
        <p className='w-[700px] text-[#878787]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <Recipies></Recipies>
    </div>

  )
}

export default App

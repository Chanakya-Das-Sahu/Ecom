import Reac from 'react'
// import Navbar from './navbar.jsx'
const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
      <div className=" w-full h-[600px] flex justify-around items-center">
        <div className="flex flex-col items-center border  border-solid border-black w-[230px] h-[500px]">
          <div className='text-[18px] font-bold'>Price Filter</div>
          <div className=' flex flex-rows  justify-around w-[120px]'>
            <div className='flex flex-col justify-around  w-[20px] h-[100px]'>
              <input type='radio' name='price-filter' value='' />
              <input type='radio' name='price-filter' value='' />
              <input type='radio' name='price-filter' value='' />
              <input type='radio' name='price-filter' value='' />
              <input type='radio' name='price-filter' value='' />
              <input type='radio' name='price-filter' value='' />
            </div>
            <div className='flex flex-col justify-around  w-[80px] h-[100px]'>
              <div>All</div>
              <div>1-100 $</div>
              <div>1-500 $</div>
              <div>500-1000 $</div>
              <div>1000-5000 $</div>
              <div>5000-10000 $</div>
              <div>10000-50000 $</div>
            </div>
          </div>
          <div className='h-[30px]'></div>
          <div className='text-[18px] font-bold'>Category Filter</div>
          <div className=' flex flex-rows  justify-around w-[120px]'>
            <div className='flex flex-col justify-around  w-[20px] h-[110px]'>
            <input type='radio' name='category-filter' value='Clothes' />
              <input type='radio' name='category-filter' value='Clothes' />
              <input type='radio' name='category-filter' value='Cosmatics' />
              <input type='radio' name='category-filter' value='Sports' />
              <input type='radio' name='category-filter' value='Accessaries' />
              <input type='radio' name='category-filter' value='Home' />
            </div>
            <div>
              <div>All</div>
              <div>Health</div>
              <div>Clothes</div>
              <div>Accessaries</div>
              <div>Grocessary</div>
              <div>Sports</div>
              <div>Cosmatics</div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-black w-[680px] h-[500px]">

        </div>
      </div>
    </>
  )
}

export default Home;
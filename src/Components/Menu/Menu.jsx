import React,  { useState, useEffect }  from 'react'
import './Menu.css'
import axios from "axios";

function Menu() {
  const [dishes, setDishes] = useState([]);


  const fetchDishes = async () => {
    try {
      let response = await axios.get(`https://studiographene-exercise-api.herokuapp.com/foods`);
      setDishes(response.data);
      console.log(dishes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDishes();
    
  }, []);


  return (
    <div className='menu'>
    <div className='menu-sections starter'>
    <h2>STARTERS</h2>
    {
      dishes.map((dishe)=>{
       if(dishe.type === 'starters') return (
       <>
       <h4>{dishe.title}</h4>
       <p className='description'>{dishe.description}</p>
       <p className='price'>{dishe.price}</p>   
       </>
        )
      })



    }
    </div>
    <div className='menu-sections main-course'>
    <h2><span className='main-course-first'>MAIN</span> <span className='main-course-second' >COURSES</span> </h2>
    {
      dishes.map((dishe)=>{
       if(dishe.type === 'main_courses') return (
       <>
       <h4>{dishe.title}</h4>
       <p className='description'>{dishe.description}</p>
       <p className='price'>{dishe.price}</p>   
       </>
        )
      })



    }
    </div>
    <div className='menu-sections side'>
    <h2>SIDES</h2>
    {
      dishes.map((dishe)=>{
       if(dishe.type === 'sides') return (
       <>
       <h4>{dishe.title}</h4>
       <p className='description'>{dishe.description}</p>
       <p className='price'>{dishe.price}</p>   
       </>
        )
      })



    }
    </div>
    <div className='menu-sections dessert'>
    <h2>DESSERTS</h2>
    {
      dishes.map((dishe)=>{
       if(dishe.type === 'desserts') return (
       <>
       <h4>{dishe.title}</h4>
       <p className='description'>{dishe.description}</p>
       <p className='price'>{dishe.price}</p>   
       </>
        )
      })



    }
    </div>

    </div>
  )
}

export default Menu

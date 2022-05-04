import React from 'react'

function Card2() {
  return (
    <div class="w-full h-95 carousel rounded-box">
        <div class="carousel-item w-full">
            <img 
            class="mt-10 px-15 w-full rounded-bl-3xl rounded-tr-3xl shadow-xl"
            src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" 
            alt="Tailwind CSS Carousel component" 

            />
        </div>  
        <div class="carousel-item w-full">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" class="w-full" alt="Tailwind CSS Carousel component" />
        </div>                  
    </div> 
  )
}

export default Card2




import React from 'react'
import img1 from './img/dice-01.svg'
import img2 from './img/dice-02.svg'
import img3 from './img/dice-03.svg'
import img4 from './img/dice-04.svg'
import img5 from './img/dice-05.svg'
import img6 from './img/dice-06.svg'

const Dice = ({face, rolling}) => {
  return (
    <>
        <img src={face === "img1"?img1 : face === "img2"?img2 : face === "img3"?img3 : face === "img4"?img4 : face === "img5"?img5 : face === "img6"?img6 : "https://link"} alt='img' className={rolling && "shaking"}/>
    </>
  )
}

export default Dice
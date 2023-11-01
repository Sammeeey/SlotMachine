import { useState } from 'react'
import './Slot.css'


function randomFruits(){
    const potentialFruitArray = ['🍌', '🍒', '🍏', '🍓', '🥑']
    const fruitArr = []
  
    const randomFruit = () => potentialFruitArray[Math.floor(Math.random() * potentialFruitArray.length)]
    
    for (let fruit = 1; fruit <= 3; fruit++){
      fruitArr.push(randomFruit())
    }
    console.log(fruitArr)
    
    return fruitArr
  }

function Slot() {
    const [fruits, setFruits] = useState(() => randomFruits())

    function newFruits(){
        setFruits(randomFruits())
    }

    console.log(fruits)
    
    let winning = fruits.every((val, i, arr) => val == arr[0])
    console.log(winning)

    // all 🥑 = jackpot
    let jackpot = fruits.every((val, i, arr) => val == '🥑')

    const fruitsList = fruits.map((fruit, i) => <span key={i}>{fruit}</span>)
    console.log(fruitsList)

    return (
        <>
        <div className="slot">
            <p>{fruitsList}</p>
            <p style={{color: winning ? 'green' : 'red', fontSize: '1.4em'}}>{winning ? 'You win' : 'You lose'}</p>
            {jackpot ? <p>Jackpot!🎉🥳🎉</p> : null}
            {winning && <p className='gratulation'>Congrats!</p>}
        </div>
        <button type="button" onClick={() => setFruits(randomFruits())}>Play again</button>
        </>
    )
}

export default Slot

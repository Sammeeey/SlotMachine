import './App.css'
import Slot from './Slot'

function randomFruit(){
  const potentialFruitArray = ['🍌', '🍒', '🍏', '🍓', '🥑']
  const fruitObj = {}

  const randomFruit = () => potentialFruitArray[Math.floor(Math.random() * potentialFruitArray.length)]
  
  for (let fruit = 1; fruit <= 3; fruit++){
    fruitObj[fruit] = randomFruit()
  }
  console.log(fruitObj)
  
  return fruitObj
}

function App() {
  const {1: fruit1, 2: fruit2, 3: fruit3} = randomFruit()

  return (
    <div className='app'>
      <Slot fruit1={fruit1} fruit2={fruit2} fruit3={fruit3} />
      {/* <Slot fruit1='🥑' fruit2='🥑' fruit3='🥑' /> */}
      <button type="button" onClick={() => window.location.reload()}>Play again</button>
    </div>
  )
}

export default App

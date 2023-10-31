import './Slot.css'

function Slot({ ...fruitValsObj }) {
    const fruitsArray = Object.values(fruitValsObj)
    console.log(fruitsArray)
    
    let winning = fruitsArray.every((val, i, arr) => val == arr[0])
    console.log(winning)

    // all 🥑 = jackpot
    let jackpot = fruitsArray.every((val, i, arr) => val == '🥑')

    console.log(fruitValsObj)
    const fruitKeys = Object.keys(fruitValsObj)
    console.log(fruitKeys)

    const fruits = fruitsArray.map((fruit, i) => <span key={fruitKeys[i]}>{fruit}</span>)
    console.log(fruits)

    return (
        <div className="slot">
            <p>{fruits}</p>
            <p style={{color: winning ? 'green' : 'red', fontSize: '1.4em'}}>{winning ? 'You win' : 'You lose'}</p>
            {jackpot ? <p>Jackpot!🎉🥳🎉</p> : null}
            {winning && <p className='gratulation'>Congrats!</p>}
        </div>
    )
}

export default Slot

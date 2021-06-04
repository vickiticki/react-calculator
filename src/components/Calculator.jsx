import React, { useEffect, useState } from 'react'

export function Calculator() {
  //usestates
  const [thisDigit, setThisDigit] = useState('')
  const [numberDisplayed, setNumberDisplayed] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')

  //functions
  //add digits to current number

  useEffect(
    function () {
      console.log(thisDigit)
      const newNumber = numberDisplayed.concat(thisDigit)
      setThisDigit('')
      if (newNumber.length > 1 && newNumber.startsWith('0')) {
        setNumberDisplayed(newNumber.slice(1, newNumber.length))
        return
      }
      setNumberDisplayed(newNumber)
      // console.log(numberDisplayed)
      return
    },
    [thisDigit]
  )

  function allClear() {
    setNumberDisplayed('0')
  }
  function addNumber() {
    setFirstNumber(numberDisplayed + ' plus')
    console.log(firstNumber)
    allClear()
  }
  return (
    <main>
      <div className="calculator">
        <div className="display">{numberDisplayed}</div>
        <div className="buttons">
          <button className="button fn" onClick={allClear}>
            AC
          </button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn">%</button>
          <button className="button op">&divide;</button>
          <button className="button" onClick={() => setThisDigit(7)}>
            7
          </button>
          <button className="button" onClick={(event) => setThisDigit(8)}>
            8
          </button>
          <button className="button" onClick={(event) => setThisDigit(9)}>
            9
          </button>
          <button className="button op">&times;</button>
          <button className="button" onClick={(event) => setThisDigit(4)}>
            4
          </button>
          <button className="button" onClick={(event) => setThisDigit(5)}>
            5
          </button>
          <button className="button" onClick={(event) => setThisDigit(6)}>
            6
          </button>
          <button className="button op">&minus;</button>
          <button className="button" onClick={(event) => setThisDigit(1)}>
            1
          </button>
          <button className="button" onClick={(event) => setThisDigit(2)}>
            2
          </button>
          <button className="button" onClick={(event) => setThisDigit(3)}>
            3
          </button>
          <button className="button op" onClick={addNumber}>
            +
          </button>
          <button className="button x2" onClick={(event) => setThisDigit(0)}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op">=</button>
        </div>
      </div>
    </main>
  )
}

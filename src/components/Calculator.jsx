import React, { useEffect, useState } from 'react'

export function Calculator() {
  //usestates
  const [thisDigit, setThisDigit] = useState('')
  const [numberDisplayed, setNumberDisplayed] = useState('0')

  //functions
  //add digits to current number
  useEffect(function () {
    allClear
  }, [])
  useEffect(
    function () {
      console.log(thisDigit)
      const newNumber = numberDisplayed.concat(thisDigit)
      if (newNumber.length > 1 && newNumber.startsWith('0')) {
        setNumberDisplayed(newNumber.slice(1, newNumber.length))
        setThisDigit('')
        return
      }
      setNumberDisplayed(newNumber)
      setThisDigit('')
      return
    },
    [thisDigit]
  )

  // function digitClicked() {
  //   setThisDigit(event.target.value)
  //   console.log(thisDigit)
  //   return
  // }

  function allClear() {
    setNumberDisplayed('0')
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
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button op">&minus;</button>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button op">+</button>
          <button className="button x2">0</button>
          <button className="button">.</button>
          <button className="button op">=</button>
        </div>
      </div>
    </main>
  )
}

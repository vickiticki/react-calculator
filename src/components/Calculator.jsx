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
      console.log(numberDisplayed)
      return
    },
    [thisDigit]
  )

  function allClear() {
    setNumberDisplayed('0')
  }
  function addNumber() {
    setFirstNumber('plus' + numberDisplayed)
    console.log(firstNumber)
    allClear()
  }

  function divideNumber() {
    setFirstNumber('divi' + numberDisplayed)
    console.log(firstNumber)
    allClear()
  }

  function multiply() {
    setFirstNumber('time' + numberDisplayed)
    allClear()
  }

  function solve() {
    const num2 = numberDisplayed
    const num1 = firstNumber.slice(4, firstNumber.length)
    console.log(num1)
    const operator = firstNumber.slice(0, 4)
    console.log(operator)
    if (operator === 'plus') {
      const answer = parseInt(num1) + parseInt(num2)
      setNumberDisplayed(answer)
    } else if (operator === 'divi') {
      setNumberDisplayed(parseInt(num1) / parseInt(num2))
    } else if (operator === 'time') {
      setNumberDisplayed(parseInt(num1) * parseInt(num2))
    }
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
          <button className="button op" onClick={divideNumber}>
            &divide;
          </button>
          <button className="button" onClick={() => setThisDigit('7')}>
            7
          </button>
          <button className="button" onClick={(event) => setThisDigit('8')}>
            8
          </button>
          <button className="button" onClick={(event) => setThisDigit('9')}>
            9
          </button>
          <button className="button op" onClick={multiply}>
            &times;
          </button>
          <button className="button" onClick={(event) => setThisDigit('4')}>
            4
          </button>
          <button className="button" onClick={(event) => setThisDigit('5')}>
            5
          </button>
          <button className="button" onClick={(event) => setThisDigit('6')}>
            6
          </button>
          <button className="button op">&minus;</button>
          <button className="button" onClick={(event) => setThisDigit('1')}>
            1
          </button>
          <button className="button" onClick={(event) => setThisDigit('2')}>
            2
          </button>
          <button className="button" onClick={(event) => setThisDigit('3')}>
            3
          </button>
          <button className="button op" onClick={addNumber}>
            +
          </button>
          <button className="button x2" onClick={(event) => setThisDigit('0')}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op" onClick={solve}>
            =
          </button>
        </div>
      </div>
    </main>
  )
}

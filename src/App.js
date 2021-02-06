import React, {useState, useEffect, useRef} from 'react'
import Header from './components/Header'
import Display from './components/Display'
import TypeBox from './components/TypeBox'
import Controls from './components/Controls'
import ResultsModal from './components/ResultsModal'

const startQuote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function wordsPerMinute(text, seconds) {
  const words = text.split(' ').length
  if (seconds === 0 || text.length === 0) return 0
  return Math.round(words * 60 / seconds)
}

function getAccuracy(quote, input) {
  return Math.round(100 * input.slice(0, quote.length).split('').filter((ch, index) => {
    return ch === quote.charAt(index)
  }).length / quote.length)
}

export default function App() {
  const [isTyping, setIsTyping] = useState(false)
  const [sessionOver, setSessionOver] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [time, setTime] = useState(0)
  const [input, setInput] = useState('')
  const [quote, setQuote] = useState(startQuote)
  const inputRef = useRef(null)
  const reset = () => {
    setInput('')
    inputRef.current.value = ''
    setIsTyping(false)
    getNewQuote()
    setTime(0)
    setCountdown(5)
  }
  const getNewQuote = () => {
    fetch('https://api.quotable.io/random?minLength=100')
      .then(res => res.json())
      .then(res => setQuote(res.content))
      .catch(err => {
        console.log(`ERROR: ${err}`)
        setQuote(startQuote)
      })
  }
  useEffect(() => {
    getNewQuote()
  }, [])
  useEffect(() => {
    let interval = window.setInterval(() => {
        if (countdown === 1 && !sessionOver) {
            if (!isTyping) {
              setIsTyping(true)
              inputRef.current.focus()
            }
            if (input === quote) setSessionOver(true)
            setTime(time + 1)
        } else {
            setCountdown(countdown - 1)
        }
    }, 1000)
    return () => {
        window.clearInterval(interval)
    }
  }, [time, countdown])
  return (
    <React.Fragment>
      <Header isTyping={isTyping} countdown={countdown} time={time}/>
      <Display quote={quote} input={input}/>
      <TypeBox disabled={!isTyping} inputRef={inputRef} handleChange={event => {
        setInput(event.target.value)
      }}/>
      <Controls handleClick={reset}/>
      <ResultsModal wpm={wordsPerMinute(input, time)} acc={getAccuracy(quote, input)}/>
    </React.Fragment>
  )
}
import { useState, useEffect } from 'react'

export default function Counter(props){

    const [count,setCount] = useState(props.init)
  
    const increase = () => setCount(prevCount => prevCount + 1)
    const decrease = () => setCount(prevCount => prevCount - 1)

    useEffect( () => {
      document.title = `Volume Total: ${count}`
    },[count])
  
    return (
      <>
        <div className="container">
          <h1>Volume: {count}</h1>
          <div className="volume">
            <button onClick={increase}>Vol + </button>
            <button onClick={decrease}>Vol -</button>
          </div>
        </div>
      </>
    )
  }
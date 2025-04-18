import './App.css'
import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import { fib, NUM_LIST } from './util';
import { useStatisticsQuery } from './queries';
import { Platform } from './api';

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState<Platform>(Platform.INSTAGRAM);
  const {isLoading, data, isError} = useStatisticsQuery({ platform: inputValue });

  const {
    statistics,
    followerTotal,
    averageFollower,
    viewTotal,
    averageView,
  } = data || {};

  const fibValue = useMemo(() => {
    return fib(count);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount(0)}>
          reset count
        </button>
        {
          NUM_LIST.map((num) => (
            <button key={num} onClick={() => setCount(num)}>
              set to {num}
            </button>
          ))
        }
      </div>
      <p>
        fib({count}) = {fibValue}
      </p>
      <div>
        <select value={inputValue} onChange={(e) => {
          setInputValue(e.target.value as Platform);
        }}>
          {
            Object.values(Platform).map((platform) => (
              <option key={platform} value={platform}>{platform}</option>
            ))
          }
        </select>
      </div>
      
      <p className="read-the-docs">
        {
          isLoading ? <span>Loading...</span>
          : isError ? <span>Error</span>
          : (
            <span>Statistics json data: {JSON.stringify(statistics)}</span>
          )
        }
      </p>
    </>
  )
}

export default App

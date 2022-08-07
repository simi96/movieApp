import  SearchComponent  from './components/search'
import  { DisplayTime }  from './components/time'

import { useEffect } from 'react'

function App() {
  let timeSpent, startTime;

  useEffect(() => {
    startTime = new Date().getTime()
  },[])


  useEffect(() => {
    return () => {
      let currTime = new Date().getTime()
      let timeDiff = (currTime - startTime)/1000
      timeSpent = timeDiff/60
      return timeSpent
    }
  }, [])

  return (
    <>
    <SearchComponent/>
    <h2 className ='time-spent'>
    <DisplayTime/>
    </h2>
    </>

  );
}

export default App;

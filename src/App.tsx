import './App.css'
import Dishes from './components/Dishes'

  function App() {
    let myName: string = "Or Elmalach"
    let myEmail: string = "Or@gmail.com"
    return (
      <>

        <h1 className='myName' style={{backgroundColor:'yellow'}}>{myName}</h1>
        <p className='myEmail' style={{color:'red'}}>{myEmail}</p>
        <Dishes />
      </>
    )
  }

export default App

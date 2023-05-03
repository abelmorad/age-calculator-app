import './App.css'
import BirthDate from './components/BirthDate'
import Submit from './components/Submit'
import Age from './components/Age'

function App() {

  return (
      <main>
        <div className='bg'>
          <BirthDate />
          <Submit />
          <Age />
        </div>
      </main>
  )
}

export default App

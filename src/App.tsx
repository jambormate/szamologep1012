import Calculator from './components/Calculator'
import Fejlec from './components/Fejlec'
import Lablec from './components/Lablec'

function App() {
  return (
    <>
      <div className="text-center">
        <Fejlec />
        <main className="container">
          <Calculator />
        </main>
        <Lablec />
      </div>
    </>
  )
}

export default App

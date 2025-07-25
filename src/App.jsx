import './App.css'
import { Outlet } from 'react-router'
import Header from './feature/main/components/Header'
import Footer from './feature/main/components/Footer'

function App() {


  return (
    <div className='App'>
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

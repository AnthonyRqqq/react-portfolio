import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h3>
        <Navigation />
        </h3>
      </header>

      <main className='main'>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
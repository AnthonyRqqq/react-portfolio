import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <>
    <Navigation />
    <main className='mx-3'>
      <Outlet />
    </main>
    </>
  )
}
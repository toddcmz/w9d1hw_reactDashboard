import Header from './components/Header'
import Landing from './pages/Landing'
import StaticReviews from './pages/StaticReviews'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' //must be npm i ...



function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element ={ <Landing />} />
            <Route path='/staticReviews' element ={ <StaticReviews />} />
            <Route path='/carDetails' element ={ <CarDetails />} />
            <Route path='*' element={ <Navigate to='/' /> } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

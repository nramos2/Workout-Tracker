//pages and components
import Home from './pages/Home.js'
import Navbar from './components/Navbar.js'
//wraps everywhere we want to use the router, wraps all individual routes, and creates single routes respectively
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>{/*surrounds everything that needs to use routing system */}
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/' //default page
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

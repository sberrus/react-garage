// imports
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import ProtectedRoute from './router/ProtectedRoute'
import AuthForm from './pages/AuthForm'
import OnlyPublicRoute from './router/OnlyPublicRoute'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/auth'
          element={
            <OnlyPublicRoute>
              <AuthForm />
            </OnlyPublicRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App

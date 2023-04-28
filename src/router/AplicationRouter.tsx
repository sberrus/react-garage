import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import OnlyPublicRoute from './OnlyPublicRoute'
import AuthForm from '../pages/AuthForm'
import ProtectedRoute from './ProtectedRoute'
import Profile from '../pages/Profile'
import { Redux } from '../pages/Redux'
import ReduxLegacy from '../components/ReduxReactLegacy'
import ReduxReact from '../components/ReduxReact'

const AplicationRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='auth'
        element={
          <OnlyPublicRoute>
            <AuthForm />
          </OnlyPublicRoute>
        }
      />
      <Route
        path='profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path='redux'>
        <Route index element={<Redux />} />
        <Route path='legacy' element={<ReduxLegacy />} />
        <Route path='react' element={<ReduxReact />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AplicationRouter

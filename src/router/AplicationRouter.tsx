import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import OnlyPublicRoute from './OnlyPublicRoute'
import AuthForm from '../pages/AuthForm'
import ProtectedRoute from './ProtectedRoute'
import Profile from '../pages/Profile'
import { Redux } from '../pages/Redux'

const AplicationRouter = () => {
  return (
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
      <Route path='/redux'>
        <Route index element={<Redux />} />
      </Route>
    </Routes>
  )
}

export default AplicationRouter

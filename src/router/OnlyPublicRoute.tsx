import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// types
type ProtectedRouteProps = {
  children: React.ReactElement
}

const OnlyPublicRoute = ({ children }: ProtectedRouteProps) => {
  // hooks
  const { user } = useAuth()

  return !user ? children : <Navigate to='/profile' replace />
}

export default OnlyPublicRoute

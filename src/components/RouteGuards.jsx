import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import Preloader from './Preloader'
import { homeForRole } from './roleRoutes'

/**
 * Requires a signed-in user. While the session is still being restored we show
 * the preloader instead of redirecting, otherwise a refresh would bounce a
 * valid user to /login.
 */
export function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) return <Preloader />

  if (!isAuthenticated) {
    // Remember where they were headed so we can return them there after login.
    return <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />
  }

  return children
}

/** Requires a signed-in user with the admin role. */
export function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  const location = useLocation()

  if (loading) return <Preloader />

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />
  }

  if (!isAdmin) return <Navigate to="/" replace />

  return children
}

/** Keeps a signed-in user off the login/signup screens. */
export function GuestRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) return <Preloader />

  if (isAuthenticated) return <Navigate to={homeForRole(isAdmin ? 'admin' : 'customer')} replace />

  return children
}

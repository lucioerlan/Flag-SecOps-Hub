import HomeLayout from '@/layouts/HomeLayout'
import HomeView from '@/pages/Home'
import LoginView from '@/pages/Login'
import NotFoundView from '@/pages/NotFound'
import RegisterView from '@/pages/Register'
import { Navigate } from 'react-router-dom'

const routes = (isLoggedIn: boolean) => {
  const commonRoutes = [
    {
      path: '/',
      element: isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
    },
    {
      path: '/login',
      element: isLoggedIn ? <Navigate to="/home" replace /> : <LoginView />
    },
    {
      path: '/register',
      element: isLoggedIn ? <Navigate to="/home" replace /> : <RegisterView />
    },
    {
      path: '*',
      element: !isLoggedIn ? <Navigate to="/login" replace /> : <Navigate to="/404" replace />
    }
  ]

  const authenticatedRoutes = [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        { path: 'home', element: <HomeView /> },
        { path: '404', element: <NotFoundView /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    }
  ]

  return isLoggedIn ? [...commonRoutes, ...authenticatedRoutes] : commonRoutes
}

export default routes

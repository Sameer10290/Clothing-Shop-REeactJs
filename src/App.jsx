import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./pages/Root"
import HomePage from './pages/Home'
import ErrorPage from "./pages/Error"
import CartPage from './pages/Cart'
import ProfilePage from './pages/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'cart',
          element: <CartPage />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

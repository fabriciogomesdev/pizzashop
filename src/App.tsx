import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'
import './App.css'

import { router } from './routes'


export function App() {
  

  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop'/>
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}



import Header from '@/layouts/Header'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => (
  <>
    <Outlet />
    <Header />
  </>
)

export default HomeLayout

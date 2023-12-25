import Header from '@/layouts/Header'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => (
  <>
    <Outlet />
    <Header />
  </>
)

export default DashboardLayout

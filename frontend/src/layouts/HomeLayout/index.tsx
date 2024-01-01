import { Progress } from '@/components'
import Header from '@/layouts/Header'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => (
  <>
    <Outlet />
    <Header />
    <Progress
      maxProgress={100}
      intervalTime={40}
      initialProgress={0}
      progressIncrement={10}
      barColor="rgb(151, 146, 237)"
      bgColor="rgb(26, 25, 36)"
    />
  </>
)

export default HomeLayout

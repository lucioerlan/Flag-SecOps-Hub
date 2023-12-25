import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'

type TabProps = {
  children: React.ReactNode
  title: string
  'data-testid'?: string
}

const Tab = forwardRef<HTMLDivElement, TabProps>(({ title = '', children, ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
))

Tab.displayName = 'Tab'

export default Tab

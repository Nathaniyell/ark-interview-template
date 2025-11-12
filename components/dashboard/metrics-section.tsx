import React from 'react'
import { TotalRevenuesCard } from './total-revenues-card'
import { TotalOrdersCard } from './total-orders-card'
import { NewCustomersCard } from './new-customers-card'
import { TotalProductsSoldCard } from './total-products-sold-card'
import { SidebarNav } from './sidebar-nav'

export const MetricsSection = () => {
  return (
    <div className='relative flex gap-6'>
      <SidebarNav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <TotalRevenuesCard />
        <TotalOrdersCard />
        <TotalProductsSoldCard />
        <NewCustomersCard />
      </div>
    </div>
  )
}

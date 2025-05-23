import React from 'react'
import { OverviewPage } from '@/components/dashboard/overview'
import { SidebarLayoutWrapper } from "@/components/layout/sidebar";

export default function page() {
  return (
    <SidebarLayoutWrapper useSidebar={true}>
      <OverviewPage />
      </SidebarLayoutWrapper>

  )
}

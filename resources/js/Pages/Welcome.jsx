"use client"

import { usePage } from "@inertiajs/react"
import { Mail, Bell, Settings, HelpCircle } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import DashboardContent from "@/components/dashboard-content"
import { Button } from "@/components/ui/button"

const IconButton = ({ children }) => (
  <div className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer">
    {children}
  </div>
)

function DashboardLayout() {
  const { auth } = usePage().props
  const user = auth?.user
  const { isOpen } = useSidebar()

  if (!user) return null // atau tampilkan loading / placeholder

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex h-16 items-center justify-between px-4 border-b bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="-ml-1" />
          <img src="/img/logo.png" alt="Logo" className="w-8 h-8" />
          <Separator orientation="vertical" className="h-6 mx-2" />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full">Today</Button>
          <Button variant="outline" className="rounded-full">This Week</Button>
          <Button variant="default" className="rounded-full">This Month</Button>
          <Button variant="outline" className="rounded-full">Reports</Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IconButton><Mail className="w-5 h-5" /></IconButton>
            <IconButton><Bell className="w-5 h-5" /></IconButton>
            <IconButton><Settings className="w-5 h-5" /></IconButton>
            <IconButton><HelpCircle className="w-5 h-5" /></IconButton>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-medium">{user.name}</span>
              <span className="text-gray-500">{user.job}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        <AppSidebar />
        <SidebarInset>
          <DashboardContent />
        </SidebarInset>
      </div>
    </div>
  )
}

// Top-level Page
export default function Page() {
  return (
    <SidebarProvider defaultOpen={false}>
      <DashboardLayout />
    </SidebarProvider>
  )
}

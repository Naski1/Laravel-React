import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import DashboardContent from "@/components/dashboard-content";
import { Button } from "@/components/ui/button";
import { Mail, Bell, Settings, HelpCircle } from "lucide-react";

const IconButton = ({ children }) => (
  <div className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer">
    {children}
  </div>
)

export default function Page() {
  const user = {
    name: "John Smith",
    job: "Project Manager",
    avatar: "https://i.pravatar.cc/40?img=12",
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex h-16 items-center justify-between px-4 border-b bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
          {/* Kiri: Sidebar Trigger & Logo */}
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <img src="/img/logo.png" alt="Logo" className="w-8 h-8" />
            <Separator orientation="vertical" className="h-6 mx-2" />
          </div>

          {/* Tengah: Filter Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full">Today</Button>
            <Button variant="outline" className="rounded-full">This Week</Button>
            <Button variant="default" className="rounded-full">This Month</Button>
            <Button variant="outline" className="rounded-full">Reports</Button>
          </div>

          {/* Kanan: Icons + User */}
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
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col text-sm leading-tight">
                <span className="font-medium">{user.name}</span>
                <span className="text-gray-500">{user.job}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Layout (Sidebar + Content) */}
        <div className="flex flex-1 pt-16"> {/* pt-16 = tinggi header */}
          {/* Sidebar */}
          <aside className="w-64 border-r bg-gray-50 h-[calc(100vh-4rem)] fixed top-16 left-0 overflow-y-auto">
            <AppSidebar />
          </aside>

          {/* Konten */}
          <main className="ml-64 flex-1 bg-gray-200 p-4 min-h-[calc(100vh-4rem)] overflow-y-auto">
            <SidebarInset>
              <DashboardContent />
            </SidebarInset>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { Button } from "@/components/ui/button"
import { Mail, Bell, Settings, HelpCircle } from "lucide-react"

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
      {/* Full-width Header */}
      <header className="flex h-16 items-center justify-between px-4 border-b bg-white shadow-sm">
        {/* Kiri: Sidebar Trigger & Logo */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="-ml-1" />
          <img src="/img/logo.png" alt="Logo" className="w-8 h-8" />
          <Separator orientation="vertical" className="h-6 mx-2" />
          {/* Tambahkan Breadcrumb jika perlu */}
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

      {/* Layout bawah: Sidebar kiri + Konten kanan */}
      <div className="flex min-h-[calc(100vh-4rem)]"> {/* 4rem = height of header */}
        {/* Sidebar */}
        <div className="w-64 border-r bg-gray-50">
          <AppSidebar />
        </div>

        {/* Konten */}
        <div className="flex-1 bg-white p-4">
          <SidebarInset>
            <DashboardContent />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}

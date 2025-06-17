import {
    LayoutGrid,
    Calendar,
    Briefcase,
    ClipboardList,
    CheckSquare,
    Layers,
    FileText,
    MessageCircle,
    Users,
    Folder,
    HelpCircle,
    PieChart,
    Map,
    Frame,
    Settings,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar";

// Data default untuk sidebar
const defaultData = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        { title: "Playground", url: "#", icon: LayoutGrid, isActive: true },
        { title: "Models", url: "#", icon: Calendar },
        { title: "Documentation", url: "#", icon: Briefcase },
        { title: "Library", url: "#", icon: ClipboardList },
        { title: "Integrations", url: "#", icon: CheckSquare },
        { title: "Learn", url: "#", icon: Layers },
        { title: "API", url: "#", icon: FileText },
        { title: "Messages", url: "#", icon: MessageCircle },
        { title: "User Guide", url: "#", icon: Users },
        { title: "Folder", url: "#", icon: Folder },
        { title: "Terminal", url: "#", icon: HelpCircle },
        { title: "Settings", url: "#", icon: Settings },
    ],
    projects: [
        { name: "Design Engineering", url: "#", icon: Frame },
        { name: "Sales & Marketing", url: "#", icon: PieChart },
        { name: "Travel", url: "#", icon: Map },
    ],
};

export function AppSidebar({
    user = defaultData.user,
    navMain = defaultData.navMain,
    projects = defaultData.projects,
    className = "",
    ...props
}) {
    return (
        <Sidebar
            collapsible="icon"
            {...props}
            className={`bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 ${className}`}
            // Tambahkan prop width untuk mengontrol lebar
        >
            <SidebarRail className="" /> {/* Tambahkan padding horizontal */}

            <SidebarContent className=""> {/* Tambahkan padding */}
                <NavMain items={navMain} />
                {/* Jika ada projects, tambahkan dengan spacing */}
                {projects && projects.length > 0 && (
                    <div className="mt-8">
                        <NavProjects items={projects} />
                    </div>
                )}
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-200 dark:border-gray-800 px-3 py-4">
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
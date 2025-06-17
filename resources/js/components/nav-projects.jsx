"use client";

import {
    Folder,
    Forward,
    MoreHorizontal,
    Trash2,
    Plus,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavProjects({ projects = [] }) {
    const { state, isMobile } = useSidebar();

    return (
        <SidebarGroup className={cn(
            "transition-opacity",
            state === "collapsed" && "opacity-0 pointer-events-none",
            "group-data-[collapsible=icon]:block"
        )}>
            <SidebarGroupLabel className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Projects
            </SidebarGroupLabel>
            
            <SidebarMenu className="space-y-1">
                {projects.map((item) => {
                    const Icon = item.icon;
                    return (
                        <SidebarMenuItem key={item.name} className="group relative">
                            <SidebarMenuButton
                                className={cn(
                                    "hover:bg-accent/50 transition-colors",
                                    item.isActive && "bg-accent text-accent-foreground"
                                )}
                            >
                                <a 
                                    href={item.url} 
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg w-full"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-accent-foreground">
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium truncate">
                                        {item.name}
                                    </span>
                                </a>
                            </SidebarMenuButton>
                            
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction 
                                        showOnHover
                                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                        <span className="sr-only">More options</span>
                                    </SidebarMenuAction>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-48 rounded-lg shadow-lg"
                                    side={isMobile ? "bottom" : "right"}
                                    align={isMobile ? "end" : "start"}
                                    sideOffset={8}
                                >
                                    <DropdownMenuItem className="gap-2">
                                        <Folder className="h-4 w-4 text-muted-foreground" />
                                        <span>View Project</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="gap-2">
                                        <Forward className="h-4 w-4 text-muted-foreground" />
                                        <span>Share Project</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                                        <Trash2 className="h-4 w-4" />
                                        <span>Delete Project</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    );
                })}
                
                <SidebarMenuItem>
                    <SidebarMenuButton 
                        className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors px-3 py-2 rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-accent-foreground">
                                <Plus className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium">Add Project</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    );
}
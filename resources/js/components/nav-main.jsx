"use client";

import { ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
    const { state } = useSidebar();

    return (
        <SidebarGroup className="space-y-1">
            {/* Only show label when expanded */}
            {state === "expanded" && (
                <SidebarGroupLabel className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Platform
                </SidebarGroupLabel>
            )}

            <SidebarMenu className="space-y-1">
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <SidebarMenuButton
                                    active={item.isActive}
                                    className={`group flex items-center transition-all ${
                                        state === "expanded" 
                                            ? "w-full px-3 py-2 rounded-lg" 
                                            : "w-10 h-10 mx-auto rounded-full"
                                    }`}
                                >
                                    <div className={`flex items-center ${
                                        state === "expanded" ? "gap-3" : "justify-center"
                                    }`}>
                                        <div className={`
                                            flex items-center justify-center
                                            ${item.isActive 
                                                ? "bg-primary text-primary-foreground" 
                                                : "bg-accent text-accent-foreground"
                                            }
                                            ${state === "expanded" 
                                                ? "w-8 h-8 rounded-lg" 
                                                : "w-10 h-10 rounded-full"
                                            }
                                            transition-colors
                                        `}>
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        {state === "expanded" && (
                                            <span className="text-sm font-medium">
                                                {item.title}
                                            </span>
                                        )}
                                    </div>
                                </SidebarMenuButton>
                            </TooltipTrigger>
                            {state === "collapsed" && (
                                <TooltipContent side="right" sideOffset={10}>
                                    {item.title}
                                    {item.isActive && (
                                        <span className="ml-1 text-primary">•</span>
                                    )}
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
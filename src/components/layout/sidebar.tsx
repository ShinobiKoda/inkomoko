"use client";

import { Calendar, Home, Inbox, Search, Settings, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Header } from "../header";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard/overview",
    icon: Home,
  },
  {
    title: "HR Panel",
    url: "/dashboard/hr-panel",
    icon: Inbox,
  },

  {
    title: "Employee Panel",
    url: "/dashboard/employee-panel",
    icon: Inbox,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Calendar,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: Search,
  },
  {
    title: "Bills",
    url: "/dashboard/bills",
    icon: Settings,
  },
];

export function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex flex-row w-full">
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-[#FF698D]">INKO</span>
            <span className="text-white">MOKO</span>
          </h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`text-[16px] font-semibold ${
                          pathname === item.url
                            ? "bg-[#FF698D] text-white"
                            : "text-[#757575]"
                        }`}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main content area */}
      <div className="flex flex-col w-full">
        {/* Hamburger menu for smaller screens */}
        <button
          className="md:hidden p-2 text-white bg-[#FF698D] fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <Menu />
        </button>
        {/* Header */}
        <Header />
        {/* Page content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export function SidebarLayoutWrapper({
  children,
  useSidebar,
}: Readonly<{
  children: React.ReactNode;
  useSidebar: boolean;
}>) {
  return (
    <SidebarProvider>
      {useSidebar ? <SidebarLayout>{children}</SidebarLayout> : <>{children}</>}
    </SidebarProvider>
  );
}

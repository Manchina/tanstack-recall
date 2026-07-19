"use client"

import type { NavPrimaryProps } from "@/lib/types"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from '@tanstack/react-router'

export function NavPrimary({ items }: NavPrimaryProps) {
  return ( 
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild size="sm">
                  <Link activeProps={{
                    'data-active': true
                  }} to={item.to} activeOptions={item.activeOptions}>
                    <Icon />
                    <span>
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0091FF",
        tabBarInactiveTintColor: "#888",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 108,
          paddingBottom: 0,
          paddingTop: 10,
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="magnifyingglass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: "Meus Eventos",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="ticket" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="person.circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          display: "none", // 👈 Oculta a barra de abas inferior completamente em todas as telas
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Buscar",
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: "Meus Eventos",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}
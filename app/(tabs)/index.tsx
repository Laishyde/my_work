import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image as ExpoImage } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [, setCurrentTime] = useState("");
  const [activeTab, setActiveTab] = useState<"proximos" | "anterior">("proximos");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleEventPress = (eventId: string) => {
    (router as any).push(`/event/${eventId}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Status Bar / Heart Icon Row */}
        <View style={styles.statusBarRow}>
          <IconSymbol name="heart.fill" size={18} color="#ffffff" />
        </View>

        {/* Header */}
        <View style={styles.mainHeader}>
          <Text style={styles.mainTitle}>Meus ingressos</Text>
          
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <IconSymbol name="bell" size={26} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <IconSymbol name="person.crop.circle" size={26} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Abas (Tabs) */}
        <View style={styles.tabContainer}>
         <TouchableOpacity
            style={[styles.tab, activeTab === "proximos" && styles.tabActive]}
            onPress={() => router.push("/tickets")} // 👈 Redireciona para a tela de tickets
            activeOpacity={0.9}
          >
            <Text style={[styles.tabText, activeTab === "proximos" && styles.tabTextActive]}>
              Próximos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "anterior" && styles.tabActive]}
            onPress={() => setActiveTab("anterior")}
            activeOpacity={0.9}
          >
            <Text style={[styles.tabText, activeTab === "anterior" && styles.tabTextActive]}>
              Anterior
            </Text>
          </TouchableOpacity>
        </View>

        {/* Seção / Divider de Mês */}
        <Text style={styles.monthDivider}>Julho 2026</Text>

        {/* Card de Ingresso - Jonas Brothers */}
        <TouchableOpacity
          style={styles.ticketCard}
          onPress={() => handleEventPress("jonas-brothers")}
          activeOpacity={0.8}
        >
          <View style={styles.eventImageContainer}>
            <ExpoImage
              source={require("../../assets/images/lop.jpg")}
              style={styles.eventImage}
            />
          </View>

          <View style={styles.eventInfo}>
            <View style={styles.ticketMeta}>
              <Text style={styles.ticketCount}>4 ingressos</Text>
              <Text style={styles.eventDate}>Sábado 04 • 19:30h</Text>
            </View>

            <Text style={styles.eventTitle} numberOfLines={2}>
              ENHYPEN WORLD TOUR ‘BLOOD SAGA’
            </Text>

            <Text style={styles.eventLocation} numberOfLines={1}>
              Nubank parque 
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  statusBarRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: -1.5,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  iconButton: {
    padding: 2,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    marginVertical: 16,
    borderRadius: 18,
    padding: 5,
    width: "100%",
  },
  tab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    backgroundColor: "#ffffff",
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#888888",
  },
  tabTextActive: {
    color: "#000000",
  },
  monthDivider: {
    paddingHorizontal: 2,
    paddingTop: 24,
    paddingBottom: 14,
    fontSize: 22,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: -0.5,
  },
  ticketCard: {
    flexDirection: "row",
    padding: 14,
    alignItems: "center",
    gap: 14,
    borderRadius: 18,
    backgroundColor: "#111111",
    marginBottom: 18,
  },
  eventImageContainer: {
    width: 105,
    height: 105,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    flexShrink: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 6,
  },
  eventImage: {
    width: "100%",
    height: "100%",
  },
  eventInfo: {
    flex: 1,
    justifyContent: "center",
  },
  ticketMeta: {
    flexDirection: "column",
    gap: 2,
    marginBottom: 6,
  },
  ticketCount: {
    color: "#40e0d0",
    fontSize: 13,
    fontWeight: "700",
  },
  eventDate: {
    color: "#888888",
    fontSize: 13,
    fontWeight: "500",
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: 24,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: -0.5,
  },
  eventLocation: {
    color: "#b0b0b0",
    fontSize: 15,
    fontWeight: "500",
  },
});
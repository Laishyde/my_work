import { IconSymbol } from "@/components/ui/icon-symbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const tickets = [
  {
    id: 1,
    tab: "Ingresso 1",
    evento: "KORN",
    data: "Sábado · 16/mai/26 · 16:00",
    setor: "CADEIRA SUPERIOR",
    secao: "SUPERIOR",
    entrada: "PORTÃO B, D",
    valor: "R$ 365,00",
    total: "R$ 365,00",
    qr: "KORN-CADEIRA-SUPERIOR",
    valorTipo: "INTEIRA",
  },
  {
    id: 2,
    tab: "Ingresso 2",
    evento: "KORN",
    data: "Sábado · 16/mai/26 · 16:00",
    setor: "PISTA",
    secao: "PISTA",
    entrada: "PORTÃO A",
    valor: "R$ 495,00",
    total: "R$ 495,00",
    qr: "KORN-PISTA",
    valorTipo: "INTEIRA",
  },
  {
    id: 3,
    tab: "Ingresso 3",
    evento: "KORN",
    data: "Sábado · 16/mai/26 · 16:00",
    setor: "CADEIRA INFERIOR",
    secao: "INFERIOR",
    entrada: "PORTÃO A, C, D",
    valor: "R$ 645,00",
    total: "R$ 645,00",
    qr: "KORN-CADEIRA-INFERIOR",
    valorTipo: "INTEIRA",
  },
  {
    id: 4,
    tab: "Ingresso 4",
    evento: "KORN",
    data: "Sábado · 16/mai/26 · 16:00",
    setor: "PISTA PREMIUM",
    secao: "PREMIUM",
    entrada: "PORTÃO B",
    valor: "R$ 995,00",
    total: "R$ 995,00",
    qr: "KORN-PISTA-PREMIUM",
    valorTipo: "INTEIRA",
  },
];

export default function TicketsScreen() {
  console.log("TICKETS RENDER");
  const [selectedTicket, setSelectedTicket] = useState(0);
  const currentTicket = tickets[selectedTicket];
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <IconSymbol name="arrow.left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{currentTicket.evento}</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tickets.map((ticket, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, selectedTicket === index && styles.activeTab]}
            onPress={() => setSelectedTicket(index)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTicket === index && styles.activeTabText,
              ]}
            >
              {ticket.tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* QR Code Section */}
        <View style={styles.qrContainer}>
          <View style={styles.qrWhiteBox}>
            <Image
              source={{
                uri: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${currentTicket.qr}`,
              }}
              style={styles.qrImage}
            />
          </View>
        </View>

        {/* Transfer Button */}
        <TouchableOpacity style={styles.transferButton}>
          <IconSymbol name="person.badge.plus.fill" size={18} color="#fff" />
          <Text style={styles.transferButtonText}>TRANSFERIR</Text>
        </TouchableOpacity>

        {/* Event Details Card (MANTIDO EXATAMENTE AQUI APÓS O TRANSFERIR) */}
        <View style={styles.infoCard}>
          <Text style={styles.eventTitle}>{currentTicket.evento}</Text>
          <Text style={styles.eventSubtitle}>{currentTicket.data}</Text>

          <View style={styles.divider} />

          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Text style={styles.label}>SETOR</Text>
              <Text style={styles.value}>{currentTicket.setor}</Text>
            </View>
            <View style={styles.gridItem}>
              <Text style={styles.label}>ENTRADA</Text>
              <Text style={styles.value}>{currentTicket.entrada}</Text>
            </View>
          </View>

          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Text style={styles.label}>SEÇÃO</Text>
              <Text style={styles.value}>{currentTicket.secao}</Text>
            </View>
          </View>

          {/* VALOR */}
          <View style={styles.valorSection}>
            <Text style={styles.valorLabel}>VALOR</Text>

            <Text style={styles.valorTipo}>{currentTicket.valorTipo}</Text>

            <Text style={styles.valorPreco}>{currentTicket.valor}</Text>
          </View>
        </View>

        {/* --- ADICIONADO ABAIXO DAS INFORMAÇÕES DO SHOW --- */}

        {/* Links de Ações Rápidas */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionRow}>
            <IconSymbol name="calendar" size={18} color="#0091FF" />
            <Text style={styles.actionTextBlue}>Inserir na Agenda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionRow}>
            {/* ÍCONE DE COMPARTILHAR ATUALIZADO */}
            <IconSymbol name="share" size={18} color="#0091FF" />
            <Text style={styles.actionTextBlue}>Compartilhar</Text>
          </TouchableOpacity>
        </View>

        {/* Status de Transferência */}
        <View style={styles.transferStatusContainer}></View>

        {/* Formulário de Informações do Pedido */}
        <View style={styles.orderInfoContainer}>
          <Text style={styles.sectionTitle}>Informações do pedido</Text>

          {/* Data do pedido */}
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Data do pedido</Text>
            <View style={styles.inputField}>
              <Text style={styles.inputValue}>16/10/2025</Text>
            </View>
          </View>

          {/* Número do pedido */}
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Número do pedido</Text>
            <View style={[styles.inputField, styles.inputFieldRow]}>
              <Text style={styles.inputValue}>1738789703</Text>
              <TouchableOpacity activeOpacity={0.7}>
                {/* ÍCONE DE COPIAR/COLAR ATUALIZADO */}
                <IconSymbol name="copy" size={16} color="#A3A3A3" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Quantidade de ingressos */}
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Quantidade de ingressos</Text>
            <View style={styles.inputField}>
              <Text style={styles.inputValue}>1</Text>
            </View>
          </View>

          {/* Total */}
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Total</Text>
            <View style={styles.inputField}>
              <Text style={styles.inputValue}>{currentTicket.total}</Text>
            </View>
          </View>

          {/* Status */}
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Status</Text>
            <View style={styles.inputField}>
              <Text style={styles.inputValue}>Pago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 24,
    textTransform: "uppercase",
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#EAB308",
  },
  tabText: {
    color: "#888",
    fontSize: 13,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#EAB308",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
  },
  qrContainer: {
    width: "100%",
    aspectRatio: 1,
    padding: 10,
    marginBottom: 25,
  },
  qrWhiteBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  qrImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  transferButton: {
    flexDirection: "row",
    backgroundColor: "#2285B1",
    width: "100%",
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 25,
  },
  transferButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  infoCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 2,
    padding: 20,
    paddingBottom: 10,
    marginBottom: 25, // Pequena margem para afastar do novo bloco de ações
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#000",
    marginBottom: 4,
  },
  eventSubtitle: {
    fontSize: 13,
    color: "#555",
    fontWeight: "500",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 18,
  },
  gridRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  gridItem: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: "#777",
    fontWeight: "600",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  footerLabel: {
    fontSize: 9,
    color: "#999",
    fontWeight: "700",
    marginBottom: 2,
  },
  footerValue: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000",
  },

  // Novos estilos para o formulário do telefone mantidos no final
  actionsContainer: {
    width: "100%",
    gap: 16,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionTextBlue: {
    color: "#0091FF", // Azul mais vivo e forte
    fontSize: 14,
    fontWeight: "700", // Mais bold
  },
  transferStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 6,
    marginBottom: 25,
  },
  transferStatusText: {
    color: "#A3A3A3",
    fontSize: 14,
  },
  orderInfoContainer: {
    width: "100%",
    marginBottom: 30,
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  formGroup: {
    marginBottom: 16,
    width: "100%",
  },
  inputLabel: {
    color: "#A3A3A3",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
    alignSelf: "flex-start",
  },
  inputField: {
    backgroundColor: "#1F1F1F",
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 44,
    justifyContent: "center",
  },
  inputFieldRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputValue: {
    color: "#E5E5E5",
    fontSize: 14,
    fontWeight: "500",
  },
  valorSection: {
    marginTop: -8,
    paddingTop: 0,
    alignItems: "flex-start",
  },
  valorLabel: {
    fontSize: 11,
    color: "#8A8A8A",
    fontWeight: "600",
    marginBottom: 4,
    letterSpacing: 0.3,
  },

  valorTipo: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  valorPreco: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
});

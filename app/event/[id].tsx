import { IconSymbol } from "@/components/ui/icon-symbol";
import { mockEvents } from "@/constants/mockData";
import { Image as ExpoImage } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Modal,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function EventDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<any>(null);

  const event = mockEvents.find((e) => e.id === (id as string));

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Evento não encontrado</Text>
      </View>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleBuyTicket = () => {
    const newTicket = {
      id: `t${Date.now()}`,
      eventId: event.id,
      eventTitle: event.title,
      eventImage: event.image,
      date: event.date,
      time: event.time,
      location: event.location,
      venue: event.venue,
      seat: `Setor ${String.fromCharCode(65 + Math.floor(Math.random() * 6))}, Fileira ${Math.floor(Math.random() * 30) + 1}, Assento ${Math.floor(Math.random() * 50) + 1}`,
      price: event.price * quantity,
      qrCode: `${event.id.substring(0, 3).toUpperCase()}-${event.date.replace(/-/g, "")}-${Math.floor(Math.random() * 10000)}`,
      status: "valid" as const,
      purchaseDate: new Date().toISOString().split("T")[0],
    };
    setGeneratedTicket(newTicket);
    setShowTicketModal(true);
  };

  const handleFavorite = () => {
    Alert.alert("Sucesso", "Evento adicionado aos favoritos!");
  };

  const handleShare = () => {
    Alert.alert(
      "Compartilhar",
      "Link do evento copiado para a área de transferência!",
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header Image */}
      <View style={styles.headerImageContainer}>
        <ExpoImage source={event.image} style={styles.headerImage} />
        <View style={styles.headerOverlay}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <IconSymbol name="chevron.left" size={28} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleFavorite}
            >
              <IconSymbol name="heart" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
              <IconSymbol name="square.and.arrow.up" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Event Info */}
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <View style={styles.ratingContainer}>
            <IconSymbol name="star.fill" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>{event.rating}</Text>
            <Text style={styles.ratingCount}>(2.5k avaliações)</Text>
          </View>
        </View>

        {/* Date and Time */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <IconSymbol name="calendar" size={24} color="#007AFF" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Data</Text>
              <Text style={styles.infoValue}>{formatDate(event.date)}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <IconSymbol name="clock" size={24} color="#007AFF" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Horário</Text>
              <Text style={styles.infoValue}>{event.time}</Text>
            </View>
          </View>
        </View>

        {/* Location */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <IconSymbol name="mappin" size={24} color="#007AFF" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Local</Text>
              <Text style={styles.infoValue}>{event.venue}</Text>
              <Text style={styles.infoSubValue}>
                {event.location}, {event.city}
              </Text>
            </View>
          </View>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <IconSymbol name="map" size={48} color="#ccc" />
            <Text style={styles.mapText}>Mapa do local</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Sobre o evento</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>

        {/* Tickets */}
        <View style={styles.ticketsSection}>
          <Text style={styles.sectionTitle}>Ingressos</Text>
          <View style={styles.ticketCard}>
            <View style={styles.ticketInfo}>
              <Text style={styles.ticketType}>Ingresso Padrão</Text>
              <Text style={styles.ticketPrice}>R$ {event.price}</Text>
              <Text style={styles.ticketAvailable}>
                {event.availableTickets} disponíveis
              </Text>
            </View>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <IconSymbol name="minus" size={20} color="#007AFF" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.min(10, quantity + 1))}
              >
                <IconSymbol name="plus" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Total */}
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R$ {event.price * quantity}</Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Buy Button */}
      <View style={styles.buyButtonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyTicket}>
          <Text style={styles.buyButtonText}>Comprar Ingresso</Text>
        </TouchableOpacity>
      </View>

      {/* Ticket Modal */}
      <Modal
        visible={showTicketModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowTicketModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ingresso Gerado!</Text>
              <TouchableOpacity onPress={() => setShowTicketModal(false)}>
                <IconSymbol name="xmark" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {generatedTicket && (
              <View style={styles.ticketPreview}>
                <ExpoImage
                  source={generatedTicket.eventImage}
                  style={styles.ticketImage}
                />
                <Text style={styles.ticketEventTitle}>
                  {generatedTicket.eventTitle}
                </Text>
                <View style={styles.ticketDetails}>
                  <Text style={styles.ticketDetailText}>
                    {formatDate(generatedTicket.date)}
                  </Text>
                  <Text style={styles.ticketDetailText}>
                    {generatedTicket.time}
                  </Text>
                  <Text style={styles.ticketDetailText}>
                    {generatedTicket.venue}
                  </Text>
                </View>
                <View style={styles.qrCodeContainer}>
                  <View style={styles.qrCodePlaceholder}>
                    <IconSymbol name="qrcode" size={80} color="#000" />
                  </View>
                  <Text style={styles.qrCodeText}>
                    {generatedTicket.qrCode}
                  </Text>
                </View>
                <Text style={styles.ticketSeat}>{generatedTicket.seat}</Text>
                <View
                  style={[styles.statusBadge, { backgroundColor: "#4CAF50" }]}
                >
                  <Text style={styles.statusText}>Válido</Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowTicketModal(false);
                router.back();
              }}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImageContainer: {
    height: 300,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
  eventInfo: {
    padding: 20,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  ratingCount: {
    fontSize: 14,
    color: "#666",
  },
  infoSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  infoIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  infoSubValue: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  mapContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  mapText: {
    fontSize: 14,
    color: "#999",
    marginTop: 8,
  },
  descriptionSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  ticketsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  ticketCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ticketInfo: {
    flex: 1,
  },
  ticketType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  ticketPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#007AFF",
    marginBottom: 4,
  },
  ticketAvailable: {
    fontSize: 12,
    color: "#666",
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    minWidth: 24,
    textAlign: "center",
  },
  totalSection: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  totalValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#007AFF",
  },
  buyButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  buyButton: {
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  ticketPreview: {
    alignItems: "center",
    marginBottom: 24,
  },
  ticketImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 16,
  },
  ticketEventTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 12,
  },
  ticketDetails: {
    alignItems: "center",
    marginBottom: 16,
  },
  ticketDetailText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  qrCodeContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  qrCodePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 8,
  },
  qrCodeText: {
    fontSize: 12,
    color: "#666",
  },
  ticketSeat: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  statusBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  modalButton: {
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});

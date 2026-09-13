import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii, shadows } from '../theme';

export default function DoctorProfileScreen({ route, navigation }) {
  const { doctor } = route.params || {};

  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>

        <Image source={{ uri: doctor?.image }} style={styles.profileImage} />

        <Text style={styles.name}>{doctor?.name}</Text>
        <Text style={styles.spec}>{doctor?.specialty}</Text>
        <Text style={styles.price}>Valor da Consulta: {doctor?.price}</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sobre o Profissional</Text>
          <Text style={styles.aboutText}>{doctor?.about}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.chatBtn}
            onPress={() => navigation.navigate('Chat', { doctor })}
          >
            <MaterialCommunityIcons name="chat" size={20} color="#FFF" />
            <Text style={styles.btnLabel}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bookBtn}
            onPress={() => navigation.navigate('Appointment', { doctor })}
          >
            <LinearGradient colors={[colors.glowPink, colors.glowPurple]} style={styles.btnGrad}>
              <Text style={styles.btnLabel}>Agendar Consulta</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingTop: 50, alignItems: 'center' },
  backBtn: { alignSelf: 'flex-start', marginBottom: 15 },
  profileImage: { width: 140, height: 160, borderRadius: radii.md, marginBottom: 15 },
  name: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  spec: { color: colors.glowCyan, fontSize: 14, marginBottom: 5 },
  price: { color: colors.glowPink, fontSize: 15, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: colors.cardBg, padding: 18, borderRadius: radii.md, borderWidth: 1, borderColor: colors.cardBorder, width: '100%', marginBottom: 25 },
  sectionTitle: { color: '#FFF', fontSize: 15, fontWeight: 'bold', marginBottom: 8 },
  aboutText: { color: colors.textSecondary, fontSize: 13, lineHeight: 18 },
  actions: { flexDirection: 'row', width: '100%', gap: 10 },
  chatBtn: { flex: 1, backgroundColor: colors.cardBg, borderWidth: 1, borderColor: colors.cardBorder, borderRadius: radii.pill, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 6, paddingVertical: 14 },
  bookBtn: { flex: 2, borderRadius: radii.pill, overflow: 'hidden', ...shadows.neonPink },
  btnGrad: { paddingVertical: 14, alignItems: 'center' },
  btnLabel: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
});

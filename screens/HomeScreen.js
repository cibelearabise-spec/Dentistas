import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii, shadows } from '../theme';
import { DOCTORS } from '../data/doctorsData';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Superior */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Bem-vindo(a) ao</Text>
            <Text style={styles.brandTitle}>GLOW ODONTO & SKIN</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <LinearGradient colors={[colors.glowPink, colors.glowPurple]} style={styles.avatarGlow}>
              <MaterialCommunityIcons name="account" size={24} color="#FFF" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Banner da Dra. Cibele em Destaque */}
        <TouchableOpacity 
          style={styles.featuredDoctorCard}
          onPress={() => navigation.navigate('DoctorProfile', { doctor: DOCTORS[0] })}
        >
          <LinearGradient colors={['rgba(157,78,221,0.3)', 'rgba(247,37,133,0.15)']} style={styles.featuredGradient}>
            <Image source={{ uri: DOCTORS[0].image }} style={styles.doctorThumb} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorBadge}>DENTISTA EM DESTAQUE</Text>
              <Text style={styles.doctorName}>{DOCTORS[0].name}</Text>
              <Text style={styles.doctorSpec}>{DOCTORS[0].specialty}</Text>
              <Text style={styles.doctorRating}>★ {DOCTORS[0].rating} ({DOCTORS[0].reviews} avaliações)</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Seção de Conhecimento: Glicação e Tipos de Pele */}
        <Text style={styles.sectionHeader}>Educação, Pele & Glicação</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <LinearGradient colors={['rgba(157,78,221,0.2)', 'rgba(247,37,133,0.1)']} style={styles.glowCard}>
            <MaterialCommunityIcons name="molecule" size={28} color={colors.glowPink} />
            <Text style={styles.cardTag}>GLICAÇÃO CUTÂNEA</Text>
            <Text style={styles.cardTitle}>Impacto na Pele & Gengiva</Text>
            <Text style={styles.cardDesc}>Como o acúmulo de açúcares danifica as fibras de colágeno e afeta o sorriso.</Text>
          </LinearGradient>

          <LinearGradient colors={['rgba(0,242,254,0.2)', 'rgba(114,9,183,0.1)']} style={styles.glowCard}>
            <MaterialCommunityIcons name="face-woman-outline" size={28} color={colors.glowCyan} />
            <Text style={styles.cardTag}>TIPOS DE PELE</Text>
            <Text style={styles.cardTitle}>Avaliação Orofacial</Text>
            <Text style={styles.cardDesc}>Identifique se sua pele é seca, oleosa, mista ou sensível para os tratamentos corretos.</Text>
          </LinearGradient>
        </ScrollView>

        {/* Menu Acesso Rápido da Jornada do Paciente */}
        <Text style={styles.sectionHeader}>Navegação Rápida</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('DoctorList')}>
            <MaterialCommunityIcons name="doctor" size={28} color={colors.glowCyan} />
            <Text style={styles.gridText}>Dentistas/Médicos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Appointment')}>
            <MaterialCommunityIcons name="calendar-check" size={28} color={colors.glowPink} />
            <Text style={styles.gridText}>Agendar Consulta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Chat')}>
            <MaterialCommunityIcons name="chat-processing-outline" size={28} color={colors.glowPurple} />
            <Text style={styles.gridText}>Consulta por Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('MyAppointments')}>
            <MaterialCommunityIcons name="clipboard-text-outline" size={28} color={colors.accentGreen} />
            <Text style={styles.gridText}>Minhas Consultas</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  welcomeText: { color: colors.textSecondary, fontSize: 12, letterSpacing: 1 },
  brandTitle: { color: colors.textPrimary, fontSize: 20, fontWeight: 'bold', letterSpacing: 1.5 },
  avatarGlow: { width: 42, height: 42, borderRadius: 21, justifyContent: 'center', alignItems: 'center' },
  featuredDoctorCard: { borderRadius: radii.md, overflow: 'hidden', marginBottom: 25, ...shadows.neonPurple },
  featuredGradient: { padding: 16, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.cardBorder, borderRadius: radii.md },
  doctorThumb: { width: 70, height: 85, borderRadius: radii.sm },
  doctorInfo: { marginLeft: 15, flex: 1 },
  doctorBadge: { color: colors.glowCyan, fontSize: 9, fontWeight: 'bold', letterSpacing: 1 },
  doctorName: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginTop: 2 },
  doctorSpec: { color: colors.textSecondary, fontSize: 12 },
  doctorRating: { color: colors.glowPink, fontSize: 12, marginTop: 4, fontWeight: 'bold' },
  sectionHeader: { color: colors.textPrimary, fontSize: 16, fontWeight: '600', marginBottom: 15, marginTop: 10 },
  horizontalScroll: { marginBottom: 25 },
  glowCard: { width: 230, padding: 16, borderRadius: radii.md, marginRight: 15, borderWidth: 1, borderColor: colors.cardBorder },
  cardTag: { color: colors.glowPink, fontSize: 9, fontWeight: 'bold', marginTop: 8 },
  cardTitle: { color: '#FFF', fontSize: 15, fontWeight: 'bold', marginVertical: 4 },
  cardDesc: { color: colors.textSecondary, fontSize: 11, lineHeight: 15 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '48%', backgroundColor: colors.cardBg, borderRadius: radii.md, padding: 16, alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: colors.cardBorder },
  gridText: { color: colors.textPrimary, fontSize: 12, marginTop: 8, fontWeight: '500' },
});

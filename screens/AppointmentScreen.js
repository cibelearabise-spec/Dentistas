import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii, shadows } from '../theme';

export default function AppointmentScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('15');
  const [selectedTime, setSelectedTime] = useState('14:00');

  const handleBooking = () => {
    Alert.alert("Agendamento Solicitado!", "Sua consulta odonto-estética foi enviada com sucesso.", [
      { text: "Ver Minhas Consultas", onPress: () => navigation.navigate('MyAppointments') }
    ]);
  };

  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Agendamento</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Selecione o Dia</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysScroll}>
          {['14', '15', '16', '17', '18'].map((day) => (
            <TouchableOpacity 
              key={day} 
              style={[styles.dayCard, selectedDate === day && styles.selectedDay]}
              onPress={() => setSelectedDate(day)}
            >
              <Text style={styles.dayText}>SET</Text>
              <Text style={[styles.dateText, selectedDate === day && styles.selectedDateText]}>{day}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Horários Disponíveis</Text>
        <View style={styles.timeGrid}>
          {['09:00', '10:30', '14:00', '15:30', '17:00'].map((time) => (
            <TouchableOpacity 
              key={time} 
              style={[styles.timeChip, selectedTime === time && styles.selectedTime]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.confirmBtn} onPress={handleBooking}>
          <LinearGradient colors={[colors.glowPink, colors.glowPurple]} style={styles.btnGradient}>
            <Text style={styles.btnText}>CONFIRMAR AGENDAMENTO</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 50 },
  title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20 },
  sectionTitle: { color: colors.textSecondary, fontSize: 14, marginBottom: 12, marginTop: 10 },
  daysScroll: { marginBottom: 25 },
  dayCard: { width: 60, height: 75, backgroundColor: colors.cardBg, borderRadius: radii.md, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderWidth: 1, borderColor: colors.cardBorder },
  selectedDay: { borderColor: colors.glowCyan, backgroundColor: 'rgba(0,242,254,0.15)' },
  dayText: { color: colors.textMuted, fontSize: 10 },
  dateText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  selectedDateText: { color: colors.glowCyan },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 30 },
  timeChip: { paddingVertical: 12, paddingHorizontal: 20, backgroundColor: colors.cardBg, borderRadius: radii.pill, borderWidth: 1, borderColor: colors.cardBorder },
  selectedTime: { borderColor: colors.glowPink, backgroundColor: 'rgba(247,37,133,0.15)' },
  timeText: { color: colors.textSecondary, fontSize: 13 },
  selectedTimeText: { color: colors.glowPink, fontWeight: 'bold' },
  confirmBtn: { borderRadius: radii.pill, overflow: 'hidden', marginTop: 20, ...shadows.neonPink },
  btnGradient: { paddingVertical: 16, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
});

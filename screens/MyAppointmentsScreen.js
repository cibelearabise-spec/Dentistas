import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii } from '../theme';

const APPOINTMENTS = [
  { id: '1', doctor: 'Dra. Cibele Arabise', date: '15 de Setembro - 14:00', type: 'Avaliação Estética Orofacial', status: 'Confirmada' },
  { id: '2', doctor: 'Dra. Helena Wells', date: '22 de Setembro - 10:30', type: 'Análise de Glicação & Pele', status: 'Pendente' },
];

export default function MyAppointmentsScreen({ navigation }) {
  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Minhas Consultas</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={APPOINTMENTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.docName}>{item.doctor}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.date}>📅 {item.date}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 50 },
  title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  list: { padding: 20 },
  card: { backgroundColor: colors.cardBg, borderRadius: radii.md, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: colors.cardBorder },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  docName: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  status: { color: colors.glowCyan, fontSize: 11, fontWeight: 'bold' },
  type: { color: colors.textSecondary, fontSize: 12 },
  date: { color: colors.glowPink, fontSize: 12, marginTop: 8 },
});

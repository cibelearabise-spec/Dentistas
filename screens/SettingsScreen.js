import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii } from '../theme';

export default function SettingsScreen({ navigation }) {
  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Configurações</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        {['Perfil do Paciente', 'Notificações', 'Histórico Clínico', 'Políticas de Privacidade'].map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
            <MaterialCommunityIcons name="chevron-right" size={22} color={colors.glowCyan} />
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 50 },
  title: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20 },
  menuItem: { backgroundColor: colors.cardBg, padding: 16, borderRadius: radii.md, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: colors.cardBorder },
  menuText: { color: '#FFF', fontSize: 14 },
});

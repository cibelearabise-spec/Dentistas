import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii } from '../theme';
import { DOCTORS } from '../data/doctorsData';

export default function DoctorListScreen({ navigation }) {
  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Profissionais de Saúde</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={DOCTORS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DoctorProfile', { doctor: item })}
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.spec}>{item.specialty}</Text>
              <Text style={styles.meta}>📍 {item.location} • ★ {item.rating}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={colors.glowCyan} />
          </TouchableOpacity>
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
  card: { backgroundColor: colors.cardBg, borderRadius: radii.md, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: colors.cardBorder },
  avatar: { width: 55, height: 65, borderRadius: radii.sm },
  info: { flex: 1, marginLeft: 12 },
  name: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  spec: { color: colors.textSecondary, fontSize: 12 },
  meta: { color: colors.glowPink, fontSize: 11, marginTop: 4 },
});

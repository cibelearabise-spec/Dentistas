import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radii, shadows } from '../theme';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem de Destaque na Primeira Página */}
      <Image
        source={{ uri: 'https://i.postimg.cc/mDsk9h2C/dentist-hero.png' }}
        style={styles.heroImage}
        resizeMode="cover"
      />

      {/* Degradê Neon Sobreposto */}
      <LinearGradient
        colors={['transparent', 'rgba(11, 7, 25, 0.7)', '#0B0719']}
        style={styles.gradientOverlay}
      >
        <View style={styles.content}>
          <Text style={styles.badgeText}>GLOW ODONTO & SKIN</Text>
          <Text style={styles.title}>Dra. Cibele Arabise</Text>
          <Text style={styles.subtitle}>
            Alinhadores invisíveis, harmonização orofacial e cuidados avançados com a pele e glicação.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <LinearGradient
              colors={[colors.glowPink, colors.glowPurple]}
              style={styles.btnGradient}
            >
              <Text style={styles.btnText}>ENTRAR NO APLICATIVO</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0719' },
  heroImage: { width: width, height: height * 0.65 },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.55,
    justifyContent: 'flex-end',
    padding: 24,
  },
  content: { marginBottom: 30 },
  badgeText: { color: colors.glowCyan, fontSize: 12, fontWeight: 'bold', letterSpacing: 2, marginBottom: 8 },
  title: { color: '#FFF', fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: colors.textSecondary, fontSize: 14, lineHeight: 20, marginBottom: 24 },
  button: { borderRadius: radii.pill, overflow: 'hidden', ...shadows.neonPink },
  btnGradient: { paddingVertical: 16, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
});

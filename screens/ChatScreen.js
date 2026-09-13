import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii } from '../theme';

export default function ChatScreen({ route, navigation }) {
  const { doctor } = route.params || {};
  const [messages, setMessages] = useState([
    { id: '1', text: `Olá! Sou a ${doctor?.name || 'Dra. Cibele Arabise'}. Como posso te ajudar com seu sorriso ou estética hoje?`, sender: 'doctor' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: inputText, sender: 'user' },
    ]);
    setInputText('');
  };

  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>{doctor?.name || 'Consulta por Chat'}</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatArea}
        renderItem={({ item }) => (
          <View style={[styles.msgBubble, item.sender === 'user' ? styles.userMsg : styles.doctorMsg]}>
            <Text style={styles.msgText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor={colors.textMuted}
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <MaterialCommunityIcons name="send" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 50 },
  title: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  chatArea: { padding: 20 },
  msgBubble: { padding: 14, borderRadius: radii.md, marginBottom: 10, maxWidth: '80%' },
  doctorMsg: { backgroundColor: colors.cardBg, borderLeftWidth: 3, borderLeftColor: colors.glowPink, alignSelf: 'flex-start' },
  userMsg: { backgroundColor: '#3D2862', alignSelf: 'flex-end' },
  msgText: { color: '#FFF', fontSize: 13 },
  inputBar: { flexDirection: 'row', padding: 15, backgroundColor: colors.navBg, alignItems: 'center' },
  input: { flex: 1, backgroundColor: colors.cardBg, color: '#FFF', borderRadius: radii.pill, paddingHorizontal: 16, height: 42, borderWidth: 1, borderColor: colors.cardBorder },
  sendBtn: { marginLeft: 10, backgroundColor: colors.glowPurple, width: 42, height: 42, borderRadius: 21, justifyContent: 'center', alignItems: 'center' },
});

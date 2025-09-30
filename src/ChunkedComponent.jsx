import { StyleSheet, Text, View } from 'react-native';

export default function ChunkedComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from a separate chunk 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fafafa' },
  text: { fontSize: 18, color: 'purple' },
});
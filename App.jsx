import { ActivityIndicator, Button, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadChunk = async () => {
    setLoading(true);

    // Dynamic import with stable chunk name
    const module = await import(
      /* webpackChunkName: "ChunkedComponent" */ './src/ChunkedComponent.jsx'
    );
    setComponent(() => module.default);

    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {Component ? (
        <Component />
      ) : loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Load Component" onPress={loadChunk} />
      )}
    </View>
  );
}

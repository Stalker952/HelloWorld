import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const firstName = 'Victor Alejandro';
  const lastName = 'Aquino Morales';

  const handleToggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello World by {firstName} {lastName}
      </Text>

      <MainCard loading={isLoading} />

      <Button
        title={isLoading ? 'Mostrar' : 'Cargar'}
        onPress={handleToggleLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
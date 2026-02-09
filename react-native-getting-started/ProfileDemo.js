import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Information</Text>

      <Text style={styles.label}>Course & Section:</Text>
      <Text style={styles.value}>BS Information Systems - Section B</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Estela</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>22</Text>

      <Text style={styles.label}>Favorite Hobby:</Text>
      <Text style={styles.value}>Watching anime and reading manga</Text>

      <Text style={styles.label}>Short Bio:</Text>
      <Text style={styles.value}>
        I like doing things at my own phase.
      </Text>

      <Text style={styles.header}>Pet Peeves in Class</Text>
      <Text style={styles.value}>1. People who always put themselves first</Text>
      <Text style={styles.value}>2. People who lack emotional intelligence</Text>
      <Text style={styles.value}>3. People who makes things always about themselves</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#555',
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
});

export default StudentProfile;
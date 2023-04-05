import React, {useState} from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#22223B',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#1A1A2D',
      marginBottom: 20,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#22223B',
      borderTopWidth: 1,
      borderTopColor: '#F2E9E4',
      paddingVertical: 10,
    },
  });
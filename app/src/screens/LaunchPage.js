import React, {useState} from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 20,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingVertical: 10,
    },
  });